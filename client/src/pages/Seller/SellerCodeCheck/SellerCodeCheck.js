import React, { useState } from 'react'
import styles from './SellerCodeCheck.module.css'
import Logo from '../../../components/Logo/Logo'
import backendApis from '../../../utils/backendApis'

const SellerCodeCheck = () => {
  const [uniqueCode, setUniqueCode] = useState('')

  // 고유코드를 입력하는 input의 value를 관리하기 위한 함수
  const handleInputChange = (event) => {
    const value = event.target.value
    // 입력값이 숫자인지 확인
    if (/^\d+$/.test(value) || value === '') {
      setUniqueCode(value)
    } else {
      // 숫자가 아닌 값이 입력되었을 경우 경고 표시
      alert('고유코드의 형식은 숫자입니다.')
    }
  }

  const handleButtonClick = async () => {
    if (!uniqueCode) {
      alert('고유코드를 입력해주세요.')
      return
    }

    const result = await backendApis.sellerCodeCheck('GET', {
      uniqueCode,
    })

    console.log(result) // 결과 처리 (예시)
  }

  return (
    <div className={styles.mid}>
      <Logo />
      <input
        className={styles.input}
        value={uniqueCode}
        onChange={handleInputChange} // input 값 변경 시 상태 업데이트
        type='text' // 입력 필드 유형을 text로 설정
      />
      <button className={styles.button} onClick={handleButtonClick}>
        구매자에게 받은 고유코드 입력하기
      </button>
    </div>
  )
}

export default SellerCodeCheck
