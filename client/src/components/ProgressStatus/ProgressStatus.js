import styles from './ProgressStatus.module.css'
import React from 'react'

// `status` prop을 추가하여 배송 상태를 받아옵니다.
const ProgressStatus = (props) => {
  const { transactionStatus } = props

  return (
    <div className={styles.progressStatus}>
      <p className={styles.title}>내 진행상황</p>
      {transactionStatus === null ? (
        <img src={`/images/progressStatus0.png`}></img>
      ) : (
        [...Array(7).keys()].map((index) => (
          <img
            key={index}
            src={`/images/progressStatus${index}.png`}
            className={transactionStatus === index ? styles.show : styles.hide}
          />
        ))
      )}
    </div>
  )
}

export default ProgressStatus
