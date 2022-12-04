import React, { useState } from 'react';

import Header from '../../blocks/Header';
import Button from '../../components/Button';
import ActiveWaiting from './components/ActiveWaiting';
import ActiveWorking from './components/ActiveWorking';
import './styles.scss';

export default function MyAdsPage() {
  const [isActiveWaiting, setIsActiveWaiting] = useState(false);

  return (
    <>
      <Header />
      <div className="container ads--container">
        <div className="ads--header">
          <h1>Мои объявления</h1>
        </div>
        <div className="ads--select">
          <div className="ads--select--button">
            <Button
              fullWidth
              color={isActiveWaiting ? 'blue' : 'white'}
              text="В работе"
              size="middle"
              onClick={() => setIsActiveWaiting(false)}
            />
          </div>
          <div className="ads--select--button">
            <Button
              fullWidth
              color={isActiveWaiting ? 'white' : 'blue'}
              text="В ожидании"
              size="middle"
              onClick={() => setIsActiveWaiting(true)}
            />
          </div>
        </div>
        {isActiveWaiting ? <ActiveWaiting /> : <ActiveWorking />}
      </div>
    </>
  );
}
