import styles from './Cta.module.css'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Cta = (props) => {
  const { cta, setCta, transactionStatus } = props
  const isButtonDisabled = transactionStatus >= 1 && transactionStatus <= 5
  const buttonClass = isButtonDisabled
    ? `${styles.ctaButton} ${styles.disabledButton}`
    : styles.ctaButton
  const buttonText = isButtonDisabled
    ? '아직 거래중인 상품이 있습니다.'
    : '신청하기'

  const isLogin = () => {
    const token = localStorage.getItem('token')
    return token ? true : false
  }

  const navigate = useNavigate()

  return (
    <div>
      <button
        className={buttonClass}
        onClick={() => {
          if (isLogin()) {
            if (!isButtonDisabled) {
              cta === 0 ? setCta(1) : null
            }
          } else {
            navigate('/login')
          }
        }}
      >
        {buttonText}
      </button>
    </div>
  )
}

export default Cta
