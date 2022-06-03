import { observer } from 'mobx-react'
import React from 'react'
import { useStores } from '../../stores'

const HomePage = () => {
  const { spinnerStore } = useStores()
  const { isLoading } = spinnerStore
  console.log('isLoading', isLoading)

  function toggleLoading() {
    spinnerStore.toggleLoading()
  }
  return (
    <div>
      <h1>Hello World</h1>
      <button onClick={toggleLoading}>{isLoading ? 'Stop' : 'Start'}</button>
    </div>
  )
}

export default observer(HomePage)
