import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import PageLoader from './components/PageLoader';
import AdsPage from './pages/ads';
import IndexPage from './pages/index/component';
import ProfileEdit from './pages/profile/_/ProfileEdit';
import ProfileItem from './pages/profile/_/ProfileItem';
import ProfilePage from './pages/profile/component';

function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/profile" element={<ProfilePage />}>
          <Route path="item" element={<ProfileItem />} />
          <Route path="edit" element={<ProfileEdit />} />
        </Route>
        <Route path="/ads" element={<AdsPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
