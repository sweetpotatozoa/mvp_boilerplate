import styles from './ReadOnlyBox.module.css'
import React from 'react'

const ReadOnlyBox = (props) => {
  const { label, value } = props
  return (
    <div>
      <p>{label}</p>
      <input className={styles.input} value={value} readOnly></input>
    </div>
  )
}

export default ReadOnlyBox
