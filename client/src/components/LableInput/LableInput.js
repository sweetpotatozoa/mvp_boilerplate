import styles from './LableInput.module.css'
import React from 'react'

const LableInput = (props) => {
  const { label, onChange } = props
  return (
    <div>
      <p>{label}</p>
      <input className={styles.input} onChange={onChange}></input>
    </div>
  )
}

export default LableInput
