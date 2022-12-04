import React from 'react';
import './styles.scss';

interface IButtonProps {
  text: string;
  color: 'blue' | 'green' | 'white' | 'clear' | 'red';
  size: 'small' | 'middle' | 'big';
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export default function Button({ text, color, size, disabled, onClick, fullWidth }: IButtonProps) {
  return (
    <button
      disabled={disabled}
      className={`button button-${color} button-${size} ${fullWidth ? 'button-full' : undefined}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
