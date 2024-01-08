import React from 'react'
import Link from 'next/link'
import styles from './close.module.scss'
import Image from 'next/image'

const Close = () => {
  return (
    <Link href="/" className={styles.close}>
      <Image src="/icons/home-outline.svg" width={20} height={20} className={styles.icon} />
    </Link>
  )
}

export default Close