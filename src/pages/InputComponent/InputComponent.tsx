import React from 'react';
import './inputcomponent.scss';

interface InputComponentProps{
  type: string,
  name: string,
  placeholder: string,
  label?: string,
}

export function InputComponent({type, name, placeholder, label}: InputComponentProps) {
  return (
    <div className='input-block'>
      <label className='label' htmlFor={name}>
        {label}
      </label>
       
      <input className='input' type={type} id={name} name={name} placeholder={placeholder}/>
    </div>
  );
}
