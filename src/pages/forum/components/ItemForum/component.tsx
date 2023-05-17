import React from 'react';

interface Props {
  customer: string;
  title: string;
  description: string;
  publishedDate: Date;
  id: number;
}

export default function CardForum({ id, title, description, publishedDate }: Props) {
  return (
    <>
      <div className="announ-component" onClick={() => location.replace(`/forum/${id}`)}>
        <div className="announ-info">
          <div className="announ-text-block">
            <h3 className="announ-theme-header">{title}</h3>
            <p className="announ-description">{description}</p>
          </div>
        </div>
        <div className="announ-date">
          {new Date(publishedDate).getDate()}.{new Date(publishedDate).getMonth()}.
          {new Date(publishedDate).getFullYear()}
        </div>
      </div>
    </>
  );
}
