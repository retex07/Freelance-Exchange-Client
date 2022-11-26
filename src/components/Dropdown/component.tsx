import React from 'react';
import './styles.scss';

interface IDropdownProps {
  visible: string | React.ReactNode;
  tabindex?: number;
  drop: Array<string> | Array<React.ReactNode>;
}

export default function DropdownComponent({ visible, tabindex, drop }: IDropdownProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="dropdown">
      <p className="dropdown-description" onClick={() => setOpen(!open)} tabIndex={tabindex}>
        {visible}
      </p>
      {open && (
        <ul className="dropdown-list">
          {drop.map((el, index) => {
            return (
              <li className="dropdown-item" key={`dropdown_${index}`}>
                {el}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
