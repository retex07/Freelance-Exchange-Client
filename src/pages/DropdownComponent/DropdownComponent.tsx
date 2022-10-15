import React from 'react';
import './dropdowncomponent.scss';

interface IDropdownProps{
  text: string;
  tabindex?: number,
  choose: Array<string> | Array<React.ReactNode>,
}

export function DropdownComponent({text, tabindex, choose}: IDropdownProps) {
  const [open, setOpen] = React.useState(false);
  const dropdownOpen = () => {
    setOpen(!open);
  }

  return (
    <div className="dropdown" >
      <p className='dropdown-description' onClick={dropdownOpen} tabIndex={tabindex}>
        {text}
      </p>
      { open &&
      <ul className='dropdown-list'>
        {
          choose.map((el) => {
            return <li className='dropdown-item'>{el}</li>;
          })
        }
      </ul>
      }
    </div>
  );
}
