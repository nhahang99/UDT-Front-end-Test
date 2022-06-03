import { makeAutoObservable } from 'mobx'
import { RootStore } from '.'

class SpinnerStore {
  isLoading?: boolean | undefined = undefined
  rootStore: RootStore

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
    makeAutoObservable(this)
  }

  showLoading(): void {
    this.isLoading = true
  }

  hideLoading() {
    this.isLoading = false
  }

  toggleLoading() {
    this.isLoading = !this.isLoading
  }
}
export default SpinnerStore
