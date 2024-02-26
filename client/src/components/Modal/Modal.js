import styles from './Modal.module.css'
import React from 'react'

const Modal = (props) => {
  const { cta, setCta } = props
  return (
    <div className={styles.modal}>
      <p className={styles.title}>신청 목적을 알려주세요.</p>
      <div className={styles.buttonContainer}>
        <button
          id='buyerButton'
          className={styles.buyerButton}
          onClick={function () {
            cta === 1 ? setCta(0) : null
          }}
        >
          구매자
        </button>
        <button
          id='sellerButton'
          className={styles.sellerButton}
          onClick={function () {
            cta === 1 ? setCta(0) : null
          }}
        >
          판매자
        </button>
      </div>
    </div>
  )
}

export default Modal
