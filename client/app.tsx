import { Provider as MobxProvider } from 'mobx-react'
import Router from './Router'
import React from 'react'
import { rootStore } from './stores'

const App = () => {
  return (
    <MobxProvider {...rootStore}>
      <Router />
    </MobxProvider>
  )
}

export default App
