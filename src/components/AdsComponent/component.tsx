import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../Button';
import './styles.scss';

interface IAdsComponentProps{
  name: string,
  theme: string,
  description: string,
}

export default function AdsComponent({name, theme, description}: IAdsComponentProps) {

  const { t } = useTranslation("b_ads");

  return (
    <div className="announ-component">
      <div className="announ-info">
        <div className="announ-img-block">
          <img className='announ-img' src={require("../../static/img/anon_ava.png")} alt="avatar" />
          {name}
        </div>
        <div className="announ-text-block">
          <h3 className='announ-theme-header'>
            {t("ads_theme")}: {theme}
          </h3>
          <p className="announ-description">
            {description}
          </p>
        </div>
      </div>

      <Button disabled={false} text={t("ads_button")} color='green' size='middle' onClick={() => {console.log("ads-block CLICK")}}/>
    </div>
  );
}
