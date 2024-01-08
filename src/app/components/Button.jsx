import React from 'react'
import styles from './button.module.scss'
import Link from 'next/link'
import Image from 'next/image'

const Button = ({componentUrl}) => {
  return (
    <Link href={componentUrl ?? ''} className={styles.btn}>
      <Image src="/attachment-outline.svg" width={20} height={20} className={styles.icon} />
    </Link>
  )
}

export default Button