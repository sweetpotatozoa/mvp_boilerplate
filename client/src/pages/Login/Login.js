import React from 'react'
import styles from './Login.module.css'
import Logo from '../../components/Logo/Logo'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  return (
    <div className={styles.mid}>
      <Logo />
      <input className={styles.input} placeholder={'ID'}></input>
      <input
        className={`${styles.input} ${styles.password}`}
        placeholder={'PASSWORD'}
      ></input>
      <button
        className={styles.button}
        onClick={() => {
          navigate('/')
        }}
      >
        로그인하기
      </button>
    </div>
  )
}

export default Login
