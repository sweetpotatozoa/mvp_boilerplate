import React, { useState } from 'react'
import LableInput from '../../../components/LableInput/LableInput'
import styles from './BuyerAddress.module.css'
import Logo from '../../../components/Logo/Logo'
import NextButton from '../../../components/NextButton/NextButton'
import { useNavigate } from 'react-router-dom'
import backendApis from '../../../utils/backendApis'

const BuyerAddress = () => {
  let navigate = useNavigate()
  const [addressInputs, setAddressInputs] = useState({
    recipientName: '',
    recipientPhoneNumber: '',
    recipientAddress: '',
    depositorName: '',
  })

  const handleAddressInputChange = (e, field) => {
    setAddressInputs({ ...addressInputs, [field]: e.target.value })
  }

  const isNextButtonEnabled = Object.values(addressInputs).every(
    (input) => input.trim() !== '',
  )

  return (
    <div>
      {' '}
      <Logo />
      <p className={styles.title}>
        검수 완료 후 제품을 배송 받으실 주소를 입력해주세요.
      </p>
      <LableInput
        label='1. 받으실 분 성함'
        onChange={(e) => {
          handleAddressInputChange(e, 'recipientName')
        }}
      />
      <LableInput
        label='2. 받으실 분 연락처'
        onChange={(e) => {
          handleAddressInputChange(e, 'recipientPhoneNumber')
        }}
      />
      <LableInput
        label='3. 받으실 분 주소'
        onChange={(e) => {
          handleAddressInputChange(e, 'recipientAddress')
        }}
      />
      <p>거래대금을 납부할 때 사용하실 입금자명을 알려주세요.</p>
      <LableInput
        label='1. 입금자명'
        onChange={(e) => {
          handleAddressInputChange(e, 'depositorName')
        }}
      />
      <NextButton
        onClick={async (e) => {
          e.preventDefault()
          if (isNextButtonEnabled) {
            const res = await backendApis.updateTransaction('PATCH', {
              recipientName: addressInputs.recipientName,
              recipientPhoneNumber: addressInputs.recipientPhoneNumber,
              recipientAddress: addressInputs.recipientAddress,
              depositorName: addressInputs.depositorName,
            })
            if (res?.status === 201) {
              navigate('/buyer/guide')
            } else {
              alert('주소 및 입금자 정보 업데이트에 실패했습니다.')
            }
          } else {
            alert('모든 정보를 입력해주세요.')
          }
        }}
        text={'다음'}
      ></NextButton>
    </div>
  )
}

export default BuyerAddress
