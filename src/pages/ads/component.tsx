import React from 'react';
import './styles.scss';
import { useTranslation } from 'react-i18next';

import Header from '../../blocks/Header';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import AdsComponent from './components/AdsComponent';
import CreateAdsForm from './components/CreateAdsForm';

export default function AdsPage() {
  const { t } = useTranslation('p_ads');

  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <>
      <Header />
      <div className="container announ-page-container">
        <div className="announ-page-create">
          <h1 className="announ-header">{t('header')}</h1>
          <Button
            disabled={false}
            text={t('buttonCreate')}
            size="middle"
            color="blue"
            onClick={() => {
              setIsModalOpen(true);
            }}
          />
        </div>

        <AdsComponent name="Имя" theme="Тема" description="Описание" date="11.11.22" />
        <AdsComponent name="Имя" theme="Тема" description="Описание" date="11.11.22" />
        <AdsComponent
          name="Имя"
          theme="Тема"
          description="'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam mollitia maiores, nostrum tempora libero ad odit, perferendis praesentium vitae ea eos, perspiciatis expedita beatae numquam! Ea, neque. Fuga, rem modi.'"
          date="11.11.22"
        />

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <CreateAdsForm />
        </Modal>
      </div>
    </>
  );
}
