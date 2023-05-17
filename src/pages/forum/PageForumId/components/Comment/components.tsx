import React from 'react';

import './styles.scss';

interface Props {
  user: string;
  text: string;
  created_at: Date;
}

export default function Comment({ user, text, created_at }: Props) {
  return (
    <div className="comment-container">
      <img className="avatar" src={require('../../../../../static/img/anon_ava.png')} alt="avatar" />
      <div className="mainInfo">
        <div className="headInfoMsg">
          <label>{user}</label>
          <div>
            <label>
              ({new Date(created_at).getDate()}.{new Date(created_at).getMonth()}.{new Date(created_at).getFullYear()}
            </label>
            <label>
              {new Date(created_at).getHours()}:{new Date(created_at).getMinutes()})
            </label>
          </div>
        </div>
        <label className="text-comment">{text}</label>
      </div>
    </div>
  );
}
