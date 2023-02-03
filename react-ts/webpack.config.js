const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const config = {
  entry: path.resolve(__dirname, 'src', 'index'),
  mode: 'development',
  devServer: {
    port: 3000,
    hot: false,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers':
        'X-Requested-With, content-type, Authorization',
    },
    open: {
      target: [`http://localhost:3000`],
      app: {
        name: 'google-chrome',
        arguments: ['--incognito', '--new-window'],
      },
    },
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
    fallback: {
      crypto: false,
    },
    alias: {
      PUBLIC_DIR: path.resolve(__dirname, 'public'),
      SRC_DIR: path.resolve(__dirname, 'src'),
      PACKAGE_FILE: path.resolve(__dirname, 'package.json'),
    },
  },
  output: {
    publicPath: 'auto',
    chunkFilename: 'static/js/[id].[contenthash].js',
    path: path.resolve(process.cwd(), 'dist'),
    filename: 'static/js/[name].[contenthash].bundle.js',
    assetModuleFilename: (pathData) => {
      const result = pathData.filename
        .substr(pathData.filename.indexOf('public/'))
        .split('/')
        .slice(1)

      result.pop()

      let folder = result.join('/')

      folder += result.length === 0 ? '' : '/'

      return `${folder}/[name].[contenthash][ext]`
    },
  },
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  optimization: {
    runtimeChunk: 'single',
    moduleIds: 'deterministic',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|ico)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.svg$/i,
        type: 'asset/resource',
        resourceQuery: /url/, // *.svg?url
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              svgoConfig: {
                plugins: [{ removeViewBox: false }],
              },
            },
          },
        ],
      },
      {
        test: /\.m?js/,
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false,
        },
      },
      { test: /\.json$/, loader: 'json-loader' },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-env'],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'public', 'index.html'),
      title: 'Output Management',
      hash: true,
    }),
    new CleanWebpackPlugin(),
  ],
}

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.devtool = 'cheap-module-source-map'
  }

  if (argv.mode === 'production') {
    config.mode = 'production'
    config.optimization = {
      splitChunks: { chunks: 'all' },
      minimize: !env.minimize,
    }
  }
  return config
}
