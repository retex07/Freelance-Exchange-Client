import React from 'react';
import './styles.scss';

interface IButtonProps{
  text: string,
  color: "blue" | "green" | "grey",
  size: "small" | "middle" | "big",
  disabled: boolean,
  onClick?: () => void,
}

export default function Button({text, color, size, disabled, onClick}: IButtonProps) {
  return (
    <>
      {/* {color === "blue" &&
        <button disabled={disabled} className='button button-blue' onClick={onClick}>
          {text}
        </button>
      } */}
      
      <button disabled={disabled} className={`button button-${color} button-${size}`} onClick={onClick}>
          {text}
      </button>
      
{/* 
      {color === "green" &&
        <button disabled={disabled} className='button button-green' onClick={onClick}>
          {text}
        </button>
      } */}
    </>
  );
}
