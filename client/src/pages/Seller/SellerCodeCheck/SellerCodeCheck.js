import React from 'react'
import styles from './SellerCodeCheck.module.css'
import Logo from '../../../components/Logo/Logo'
const SellerCodeCheck = () => {
  return (
    <div className={styles.mid}>
      <Logo />
      <input className={styles.input}></input>
      <button className={styles.button}>
        구매자에게 받은 고유코드 입력하기
      </button>
    </div>
  )
}

export default SellerCodeCheck
