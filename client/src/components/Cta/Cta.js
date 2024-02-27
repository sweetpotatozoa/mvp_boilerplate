import styles from './Cta.module.css'
import React from 'react'

const Cta = (props) => {
  const { cta, setCta, transactionStatus } = props
  const isButtonDisabled = transactionStatus >= 1 && transactionStatus <= 5
  const buttonClass = isButtonDisabled
    ? `${styles.ctaButton} ${styles.disabledButton}`
    : styles.ctaButton
  const buttonText = isButtonDisabled
    ? '아직 거래중인 상품이 있습니다.'
    : '신청하기'
  return (
    <div>
      <button
        className={buttonClass}
        onClick={() => {
          if (!isButtonDisabled) {
            cta === 0 ? setCta(1) : null
          }
        }}
      >
        {buttonText}
      </button>
    </div>
  )
}

export default Cta
