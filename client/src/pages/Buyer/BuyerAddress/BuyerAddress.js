import React from 'react'
import LableInput from '../../../components/LableInput/LableInput'
import styles from './BuyerAddress.module.css'
import Logo from '../../../components/Logo/Logo'
import NextButton from '../../../components/NextButton/NextButton'
import { useNavigate } from 'react-router-dom'
const BuyerAddress = () => {
  let navigate = useNavigate()
  return (
    <div>
      <Logo />
      <p className={styles.title}>
        검수 완료 후 제품을 배송 받으실 주소를 입력해주세요.
      </p>
      <LableInput label='1. 받으실 분 성함' />
      <LableInput label='2. 받으실 분 연락처' />
      <LableInput label='3. 받으실 분 주소' />
      <p>거래대금을 납부할 때 사용하실 입금자명을 알려주세요.</p>
      <LableInput label='1. 입금자명' />
      <NextButton
        onClick={() => {
          navigate('/buyer/guide')
        }}
        text={'다음'}
      ></NextButton>
    </div>
  )
}

export default BuyerAddress
