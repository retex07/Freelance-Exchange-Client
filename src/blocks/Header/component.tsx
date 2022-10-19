import React, { useTransition } from 'react';
import { Link } from 'react-router-dom';
import DropdownComponent from '../../components/DropdownComponent';
import Logo from '../../components/Logo';
import Switch from '../../components/Switch';
import { useTranslation } from "react-i18next";
import './styles.scss';
import ButtonComponent from '../../components/ButtonComponent';

export default function Header() {

  const { t } = useTranslation("b_header");

  return (
    <header className='header'>
      <div className="container header-container">
        <Logo/>
        <nav className='header-nav'>
          <ul className='nav-list'>
            <li className="nav-item">
              <Link to={'#'} className='header-nav-link'>{t("main_link")}</Link>
            </li>

            <li className="nav-item">
              <Link to={'#'} className='header-nav-link'>{t("ads_link")}</Link>
            </li>
          </ul>
        </nav>

        <div className="language-switch">
          EN
          <Switch/>
          RU
        </div>

        <ButtonComponent text={t("enter_button")} disabled={false} color="grey" size="small"/>
        
        

      </div>
    </header>
  );
}
