import React from 'react'
import LableInput from '../../../components/LableInput/LableInput'
import styles from './SellerInfo.module.css'
import Logo from '../../../components/Logo/Logo'
import NextButton from '../../../components/NextButton/NextButton'
import { useNavigate } from 'react-router-dom'
const SellerInfo = () => {
  let navigate = useNavigate()
  return (
    <div>
      <Logo />
      <p className={styles.title}>
        제품을 보낼 판매자님의 정보를 입력해주세요.
      </p>
      <LableInput label='1. 보내시는 분 성함' />
      <LableInput label='2. 보내시는 분 연락처' />
      <LableInput label='3. 받으실 분 주소' />
      <p className={styles.disclaimer}>
        * 검수 불합격 시 제품은 반송되며, <br></br>향후 서비스 이용이 제한될 수
        있음을 알려드립니다.
      </p>
      <p className={styles.title}>거래대금을 지금받으실 계좌를 알려주세요.</p>
      <LableInput label='1. 계좌정보' />
      <LableInput label='2. 예금주명' />
      <NextButton
        onClick={() => {
          navigate('/seller/guide')
        }}
        text={'거래확정'}
      ></NextButton>
    </div>
  )
}

export default SellerInfo
