import React from 'react';
import { useTranslation } from 'react-i18next';

import AdsComponent from '../../components/AdsComponent';
import { ArrowIcon } from '../../static/icons';
import './styles.scss';

export default function AdsBlock() {
  const { t } = useTranslation('p_ads');

  return (
    // элементы с классами, как ads-section и ads-header скрываются AdBlock-ом
    <section className="announ-section">
      <div className="container announ-container">
        <h2 className="announ-header">{t('header')}</h2>

        <AdsComponent name="Имя" theme="Тема проблемы" description="Описание проблемы" date="11.11.22" />
        <AdsComponent name="Имя" theme="Тема проблемы" description="Описание проблемы" date="11.11.22" />

        <AdsComponent
          name="Имя"
          theme="Тема проблемы"
          description={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam mollitia maiores, nostrum tempora libero ad odit, perferendis praesentium vitae ea eos, perspiciatis expedita beatae numquam! Ea, neque. Fuga, rem modi.'
          }
          date="11.11.22"
        />

        <div className="announ-see">
          <span>{t('more')}</span>
          <ArrowIcon />
        </div>
      </div>
    </section>
  );
}
