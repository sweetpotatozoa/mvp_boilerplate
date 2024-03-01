import styles from './LableInput.module.css'
import React from 'react'

const LableInput = (props) => {
  const { label, onChange, value } = props
  return (
    <div>
      <p>{label}</p>
      <input className={styles.input} onChange={onChange} value={value}></input>
    </div>
  )
}

export default LableInput
