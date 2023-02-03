import * as ReactDOM from 'react-dom/client'

import './style.scss'

const rootDiv: HTMLElement | null = document.getElementById('root')

if (rootDiv) {
  const root = ReactDOM.createRoot(rootDiv)
  root.render(<h1>Hello, world1!</h1>)
}
