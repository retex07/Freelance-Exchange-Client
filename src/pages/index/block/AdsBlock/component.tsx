import React from 'react';
import { useTranslation } from 'react-i18next';

import { adsItems } from '../../../../mocks/adsItems';
import ArrowIcon from '../../../../static/icons/Arrow';
import Advertisement from '../../../ads/components/Advertisement';
import './styles.scss';

export default function AdsBlock() {
  const { t } = useTranslation('p_ads');

  return (
    // элементы с классами, как ads-section и ads-header скрываются AdBlock-ом
    <section className="announ-section">
      <div className="container announ-container">
        <h2 className="announ-header">{t('header')}</h2>

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

        <div className="announ-see">
          <span>{t('more')}</span>
          <ArrowIcon />
        </div>
      </div>
    </section>
  );
}
