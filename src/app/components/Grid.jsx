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
      isBounded={true}
      draggableHandle= '.drag'
    >
      {layout.map(item => (
        <div
        key={item.i}
        className={`${styles.gridItem} ${item.opacity == 1 ? styles.opacity : ''}`}
        >
          {item.i === 'about' && <About />}
          {item.i === 'freelance' && <Freelance />}
          {item.i === 'placeholder' && 'placeholder'}
        </div>
      ))}
    </GridLayout>
  )
}
