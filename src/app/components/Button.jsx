import React from 'react'
import styles from './button.module.scss'

const Button = ({componentUrl}) => {
  return (
    <a href={componentUrl ?? ''} className={styles.btn}>a</a>
  )
}

export default Button