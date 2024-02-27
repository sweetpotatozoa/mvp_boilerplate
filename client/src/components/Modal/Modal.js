import styles from './Modal.module.css'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Modal = (props) => {
  const { cta, setCta } = props
  const navigate = useNavigate()
  return (
    <div className={styles.modal}>
      <p className={styles.title}>신청 목적을 알려주세요.</p>
      <div className={styles.buttonContainer}>
        <button
          id='buyerButton'
          className={styles.buyerButton}
          onClick={() => {
            navigate('/buyer/items')
          }}
        >
          구매자
        </button>
        <button
          id='sellerButton'
          className={styles.sellerButton}
          onClick={() => {
            navigate('/seller/codecheck')
          }}
        >
          판매자
        </button>
      </div>
    </div>
  )
}

export default Modal
