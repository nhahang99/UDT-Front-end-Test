import { observer } from 'mobx-react'
import React from 'react'
import { useStores } from '../../stores'
import styles from './homePage.module.scss'

const HomePage = () => {
  const { spinnerStore } = useStores()
  const { isLoading } = spinnerStore

  function toggleLoading() {
    spinnerStore.toggleLoading()
  }
  return (
    <div className={styles.wrapper}>
      <h1>Hello World</h1>
      <button onClick={toggleLoading}>{isLoading ? 'Stop' : 'Start'}</button>
    </div>
  )
}

export default observer(HomePage)
