import { Provider as MobxProvider } from 'mobx-react'
import React from 'react'
import Router from './Router'
import { rootStore } from './stores'
import './styles/app.scss'

const App = () => {
  return (
    <MobxProvider {...rootStore}>
      <Router />
    </MobxProvider>
  )
}

export default App
