import { createContext, useContext } from 'react'
import CalculateStore from './calculateStore'
import HistoryStore from './historyStore'
import SpinnerStore from './spinnerStore'

export class RootStore {
  spinnerStore: SpinnerStore
  calculateStore: CalculateStore
  historyStore: HistoryStore

  constructor() {
    this.spinnerStore = new SpinnerStore(this)
    this.calculateStore = new CalculateStore(this)
    this.historyStore = new HistoryStore(this)
  }
}

export const rootStore = new RootStore()

const StoresContext = createContext(rootStore)

// this will be the function available for the app to connect to the stores
export const useStores = () => useContext(StoresContext)
