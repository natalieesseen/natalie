import React from 'react'
import Image from 'next/image'
import styles from './freelance.module.scss'

const Freelance = () => {
  return (
    <div className={styles.freelance}>
      <Image src='/crepe.png' alt='illustration' width={150} height={150} />
    </div>
  )
}

export default Freelance