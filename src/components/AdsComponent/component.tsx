import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../Button';
import './styles.scss';

interface IAdsComponentProps{
  name: string,
  theme: string,
  description: string,
  date: string,
}

export default function AdsComponent({name, theme, description, date}: IAdsComponentProps) {

  const { t } = useTranslation("p_ads");

  return (
    <div className="announ-component">
      <div className="announ-info">
        <div className="announ-img-block">
          <img className='announ-img' src={require("../../static/img/anon_ava.png")} alt="avatar" />
          {name}
        </div>
        <div className="announ-text-block">
          <h3 className='announ-theme-header'>
            {t("theme")}: {theme}
          </h3>
          <p className="announ-description">
            {description}
          </p>
        </div>
      </div>

      <Button disabled={false} text={t("buttonRespond")} color='green' size='middle' onClick={() => {console.log("ads-block CLICK")}}/>

      <div className='announ-date'>
       {date}
      </div>
    </div>
  );
}
