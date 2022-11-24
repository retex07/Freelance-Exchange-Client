import React from 'react';

import AdsBlock from '../../blocks/AdsBlock';
import Header from '../../blocks/Header';
import Hero from '../../blocks/Hero';
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
