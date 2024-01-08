import React from 'react'
import Image from 'next/image'
import styles from './about.module.scss'

const About = () => {
  return (
    <div className={styles.about}>
      <div className='drag'>
        <Image src='/grid/pfp.png' alt='portrait' className={styles.pfp} width={100} height={100} />
        <p>
          Hej 👋 I'm Natalie, a web developer from Sweden.
        </p>
      </div>
      <ul className={styles.btns}>
        <li className={styles.btn}>
          <a href="https://github.com/natalieesseen">GitHub</a>
        </li>
        <li className={styles.btn}>
          <a href="https://linkedin.com/in/natalieesseen">LinkedIn</a>
        </li>
      </ul>
    </div>
  )
}

export default About