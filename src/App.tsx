import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import PageLoader from './components/PageLoader';
import AdsPage from './pages/ads';
import IndexPage from './pages/index/component';
import ProfilePage from './pages/profile/component';
import ProfileEdit from './pages/profile/pages/ProfileEdit';
import ProfileItem from './pages/profile/pages/ProfileItem';

function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/loader" element={<PageLoader />} />
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
