import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../../components/Button';
import './styles.scss';

export default function Hero() {

  const { t } = useTranslation("b_hero");

  return (
    <section className="hero-section">
      <div className="container hero-container">
         <div className='text-block'>
            <h1 className='hero-header'>
              {t('hero_header')}
            </h1>

            <p className='hero-description'>
              {t('hero_description_1')}
            </p>

            <p className='hero-description'>
              <span className='hero-accent'>
                5
              </span> 

              <span>
                {t('hero_description_2')}
              </span> 
            </p>

            <Button disabled={false} text={t('hero_button')} size='big' color='white' />
         </div>

          <img className='hero' src={require("../../static/img/hero_image.png")} alt="" />
      </div>
    </section>
  );
}
