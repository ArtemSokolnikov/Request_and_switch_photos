import React from 'react'
import style from '../modules/main.module.css'

const Specification = ({ text }) => {
  return (
    <div className={style.content}>{text}</div>
  )
}

export default Specification