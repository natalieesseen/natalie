'use client';
import React from 'react'

const Nav = ({ onClick }) => {
  return (
    <div>
      <ul>
        <li onClick={() => onClick('All')}>All</li>
        <li onClick={() => onClick('About')}>About</li>
      </ul>
    </div>
  )
}

export default Nav