import React, { useState } from 'react';
import './styles.scss';

interface IDropdownProps {
  visible: string | React.ReactNode;
  tabindex?: number;
  dropList: string[] | React.ReactNode[];
}

export default function DropdownMenu({ visible, tabindex, dropList }: IDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown">
      <p className="dropdown-description" onClick={() => setIsOpen(!isOpen)} tabIndex={tabindex}>
        {visible}
      </p>
      {isOpen && (
        <ul className="dropdown-list">
          {dropList.map((item, index) => {
            return (
              <li className="dropdown-item" key={`dropdown_${index}`}>
                {item}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
