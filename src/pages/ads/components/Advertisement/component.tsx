import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Button from '../../../../components/Button';
import AdsItem from '../AdsItem';
import './styles.scss';

interface Props {
  customer: string;
  topic: string;
  description: string;
  publishedDate: string;
  category: string;
  deadline: string;
  earn: string;
}

export default function Advertisement({
  customer,
  topic,
  description,
  publishedDate,
  category,
  deadline,
  earn,
}: Props) {
  const { t } = useTranslation('p_ads');
  const [isOpenItemAds, setIsOpenItemAds] = useState(false);

  function onClose() {
    setIsOpenItemAds(false);
  }

  return (
    <>
      <AdsItem
        isOpen={isOpenItemAds}
        onClose={onClose}
        customer={customer}
        category={category}
        deadline={deadline}
        description={description}
        topic={topic}
        earn={earn}
      />

      <div className="announ-component" onClick={() => setIsOpenItemAds(true)}>
        <div className="announ-info">
          <div className="announ-img-block">
            <img className="announ-img" src={require('../../../../static/img/anon_ava.png')} alt="avatar" />
            <label>{customer}</label>
          </div>
          <div className="announ-text-block">
            <h3 className="announ-theme-header">{topic}</h3>
            <p className="announ-description">{description}</p>
          </div>
        </div>

        <div>
          <Button
            text={t('buttonRespond')}
            color="green"
            size="middle"
            onClick={() => {
              alert(t('alert'));
            }}
          />
        </div>
        <div className="announ-date">{publishedDate}</div>
      </div>
    </>
  );
}
