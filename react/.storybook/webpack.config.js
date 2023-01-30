module.exports = ({ config }) => {
  const rules = config.module.rules;

  const fileLoaderRule = rules.find((rule) => rule.test.test(".svg"));
  fileLoaderRule.exclude = /\.svg$/;

  config.output.assetModuleFilename = (pathData) => {
    let result = pathData.filename
      .substr(pathData.filename.indexOf("public/"))
      .split("/")
      .slice(1);

    result.pop();

    let folder = result.join("/");

    folder += result.length === 0 ? "" : "/";

    return `${folder}[name][ext]?hash=[contenthash]`; //`${folder}/[name].[contenthash][ext]`; ;
  };

  rules.push({
    test: /\.svg$/i,
    type: "asset/resource",
    resourceQuery: /url/, // *.svg?url
  });

  rules.push({
    test: /\.svg$/i,
    resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
    use: [
      {
        loader: "@svgr/webpack",
        options: {
          svgoConfig: {
            plugins: [{ removeViewBox: false }],
          },
        },
      },
    ],
  });

  return config;
};
