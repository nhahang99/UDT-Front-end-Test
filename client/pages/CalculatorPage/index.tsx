import classnames from 'classnames'
import { observer } from 'mobx-react-lite'
import React, { useEffect, useState } from 'react'
import { NumberEnum, ResetButtonEnum } from '../../enum/calculate'
import { ICalculate } from '../../interface/caculate'
import { useStores } from '../../stores'
import styles from './calculatorPage.module.scss'
import { keymapWithEnum } from './constants'

const CalculatorPage = () => {
  const [deleteButton, setDeleteButton] = useState<ResetButtonEnum>(ResetButtonEnum.AC)
  const { calculateStore, historyStore } = useStores()
  const { input } = calculateStore

  function handleInput(value: string): void {
    if (input === NumberEnum.ZERO) {
      calculateStore.setInput(String(value))
    } else {
      calculateStore.setInput(input + String(value))
    }
  }

  function handleDelete(): void {
    calculateStore.setInput(NumberEnum.ZERO)
  }

  function oppositeNumber(): void {
    //* INFO: get the number after +-*/
    const numberArray: string[] = input.split(/[+\-*/]/)
    const lastNumber: string = numberArray[numberArray.length - 1] || NumberEnum.ZERO
    const oppositeNumber: string = String(Number(lastNumber) * -1)
    calculateStore.setInput(input.slice(0, Number(`-${lastNumber.length}`)) + ' ' + oppositeNumber)
  }

  async function calculate(): Promise<void> {
    try {
      let formattedInput: string = String(input).replace(/x/g, '*')
      formattedInput = formattedInput.replace(/%/g, '/100')
      do {
        //* INFO: Replace all -- with - and all ++ with + then replace all +- || -+ with -
        //* INFO: remove 0 after +-*/% and before 1-9edInput = formattedInput.replace(/([+-])(0)([1-9])/g, '$1$3'))
        await Promise.all([
          (formattedInput = formattedInput.replace(/-+/g, '-')),
          (formattedInput = formattedInput.replace(/\++/g, '+')),
          (formattedInput = formattedInput.replace(/([+-])(0)([1-9])/g, '$1$3')),
          (formattedInput = formattedInput.replace(/([*/])(0)([1-9])/g, '$1$3'))
        ])
        formattedInput = formattedInput.replace(/(\+-)|(-\+)/g, '-')
      } while (
        formattedInput.includes('--') ||
        formattedInput.includes('++') ||
        formattedInput.includes('+-') ||
        formattedInput.includes('-+')
      )
      const result = eval(`${formattedInput}`)
      const newCalculateItem: ICalculate = { input, formattedInput, result, createdAt: new Date() }
      historyStore.appendCalculateItem(newCalculateItem)
      calculateStore.setInput(String(result))
    } catch (error) {
      console.log(error)
      alert('Math expression invalid')
    }
  }

  useEffect(() => {
    if (input !== NumberEnum.ZERO) {
      setDeleteButton(ResetButtonEnum.C)
    } else {
      setDeleteButton(ResetButtonEnum.AC)
    }
  }, [input])

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.screen}>
          <div className={styles.buttonScreen}>
            <button className={classnames(styles.buttonTop, styles.buttonRed)}></button>
            <button className={classnames(styles.buttonTop, styles.buttonOrange)}></button>
            <button className={classnames(styles.buttonTop, styles.buttonGreen)}></button>
          </div>
          {input}
        </div>
        <button className={classnames(styles.button, styles.dark)} onClick={handleDelete}>
          {deleteButton}
        </button>
        <button className={classnames(styles.button, styles.dark)} onClick={oppositeNumber}>
          +/-
        </button>

        {keymapWithEnum.map((item, index) => {
          return (
            <button
              key={index}
              className={classnames(styles.button, styles[item.className])}
              onClick={() => handleInput(item.name)}
            >
              {item.name}
            </button>
          )
        })}
        <button className={classnames(styles.button, styles.equal)} onClick={calculate}>
          =
        </button>
      </div>
    </div>
  )
}

export default observer(CalculatorPage)
