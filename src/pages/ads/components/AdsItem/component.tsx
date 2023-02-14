import React from 'react';
import { useTranslation } from 'react-i18next';

import Button from '../../../../components/Button';
import Modal from '../../../../components/Modal';
import Close from '../../../../static/icons/Close';
import './styles.scss';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  customer: string;
  topic: string;
  description: string;
  category: string;
  deadline: string;
  earn: string;
}

export default function AdsItem({ isOpen, onClose, customer, description, earn, topic, deadline, category }: Props) {
  const { t } = useTranslation('p_ads');

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="wrapper">
        <div className="upContainer">
          <h2>{topic}</h2>
          <div className="close" onClick={onClose}>
            <Close />
          </div>
        </div>
        <div className="mainInfoAds">
          <section className="adsInfo">
            <div>
              <h3>{t('adsItem.category')}</h3>
              <label>{category}</label>
            </div>
            <div>
              <h3>{t('adsItem.deadline')}</h3>
              <label>{deadline}</label>
            </div>
            <div>
              <h3>{t('adsItem.earn')}</h3>
              <label>{earn}</label>
            </div>
          </section>
          <div className="avatarSection">
            <img src={require('../../../../static/img/profile_anon.png')} alt="profile" />
            <div>
              <h3>{t('adsItem.customer')}</h3>
              <label>{customer}</label>
            </div>
          </div>
        </div>
        <div className="description-block">
          <h3>{t('adsItem.description')}</h3>
          <div className="description">
            <label>{description}</label>
          </div>
        </div>
        <div>
          <Button text={t('buttonRespond')} color="green" size="middle" onClick={() => alert(t('alert'))} />
        </div>
      </div>
    </Modal>
  );
}
