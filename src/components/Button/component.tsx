import React from 'react';
import './styles.scss';

interface IButtonProps {
  text: string;
  color: 'blue' | 'green' | 'white' | 'clear';
  size: 'small' | 'middle' | 'big';
  disabled: boolean;
  onClick?: () => void;
}

export default function Button({ text, color, size, disabled, onClick }: IButtonProps) {
  return (
    <>
      <button disabled={disabled} className={`button button-${color} button-${size}`} onClick={onClick}>
        {text}
      </button>
    </>
  );
}
