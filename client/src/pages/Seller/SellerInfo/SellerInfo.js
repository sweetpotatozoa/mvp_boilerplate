import React, { useState } from 'react'
import LableInput from '../../../components/LableInput/LableInput'
import styles from './SellerInfo.module.css'
import Logo from '../../../components/Logo/Logo'
import NextButton from '../../../components/NextButton/NextButton'
import { useNavigate } from 'react-router-dom'
import backendApis from '../../../utils/backendApis'

const SellerInfo = () => {
  let navigate = useNavigate()
  const [sellerInfoInputs, setSellerInfoInputs] = useState({
    senderName: '',
    senderContact: '',
    receiverAddress: '',
    accountInfo: '',
    accountHolderName: '',
  })

  const handleSellerInfoInputChange = (e, field) => {
    setSellerInfoInputs({ ...sellerInfoInputs, [field]: e.target.value })
  }

  const isNextButtonEnabled = Object.values(sellerInfoInputs).every(
    (input) => input.trim() !== '',
  )

  const handleSubmit = async () => {
    if (isNextButtonEnabled) {
      const res = await backendApis.updateSellerInfo('PUT', {
        sellerName: sellerInfoInputs.senderName,
        sellerPhoneNumber: sellerInfoInputs.senderContact,
        returnAddress: sellerInfoInputs.receiverAddress,
        accountNumber: sellerInfoInputs.accountInfo,
        accountHolderName: sellerInfoInputs.accountHolderName,
      })
      if (res?.status === 201) {
        navigate('/seller/guide')
      } else {
        alert('정보 업데이트에 실패했습니다.')
      }
    } else {
      alert('모든 정보를 입력해주세요.')
    }
  }

  return (
    <div>
      <Logo />
      <p className={styles.title}>
        제품을 보낼 판매자님의 정보를 입력해주세요.
      </p>
      <LableInput
        label='1. 보내시는 분 성함'
        onChange={(e) => {
          handleSellerInfoInputChange(e, 'senderName')
        }}
      />
      <LableInput
        label='2. 보내시는 분 연락처'
        onChange={(e) => {
          handleSellerInfoInputChange(e, 'senderContact')
        }}
      />
      <LableInput
        label='3. 검수 불합격 시 반송 받으실 주소'
        onChange={(e) => {
          handleSellerInfoInputChange(e, 'receiverAddress')
        }}
      />
      <p className={styles.title}>거래대금을 지금받으실 계좌를 알려주세요.</p>
      <LableInput
        label='1. 계좌정보'
        onChange={(e) => {
          handleSellerInfoInputChange(e, 'accountInfo')
        }}
      />
      <LableInput
        label='2. 예금주명'
        onChange={(e) => {
          handleSellerInfoInputChange(e, 'accountHolderName')
        }}
      />
      <NextButton onClick={handleSubmit} text={'거래확정'}></NextButton>
    </div>
  )
}

export default SellerInfo
