import React, { useState } from 'react'
import LableInput from '../../../components/LableInput/LableInput'
import styles from './SellerItems.module.css'
import Logo from '../../../components/Logo/Logo'
import NextButton from '../../../components/NextButton/NextButton'
import { useNavigate } from 'react-router-dom'
import OnOffNextButton from '../../../components/OnOffNextButton/OnOffNextButton'
const SellerItems = () => {
  let navigate = useNavigate()
  const [isChecked, setIsChecked] = useState(false)
  const handleCheck = () => {
    setIsChecked(!isChecked)
  }
  return (
    <div>
      <Logo />
      <p className={styles.title}>
        정품 검수를 맡기실 제품이 맞는지 확인해주세요.
      </p>
      <LableInput label='1. 브랜드명' />
      <LableInput label='2. 제품코드' />
      <LableInput label='3. 색상' />
      <LableInput label='4. 사이즈' />
      <div>
        <input
          type='checkbox'
          id='myCheckBox'
          className={styles.myCheckBox}
          checked={isChecked}
          onChange={handleCheck}
        />
        <label className={styles.lableMid} htmlFor='myCheckBox'>
          {' '}
          거래하고자 하는 제품이 맞습니다.
        </label>
      </div>
      <OnOffNextButton
        onClick={() => {
          navigate('/seller/info')
        }}
        isChecked={isChecked}
      />
    </div>
  )
}

export default SellerItems
