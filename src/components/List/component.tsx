import React from 'react';
import './styles.scss';

interface IListProps {
  list: string[];
  classList?: string;
  classItem?: string;
}

export default function List({ classList, classItem, list }: IListProps) {
  return (
    <ul className={`list ${classList}`}>
      {list.map((item, index) => {
        return (
          <li className={`${classItem}`} key={`${classList}Item_${index}`}>
            <span className="list-ball" />
            {item}
          </li>
        );
      })}
    </ul>
  );
}
