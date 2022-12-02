import React from 'react';

import Header from '../../blocks/Header';
import Hero from '../../blocks/Hero';
import AdsBlock from './block/AdsBlock';
import './styles.scss';

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
