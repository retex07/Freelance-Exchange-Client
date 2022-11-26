import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../../blocks/Header';

export default function ProfilePage() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
