import styles from './Register.module.css'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import backendApis from '../../../utils/backendApis'

function Register() {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  const registerHandler = async (event) => {
    event.preventDefault()

    if (userName === '') {
      alert('아이디를 입력해주세요!')
      return
    } else if (password === '') {
      alert('비밀번호를 입력해주세요!')
      return
    } else if (phoneNumber === '') {
      alert('핸드폰 번호를 입력해주세요!')
      return
    } else if (email === '') {
      alert('이메일을 입력해주세요!')
    } else {
      const res = await backendApis.register('POST', {
        userName: userName,
        password: password,
        phoneNumber: phoneNumber,
        email: email,
      })
      if (res.status === 201) {
        alert('회원가입이 완료되었습니다!')
        navigate('/')
      } else {
        if (res.status === 409) {
          alert('이미 존재하는 아이디입니다!')
        } else {
          alert('문제가 발생했습니다 :(')
        }
      }
    }
  }

  return (
    <div className={styles.mid}>
      <img className='logo' src='/images/logo.png' />
      <input
        className={`${styles.input} ${styles.topInput}`}
        type='text'
        name='name'
        placeholder='username'
        value={userName}
        onChange={(event) => setUserName(event.target.value)}
      />
      <input
        className={styles.input}
        type='password'
        name='name'
        placeholder='password'
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <input
        className={styles.input}
        type='text'
        name='name'
        placeholder='phoneumber'
        value={phoneNumber}
        onChange={(event) => setPhoneNumber(event.target.value)}
      />
      <input
        className={styles.input}
        type='text'
        name='name'
        placeholder='email'
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <button className={styles.button} onClick={registerHandler}>
        회원가입
      </button>
    </div>
  )
}

export default Register
