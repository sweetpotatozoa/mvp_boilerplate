import styles from './OnOffNextButton.module.css'
import React from 'react'

const OnOffNextButton = (props) => {
  return (
    <div className={styles.nextButtonDiv}>
      <button
        onClick={props.onClick}
        className={
          props.isChecked === false
            ? `${styles.nextButton} ${styles.disabledButton}`
            : styles.nextButton
        }
      >
        다음
      </button>
    </div>
  )
}

export default OnOffNextButton
