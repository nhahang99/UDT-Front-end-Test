import { makeAutoObservable } from 'mobx'
import { RootStore } from '.'
import { ICalculate } from '../interface/caculate'

class HistoryStore {
  calculateItems: ICalculate[] = []
  rootStore: RootStore

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
    makeAutoObservable(this)
  }

  getCalculateItems(): void {
    const calculateItems = localStorage.getItem('calculateItems')
    if (calculateItems) {
      this.calculateItems = JSON.parse(calculateItems)
    }
  }

  appendCalculateItem(calculateItem: ICalculate): void {
    this.getCalculateItems()
    this.calculateItems.push(calculateItem)
    localStorage.setItem('calculateItems', JSON.stringify(this.calculateItems))
  }
}
export default HistoryStore
