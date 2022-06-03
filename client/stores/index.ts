import { createContext, useContext } from 'react'
import SpinnerStore from './spinnerStore'

export class RootStore {
  spinnerStore: SpinnerStore

  constructor() {
    this.spinnerStore = new SpinnerStore(this)
  }
}

export const rootStore = new RootStore()

const StoresContext = createContext(rootStore)

// this will be the function available for the app to connect to the stores
export const useStores = () => useContext(StoresContext)
