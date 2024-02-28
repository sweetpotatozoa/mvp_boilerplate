import React, { useState } from 'react'
import styles from './Login.module.css'
import Logo from '../../../components/Logo/Logo'
import { useNavigate } from 'react-router-dom'
import backendApis from '../../../utils/backendApis'

const Login = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const loginHandler = async (e) => {
    e.preventDefault()
    const response = await backendApis.login('POST', {
      userName: userName,
      password: password,
    })
    if (response?.status !== 200) {
      alert('비밀번호가 틀렸습니다!')
    } else {
      navigate('/')
    }
  }
  return (
    <div className={styles.mid}>
      <Logo />
      <input
        className={styles.input}
        placeholder={'ID'}
        onChange={(event) => setUserName(event.target.value)}
      ></input>
      <input
        type='password'
        className={`${styles.input} ${styles.password}`}
        placeholder={'PASSWORD'}
        onChange={(event) => setPassword(event.target.value)}
        q
      ></input>
      <button className={styles.button} onClick={loginHandler}>
        로그인하기
      </button>
      <p
        onClick={() => {
          navigate('/register')
        }}
      >
        회원가입하기
      </p>
    </div>
  )
}

export default Login
