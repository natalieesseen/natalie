'use client';

import { useState } from 'react';
import { Grid } from './components/Grid'
import { layout, layoutAbout } from './grid/layouts'
import styles from './page.module.css'

import Nav from './components/Nav'

export default function Home() {
  const [selectedLayout, setSelectedLayout] = useState(layout);
  
  const handleNavClick = (layoutName) => {
    if (layoutName === 'All') {
      setSelectedLayout(layout);
    } else if (layoutName === 'About') {
      setSelectedLayout(layoutAbout)
    }
  }

  return (
    <main className={styles.main}>
      <Nav onClick={handleNavClick} />
      <Grid layout={selectedLayout} />
    </main>
  )
}
