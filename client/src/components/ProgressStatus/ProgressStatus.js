import styles from './ProgressStatus.module.css'
import React from 'react'

// `status` prop을 추가하여 배송 상태를 받아옵니다.
const ProgressStatus = ({ status }) => {
  return (
    <div className={styles.progressStatus}>
      <p className={styles.title}>내 진행상황</p>
      {[...Array(6).keys()].map((index) => (
        <img
          key={index}
          src={`/images/progressStatus${index}.png`}
          className={`${styles.progressImage} ${
            1 === index ? styles.show : styles.hide
          }`}
          alt={`진행 상태 ${index}`}
        />
      ))}
    </div>
  )
}

export default ProgressStatus
