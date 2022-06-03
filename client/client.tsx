import { Provider } from 'mobx-react'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import { rootStore } from './stores'

ReactDOM.hydrate(
  <Provider store={rootStore}>
    <App />
  </Provider>,
  document.getElementById('root')
)
