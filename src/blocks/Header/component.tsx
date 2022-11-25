import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo';
import Switch from '../../components/Switch';
import { useTranslation } from "react-i18next";
import Button from '../../components/Button';

import './styles.scss';
import Dropdown from '../../components/Dropdown';

export default function Header() {
  const { t } = useTranslation("b_header");

  return (
    <header className='header'>
      <div className="container header-container">
        <Logo/>

        <nav className='header-nav'>
          <ul className='nav-list'>
            <li className="nav-item">
              <Link to={'/'} className='header-nav-link'>{t("mainLink")}</Link>
            </li>

            <li className="nav-item">
              <Link to={'/ads'} className='header-nav-link'>{t("adsLink")}</Link>
            </li>
          </ul>
        </nav>

        <div className="language-switch">
          EN
          <Switch/>
          RU
        </div>

        <Dropdown 
          visible={
            <img className='header-dropdown' src={require("../../static/img/anon_ava.png")}/>
          } 
          drop={[
            <Link to="/profile/page">{t("dropdown.profile")}</Link>,
            <Link to="/myAds">{t("dropdown.ads")}</Link>,
            <Link to="">{t("dropdown.exit")}</Link>,
          ]}
        />
        {/* <Button
            onClick={() => {}}
            text={t("enterButton")}
            disabled={false}
            color="blue"
            size="small"
        /> */}
      </div>
    </header>
  );
}
