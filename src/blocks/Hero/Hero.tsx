import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/Button';
import './styles.scss';

export default function Hero() {
  const { t } = useTranslation('b_hero');
  const navigate = useNavigate();

  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="text-block">
          <h1 className="hero-header">{t('header')}</h1>

          <p className="hero-description">{t('description_1')}</p>

          <p className="hero-description">
            <span className="hero-accent">5</span>
            <span>{t('description_2')}</span>
          </p>

          <Button disabled={false} text={t('button')} size="big" color="white" onClick={() => navigate('/ads')} />
        </div>

        <img className="hero" src={require('../../static/img/hero_image.png')} alt="" />
      </div>
    </section>
  );
}
