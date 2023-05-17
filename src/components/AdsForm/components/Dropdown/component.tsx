import React, { useState } from 'react';

import { Category } from '../../../../api/types';

import './styles.scss';

interface IDropdownProps {
  list: Category[];
  required?: boolean;
  name?: string;
  nowCategory: string;
  setCategory: (category: string) => void;
}

export default function DropdownComponent({ nowCategory, setCategory, required, list, name }: IDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown-component" onClick={() => setIsOpen(!isOpen)}>
      <input name={name} required={required} readOnly value={nowCategory} />
      {isOpen && (
        <ul className="dropdown-list-component">
          {list?.map((item) => (
            <label
              key={item.id}
              onClick={() => {
                setIsOpen(false);
                setCategory(item.category);
              }}
            >
              {item.category}
            </label>
          ))}
        </ul>
      )}
    </div>
  );
}
