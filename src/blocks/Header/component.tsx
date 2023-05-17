import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';

import { usePosts } from '../../api/posts';
import Auth from '../../components/Auth/component';
import Button from '../../components/Button';
import SwitchLanguage from '../../components/SwitchLanguage';
import Close from '../../static/icons/Close';
import Menu from '../../static/icons/Menu';
import DropdownMenu from './components/DropdownMenu';
import './styles.scss';

export default function Header() {
  const { t } = useTranslation('b_header');
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const navigate = useNavigate();

  const { Logout } = usePosts();

  function onLogout() {
    Logout();
  }

  const linkList = [
    <Link key={0} to="/profile/item">
      {t('dropdown.profile')}
    </Link>,
    <Link key={1} to="/myAds">
      {t('dropdown.ads')}
    </Link>,
    <Link key={2} to="" onClick={() => onLogout()}>
      {t('dropdown.exit')}
    </Link>,
  ];

  return (
    <header className="header">
      {isOpenModal && <Auth isOpen={isOpenModal} onClose={() => setIsOpenModal(false)} />}
      <div className="container header-container__desktop">
        <img src={require('../../static/img/logo.png')} alt="Logo" onClick={() => navigate('/')} className="logo" />
        <nav className="header-nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to={'/'} className="header-nav-link">
                {t('mainLink')}
              </Link>
            </li>
            <li className="nav-item">
              <Link to={'/forum'} className="header-nav-link">
                {t('forum')}
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

        {localStorage.getItem('token') ? (
          <DropdownMenu
            visible={<img className="header-dropdown" src={require('../../static/img/anon_ava.png')} alt="dropdown" />}
            dropList={linkList}
          />
        ) : (
          <Button text={t('login')} color="blue" size="small" onClick={() => setIsOpenModal(true)} />
        )}
      </div>

      <div className="header-container__mobile">
        <div className="menu-icon" onClick={() => setIsOpenMenu(true)}>
          <Menu />
        </div>
        <img src={require('../../static/img/logo.png')} alt="Logo" onClick={() => navigate('/')} />
        {localStorage.getItem('token') ? (
          <DropdownMenu
            dropList={linkList}
            visible={<img className="header-dropdown" src={require('../../static/img/anon_ava.png')} alt="dropdown" />}
          />
        ) : (
          <Button text={t('login')} color="blue" size="small" onClick={() => setIsOpenModal(true)} />
        )}
        {isOpenMenu && (
          <div className="sidebar">
            <div className="sidebar__close" onClick={() => setIsOpenMenu(false)}>
              <Close />
            </div>
            <div className="sidebar__container">
              <div>
                <img src={require('../../static/img/logo.png')} alt="Logo" onClick={() => navigate('/')} />
              </div>
              <div className="sidebar__nav">
                <h2>{t('navigation')}</h2>
                <ul className="sidebar__nav">
                  <li className="sidebar__nav-item">
                    <Link to={'/'} className="header-nav-link">
                      {t('mainLink')}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={'/forum'} className="header-nav-link">
                      {t('forum')}
                    </Link>
                  </li>
                  <li className="sidebar__nav-item">
                    <Link to={'/ads'} className="header-nav-link">
                      {t('adsLink')}
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="language-switch">
                <label>EN</label>
                <SwitchLanguage />
                <label>RU</label>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
