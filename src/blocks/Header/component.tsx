import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';

import Dropdown from '../../components/Dropdown';
import SwitchLanguage from '../../components/SwitchLanguage';
import './styles.scss';

export default function Header() {
  const { t } = useTranslation('b_header');
  const navigate = useNavigate();

  const linkList = [
    <Link key={0} to="/profile/item">
      {t('dropdown.profile')}
    </Link>,
    <Link key={1} to="/myAds">
      {t('dropdown.ads')}
    </Link>,
    <Link key={2} to="">
      {t('dropdown.exit')}
    </Link>,
  ];

  return (
    <header className="header">
      <div className="container header-container">
        <img src={require('../../static/img/logo.png')} alt="Logo" onClick={() => navigate('/')} className="logo" />
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
          <label>EN</label>
          <SwitchLanguage />
          <label>RU</label>
        </div>

        <Dropdown
          visible={<img className="header-dropdown" src={require('../../static/img/anon_ava.png')} alt="dropdown" />}
          drop={linkList}
        />
      </div>
    </header>
  );
}
