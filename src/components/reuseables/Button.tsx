import React, { MouseEventHandler } from 'react';
import './style.css';

interface ButtonProps{
    title:string;
    type?:"button" | "submit" | "reset";
    onClick:MouseEventHandler<HTMLButtonElement>;
    variant?: string;
}
const Button = ({title, type, onClick, variant}:ButtonProps) => {
  return (
    <div className='button_div'>
        <button type={type ? type : 'button'} className={variant ? variant : 'pink_bg_button'} onClick={onClick}>{title}</button>
    </div>
  )
}

export default Button