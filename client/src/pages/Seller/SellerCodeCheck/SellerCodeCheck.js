import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './SellerCodeCheck.module.css'
import Logo from '../../../components/Logo/Logo'
import backendApis from '../../../utils/backendApis'

const SellerCodeCheck = () => {
  const [uniqueCode, setUniqueCode] = useState('')
  const navigate = useNavigate()

  const handleInputChange = (event) => {
    const value = event.target.value
    if (/^\d+$/.test(value) || value === '') {
      setUniqueCode(value)
    } else {
      alert('고유코드의 형식은 숫자입니다.')
    }
  }

  const handleButtonClick = async () => {
    if (!uniqueCode) {
      alert('고유코드를 입력해주세요.')
      return
    }

    const checkResult = await backendApis.sellerCodeCheck('GET', { uniqueCode })

    // status가 200일 경우, 받은 _id로 updateSellerId 메서드 호출
    if (checkResult.status === 200 && checkResult._id) {
      await backendApis.updateSellerId('PUT', { id: checkResult._id })
      navigate('/seller/items')
    } else if (checkResult.status === 404) {
      alert('존재하지 않는 고유코드입니다')
    } else {
      console.error('An error occurred:', checkResult)
    }
  }

  return (
    <div className={styles.mid}>
      <Logo />
      <input
        className={styles.input}
        value={uniqueCode}
        onChange={handleInputChange}
        type='text'
      />
      <button className={styles.button} onClick={handleButtonClick}>
        구매자에게 받은 고유코드 입력하기
      </button>
    </div>
  )
}

export default SellerCodeCheck
