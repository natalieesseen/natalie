'use client';

import React from 'react'
import GridLayout from 'react-grid-layout';
import '/node_modules/react-grid-layout/css/styles.css';
import '/node_modules/react-resizable/css/styles.css';
import styles from './grid.module.scss'

import About from '../grid/About'

export const Grid = () => {
  const layout = [
    { i: 'about', x: 0, y: 0, w: 2, h: 1, isResizable: false, isBounded: true },
    { i: 'placeholder', x: 2, y: 0, w: 1, h: 1, isResizable: false, isBounded: true},
  ];

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

      <div key='placeholder' className={styles.gridItem}>placeholder</div>
    </GridLayout>
  )
}
