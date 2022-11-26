import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import Dropdown from '../../components/Dropdown';
import Switch from '../../components/Switch';
import './styles.scss';

export default function Header() {
  const { t } = useTranslation('b_header');

  const linkList = [
    <Link key={1} to="/profile/item">
      {t('dropdown.profile')}
    </Link>,
    <Link key={1} to="/myAds">
      {t('dropdown.ads')}
    </Link>,
    <Link key={1} to="">
      {t('dropdown.exit')}
    </Link>,
  ];

  return (
    <header className="header">
      <div className="container header-container">
        <img src={require('../../static/img/logo.png')} alt="Logo" />
        <nav className="header-nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to={'/'} className="header-nav-link">
                {t('mainLink')}
              </Link>
            </li>

            <li className="nav-item">
              <Link to={'/ads'} className="header-nav-link">
                {t('adsLink')}
              </Link>
            </li>
          </ul>
        </nav>

        <div className="language-switch">
          EN
          <Switch />
          RU
        </div>

        <Dropdown
          visible={<img className="header-dropdown" src={require('../../static/img/anon_ava.png')} alt="dropdown" />}
          drop={linkList}
        />
      </div>
    </header>
  );
}
