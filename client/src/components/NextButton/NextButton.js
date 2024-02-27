import styles from './NextButton.module.css'
import React from 'react'

const NextButton = (props) => {
  return (
    <div className={styles.nextButtonDiv}>
      <button onClick={props.onClick} className={styles.nextButton}>
        {props.text}
      </button>
    </div>
  )
}

export default NextButton
