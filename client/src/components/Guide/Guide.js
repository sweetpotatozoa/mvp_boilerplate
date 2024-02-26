import styles from './Guide.module.css'
import React from 'react'

const Guide = () => {
  return (
    <div className={styles.guide}>
      <p className={styles.title}>
        철저한 검수로 가품 걱정없이 <br></br>편안한 거래
      </p>

      <img src='/images/guide.png'></img>
      <p>
        거래가 체결된 모든 상품은 자체 검수센터에서 <br></br>전문 검수팀이
        다양한 방법으로 철저하게 검수합니다. <br></br>검수에 합격한 상품만
        구매자에게 배송합니다.
      </p>
      <p className={styles.disclaimer}>*정품이 아닌 경우 금액의 3배 보상</p>
    </div>
  )
}

export default Guide
