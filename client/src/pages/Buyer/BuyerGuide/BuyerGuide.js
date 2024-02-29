import React, { useState } from 'react'
import styles from './BuyerGuide.module.css'
import Logo from '../../../components/Logo/Logo'
import SubmitButton from '../../../components/SubmitButton/SubmitButton'
import PopUp from '../../../components/PopUp/PopUp'
const BuyerGuide = () => {
  const [popUp, setPopUp] = useState(0)
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

        <p>대금을 하단 ‘쿠앤크 계좌번호’로 보내주세요.</p>
        <p className={styles.headline}>
          우리은행 100-2059-7690-24<br></br>(계좌주: 김병로)
        </p>

        <p className={styles.disclaimer}>
          *정품 검수 합격 시 거래대금에서 쿠앤크 서비스 이용료 <br></br>
          16,000원을 제한 금액이 판매자에게 입금되며, <br></br>제품은 검수 완료
          익일 발송됩니다.
        </p>
      </div>
      {popUp === 0 ? null : <PopUp></PopUp>}
      <SubmitButton
        text={'입금완료'}
        onClick={() => {
          popUp === 0 ? setPopUp(1) : null
        }}
      />
    </div>
  )
}

export default BuyerGuide
