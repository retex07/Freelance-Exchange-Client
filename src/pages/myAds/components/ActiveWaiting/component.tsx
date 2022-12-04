import React from 'react';
import { useTranslation } from 'react-i18next';

import Button from '../../../../components/Button';
import { adsItems } from '../../../../mocks/adsItems';
import './styles.scss';

export default function ActiveWaiting() {
  const { t } = useTranslation('p_ads');

  return (
    <div className="cards-box">
      {adsItems.map((item) => (
        <div key={item.id} className="solution-card">
          <div className="card-topic-info">
            <img src={require('../../../../static/img/Task.png')} alt="task" className="icon" />
            <label className="card-topic-info--text">{item.topic}</label>
          </div>
          <div className="second-info">
            <div>
              <h3>{t('adsItem.category')}</h3>
              <label className="second-info-text">{item.category}</label>
            </div>
            <div>
              <h3>{t('adsItem.publishedDate')}</h3>
              <label className="second-info-text">{item.publishedDate}</label>
            </div>
            <div>
              <h3>{t('adsItem.earn')}</h3>
              <label className="second-info-text">{item.earn}</label>
            </div>
            <div className="btn-select">
              <Button text={t('button.cancel')} color="red" size="middle" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
