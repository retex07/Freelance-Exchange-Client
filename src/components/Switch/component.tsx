import React from 'react';
import './styles.scss';

export default function Switch() {
  return (
    <label className="switch">
      <input type="checkbox" className='switch-checkbox'/>
      <div className="slider"></div>
    </label>
  );
}
