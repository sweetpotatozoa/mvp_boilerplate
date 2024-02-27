import styles from './PopUp.module.css'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const PopUp = () => {
  const navigate = useNavigate()
  return (
    <div className={styles.popUp}>
      <p className={styles.title}>
        영업일 기준 5분 이내에 판매자에게 전달해야 할<br></br>고유코드를 문자로
        보내드립니다.
      </p>
      <button
        className={styles.button}
        onClick={() => {
          navigate('/home')
        }}
      >
        확인
      </button>
    </div>
  )
}

export default PopUp
