import React from 'react';
import style from '../modules/main.module.css';

const NamePage = ({ text }) => {
  return (
    <div className={style.title}>{text}</div>
  )
}

export default NamePage