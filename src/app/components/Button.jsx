import React from 'react'
import styles from './button.module.scss'
import Link from 'next/link'

const Button = ({componentUrl}) => {
  return (
    <Link href={componentUrl ?? ''} className={styles.btn}>a</Link>
  )
}

export default Button