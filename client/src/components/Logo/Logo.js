import styles from './Logo.module.css'
import React from 'react'

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src='/images/logo.png'></img>
    </div>
  )
}

export default Logo
