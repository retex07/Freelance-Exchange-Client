import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo';
import Switch from '../../components/Switch';
import { useTranslation } from "react-i18next";
import Button from '../../components/Button';
import Modal from "../../components/Modal";

import './styles.scss';

export default function Header() {
  const { t } = useTranslation("b_header");
  const [isModalOpen, setIsModalOpen] = useState(false);

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

        <Button
            onClick={() => setIsModalOpen(!isModalOpen)}
            text={t("enter_button")}
            disabled={false}
            color="blue"
            size="small"
        />
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          Something text
        </Modal>
      </div>
    </header>
  );
}
