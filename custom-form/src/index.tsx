import React from 'react';
import ReactDOM, { render } from 'react-dom';

const { AppContainer } = require('react-hot-loader')

import { Home } from './modules/home/scenes'

declare var module: { hot: any }

const rootEl = document.getElementById('app')

render(
  <AppContainer>
    <Home />
  </AppContainer>,
  rootEl
)

if (module.hot) {
  module.hot.accept('./modules/home/scenes', () => {
    const NextApp = require('./modules/home/scenes').default
    render(
      <AppContainer>
        <Home />
      </AppContainer>,
      rootEl
    )
  })
}
// const App = () => {
//   return (
//     <div>
//       Compile
//     </div>
//   )
// }

// ReactDOM.render(<App />, document.getElementById('app'));
