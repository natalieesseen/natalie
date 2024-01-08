import React from 'react'
import Image from 'next/image'
import styles from './freelance.module.scss'
import Button from '../components/Button'

const Freelance = () => {
  const componentUrl = '/freelance';
  return (
    <div className={styles.freelance}>
      <div className='drag'>
        <Image src='/grid/crepe.png' alt='illustration' width={150} height={150} />
      </div>
      <Button componentUrl={componentUrl} />
    </div>
  )
}

export default Freelance