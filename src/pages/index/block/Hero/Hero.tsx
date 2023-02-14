import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import Button from '../../../../components/Button';
import './styles.scss';

export default function Hero() {
  const { t } = useTranslation('b_hero');
  const navigate = useNavigate();

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="text-block">
          <h1 className="hero-header">{t('header')}</h1>

          <img className="hero_img2" src={require('../../../../static/img/hero_image.png')} alt="" />

          <p className="hero-description hero-description__center">{t('description_1')}</p>
          <div className="btn1">
            <Button disabled={false} text={t('button')} size="big" color="white" onClick={() => navigate('/ads')} />
          </div>
          <p className="hero-description">
            <span className="hero-accent">5</span>
            <span>{t('description_2')}</span>
          </p>

          <div className="btn2">
            <Button disabled={false} text={t('button')} size="big" color="white" onClick={() => navigate('/ads')} />
          </div>
        </div>

        <img className="hero_img" src={require('../../../../static/img/hero_image.png')} alt="" />
      </div>
    </section>
  );
}
