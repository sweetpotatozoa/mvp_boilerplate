import styles from './Cta.module.css'
import React from 'react'

const Cta = (props) => {
  const { cta, setCta } = props
  return (
    <div className={styles.cta}>
      <button
        className={styles.ctaButton}
        onClick={function () {
          cta === 0 ? setCta(1) : null
        }}
      >
        신청하기
      </button>
    </div>
  )
}
export default Cta
