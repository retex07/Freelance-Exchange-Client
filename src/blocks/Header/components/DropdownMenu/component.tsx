import React from 'react';
import './styles.scss';

interface IDropdownProps {
  visible: string | React.ReactNode;
  tabindex?: number;
  dropList: string[] | React.ReactNode[];
}

export default function DropdownMenu({ visible, tabindex, dropList }: IDropdownProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="dropdown">
      <p className="dropdown-description" onClick={() => setOpen(!open)} tabIndex={tabindex}>
        {visible}
      </p>
      {open && (
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
