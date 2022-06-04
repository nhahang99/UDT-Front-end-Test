import classnames from 'classnames'
import React, { useEffect, useState } from 'react'
import styles from './calculatorPage.module.scss'
import { operations } from './constants'

export enum ResetButtonEnum {
  AC = 'AC',
  C = 'C'
}

const CalculatorPage = () => {
  const [input, setInput] = useState<string>('')
  const [deleteButton, setDeleteButton] = useState<ResetButtonEnum>(ResetButtonEnum.AC)

  function handleInput(value: string): void {
    setInput(input + ' ' + value)
  }

  function handleDelete(): void {
    // TODO: Integrate later
    setInput(input.slice(0, -1))
  }

  function oppositeNumber(): void {
    // opposite last number in input
    const inputArray = input.split(' ')
    const lastNumber = inputArray[inputArray.length - 1]
    const oppositeNumber = lastNumber.charAt(0) === '-' ? lastNumber.substring(1) : '-' + lastNumber
    setInput(input.replace(lastNumber, oppositeNumber))
  }

  function calculate(): void {
    const result: string = eval(input.replace(/x/g, '*'))
    setInput(result)
  }

  useEffect(() => {
    if (String(input).length > 0) {
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
          +-
        </button>

        {operations.map((item, index) => {
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

export default CalculatorPage
