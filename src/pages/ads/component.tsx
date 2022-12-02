import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Header from '../../blocks/Header';
import Button from '../../components/Button';
import { adsItems } from '../../mocks/adsItems';
import Advertisement from './components/Advertisement';
import CreateAdsForm from './components/CreateAdsForm';
import './styles.scss';

export default function AdsPage() {
  const { t } = useTranslation('p_ads');

  const [isOpenCreateAds, setIsOpenCreateAds] = useState(false);

  return (
    <>
      <Header />
      <div className="container announ-page-container">
        <div className="announ-page-create">
          <h1 className="announ-header">{t('header')}</h1>
          <Button
            disabled={false}
            text={t('buttonCreate')}
            size="middle"
            color="blue"
            onClick={() => {
              setIsOpenCreateAds(true);
            }}
          />
        </div>

        {adsItems.map((item) => (
          <Advertisement
            key={item.id}
            customer={item.customer}
            topic={item.topic}
            description={item.description}
            publishedDate={item.publishedDate}
            category={item.category}
            deadline={item.deadline}
            earn={item.earn}
          />
        ))}

        <CreateAdsForm isOpen={isOpenCreateAds} onClose={() => setIsOpenCreateAds(false)} />
      </div>
    </>
  );
}
