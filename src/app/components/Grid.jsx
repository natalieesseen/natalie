'use client';

import React from 'react'
import GridLayout from 'react-grid-layout';
import '/node_modules/react-grid-layout/css/styles.css';
import '/node_modules/react-resizable/css/styles.css';
import styles from './grid.module.scss'

import About from '../grid/About'
import Freelance from '../grid/Freelance';

export const Grid = ({layout}) => {
  return (
    <GridLayout
      className='layout'
      layout={layout}
      compactType='horizontal'
      margin={[20,20]}
      cols={4}
      rowHeight={250}
      maxRows={4}
      width={1200}
    >
      <div key='about' className={styles.gridItem}>
        <About />
      </div>

      <div key='freelance' className={styles.gridItem}>
        <Freelance />
      </div>

      <div key='placeholder' className={styles.gridItem}>placeholder</div>
    </GridLayout>
  )
}
