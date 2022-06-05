import { Provider as MobxProvider } from 'mobx-react'
import React from 'react'
import Router from './Router'
import { rootStore } from './stores'
import './styles/app.scss'

const App = () => {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>SSR</title>
        <meta charSet="utf-8"></meta>
        <meta name="description" content="udt-test-fe"></meta>
        <link rel="stylesheet" type="text/css" href="static/client.css"></link>
        <link rel="shortcut icon" href="https://www.calculator.net/favicon.ico" type="image/x-icon" />
      </head>
      <body>
        <MobxProvider {...rootStore}>
          <Router />
        </MobxProvider>
      </body>
    </html>
  )
}

export default App
