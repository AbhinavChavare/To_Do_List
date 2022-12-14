import React from 'react'
import HeaderNavlinks from './HeaderNavlinks'
import "./Header.css"

const HeaderCont = () => {
  return (
    <div className='header-cont'>
      <h1 className='header-title'>A.B.C</h1>
      <HeaderNavlinks/>
    </div>
  )
}

export default HeaderCont
