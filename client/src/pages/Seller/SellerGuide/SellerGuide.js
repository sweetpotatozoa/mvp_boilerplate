import React, { useState } from 'react'
import styles from './SellerGuide.module.css'
import Logo from '../../../components/Logo/Logo'
import SubmitButton from '../../../components/SubmitButton/SubmitButton'
import { useNavigate } from 'react-router-dom'
const SellerGuide = () => {
  const navigate = useNavigate()
  return (
    <div>
      <Logo />
      <div className={styles.leftMargin}>
        <p className={styles.title}>정품 검수 절차 안내</p>
        <p>1. (구매자) 거래하고자 하는 제품 정보를 등록</p>
        <p>2. (구매자)거래 고유코드를 판매자에 전달</p>
        <p>3. (판매자) 전달받은 고유코드를 입력</p>
        <p>
          4. (판매자) 거래하고자 하는 제품이 맞는지 확인 후 <br></br>약관 동의
        </p>
        <p>
          5-1. (구매자) 쿠앤크 계좌로 거래대금 입금<br></br>5-2. (판매자) 쿠앤크
          거래센터로 제품 발송
        </p>
        <p>
          6-1. 정품 검수 후 구매자에게 제품 발송<br></br>6-2. 정품 검수 후
          판매자에게 대금 지급
        </p>
        <p className={styles.disclaimer}>
          *검수 불합격 시 거래대금은 구매자에게 환불되며, <br></br>제품 또한
          판매자에게 반송됩니다.
        </p>

        <p>제품을 하단 ‘쿠앤크 검수센터’ 주소로 보내주세요.</p>
        <p className={styles.headline}>“망우로 18바길 11 215호”</p>

        <p className={styles.disclaimer}>
          *정품 검수 합격 시 거래대금에서 쿠앤크 서비스 이용료 <br></br>
          16,000원을 제한 금액이 판매자에게 입금되며, <br></br>제품은 검수 완료
          익일 발송됩니다.
        </p>
      </div>
      <SubmitButton
        text={'확인'}
        onClick={() => {
          navigate('/')
        }}
      />
    </div>
  )
}

export default SellerGuide
