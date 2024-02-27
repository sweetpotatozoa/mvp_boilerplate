import styles from './SubmitButton.module.css'
import React from 'react'

const submitButton = (props) => {
  const { onClick, text } = props
  return (
    <div className={styles.nextButtonDiv}>
      <button className={styles.nextButton} onClick={onClick}>
        {text}
      </button>
    </div>
  )
}

export default submitButton
