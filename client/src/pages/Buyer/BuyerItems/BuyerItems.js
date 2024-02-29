import React, { useState } from 'react'
import LableInput from '../../../components/LableInput/LableInput'
import styles from './BuyerItems.module.css'
import Logo from '../../../components/Logo/Logo'
import NextButton from '../../../components/NextButton/NextButton'
import { useNavigate } from 'react-router-dom'
import backendApis from '../../../utils/backendApis'
const BuyerItems = () => {
  let navigate = useNavigate()
  const [inputs, setInputs] = useState({
    brand: '',
    productCode: '',
    color: '',
    size: '',
  })

  const handleInputChange = (e, field) => {
    setInputs({ ...inputs, [field]: e.target.value })
  }
  const isNextButtonEnabled = Object.values(inputs).every(
    (input) => input.trim() !== '',
  )

  return (
    <div>
      <Logo />
      <p className={styles.title}>
        정품 검수를 맡기실 제품의 정보를 입력해주세요.
      </p>
      <LableInput
        label='1. 브랜드명'
        onChange={(e) => {
          handleInputChange(e, 'brand')
        }}
      />
      <LableInput
        label='2. 제품코드'
        onChange={(e) => {
          handleInputChange(e, 'productCode')
        }}
      />
      <LableInput
        label='3. 색상'
        onChange={(e) => {
          handleInputChange(e, 'color')
        }}
      />
      <LableInput
        label='4. 사이즈'
        onChange={(e) => {
          handleInputChange(e, 'size')
        }}
      />
      <NextButton
        onClick={async (e) => {
          e.preventDefault()
          if (isNextButtonEnabled) {
            const res = await backendApis.createTransaction('POST', {
              brand: inputs.brand,
              productCode: inputs.productCode,
              color: inputs.color,
              size: inputs.size,
            })
            if (res?.status === 201) {
              navigate('/buyer/address')
              console.log(res?.status)
            } else alert('제품 등록에 실패했습니다.')
          } else {
            alert('모든 정보를 입력해주세요.')
          }
        }}
        text={'다음'}
      />
    </div>
  )
}

export default BuyerItems
