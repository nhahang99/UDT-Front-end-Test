import { makeAutoObservable } from 'mobx'
import { RootStore } from '.'
import { NumberEnum } from './../enum/calculate/index'

class CalculateStore {
  input: string = NumberEnum.ZERO
  rootStore: RootStore

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
    makeAutoObservable(this)
  }

  setInput(input: string): void {
    this.input = input
  }

  resetInput(): void {
    this.input = NumberEnum.ZERO
  }
}
export default CalculateStore
