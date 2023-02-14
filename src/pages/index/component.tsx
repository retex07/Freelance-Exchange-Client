import React from 'react';

import Header from '../../blocks/Header';
import AdsBlock from './block/AdsBlock';
import Hero from './block/Hero';

export default function IndexPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AdsBlock />
      </main>
    </>
  );
}
