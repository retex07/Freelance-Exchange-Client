import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useGets } from '../../../../api/gets';
import { AdsList } from '../../../../api/types';
import ArrowIcon from '../../../../static/icons/Arrow';
import Advertisement from '../../../ads/components/Advertisement';
import './styles.scss';

export default function AdsBlock() {
  const [dataAds, setDataAds] = useState<AdsList[]>();
  const { t } = useTranslation('p_ads');

  const { GetAdsList } = useGets();

  useEffect(() => {
    if (!dataAds) {
      setDataAds(GetAdsList());
    }
  }, [GetAdsList, dataAds]);

  return (
    <section className="announ-section">
      <div className="container announ-container">
        <h2 className="announ-header">{t('header')}</h2>

        {dataAds?.map((item, index) => {
          if (index < 3)
            return (
              <Advertisement
                key={item.id}
                customer={item.author.username}
                topic={item.title}
                description={item.content}
                publishedDate={item.published}
                category={item.category.category}
                earn={item.price}
                id={item.id}
              />
            );
        })}

        <div className="announ-see">
          <span onClick={() => location.replace('/ads')}>{t('more')}</span>
          <ArrowIcon />
        </div>
      </div>
    </section>
  );
}
