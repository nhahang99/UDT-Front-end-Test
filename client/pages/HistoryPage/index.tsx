import { observer } from 'mobx-react'
import React, { useEffect } from 'react'
import { useStores } from '../../stores'
import styles from './historyPage.module.scss'

const HistoryPage = () => {
  const { historyStore } = useStores()
  const { calculateItems } = historyStore

  useEffect(() => {
    historyStore.getCalculateItems()
  }, [])

  // return a table with all calculate items
  return (
    <div className={styles.historyPage}>
      <h2>History</h2>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th>Input</th>
            <th>Formatted Input</th>
            <th>Result</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {calculateItems.map((calculateItem: any) => (
            <tr key={calculateItem.createdAt}>
              <td>{calculateItem.input}</td>
              <td>{calculateItem.formattedInput}</td>
              <td>{calculateItem.result}</td>
              <td>
                {new Date(calculateItem.createdAt).toLocaleDateString() +
                  ' ' +
                  new Date(calculateItem.createdAt).toLocaleTimeString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default observer(HistoryPage)
