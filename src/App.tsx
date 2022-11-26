import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Profile from './blocks/Profile';
import ProfileEdit from './blocks/ProfileEdit';
import AdsPage from './pages/ads';
import IndexPage from './pages/index/component';
import ProfilePage from './pages/profile/component';

function App() {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/profile" element={<ProfilePage />}>
          <Route path="item" element={<Profile />} />
          <Route path="edit" element={<ProfileEdit />} />
        </Route>
        <Route path="/ads" element={<AdsPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
