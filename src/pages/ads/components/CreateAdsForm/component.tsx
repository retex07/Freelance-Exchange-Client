import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import Button from '../../../../components/Button';
import Modal from '../../../../components/Modal';
import Close from '../../../../static/icons/Close';
import RubleIcon from '../../../../static/icons/Ruble';
import './styles.scss';

type Inputs = {
  category: string;
  theme: string;
  description: string;
  price: string;
};

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function CreateAdsForm({ isOpen, onClose }: Props) {
  const { t } = useTranslation('p_ads');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form className="creare-ads-form" action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="create-ads-topic-info">
          <h2 className="create-ads-header">{t('adsCreate.header')}</h2>
          <div className="closer" onClick={onClose}>
            <Close />
          </div>
        </div>

        <div className="creare-ads-input-block">
          <label className="creare-ads-label">{t('adsCreate.category')}</label>
          <input className="creare-ads-text-input" id="category" {...register('category', { required: true })} />
          {errors.category && <p className="creare-ads-error-description">{t('adsCreate.error')}</p>}
        </div>

        <div className="creare-ads-input-block">
          <label className="creare-ads-label">{t('adsCreate.theme')}</label>
          <input className="creare-ads-text-input" id="theme" {...register('theme', { required: true })} />
          {errors.theme && <p className="creare-ads-error-description">{t('adsCreate.error')}</p>}
        </div>

        <div className="creare-ads-input-block">
          <label className="creare-ads-label">{t('adsCreate.description')}</label>
          <textarea
            className="creare-ads-text-input create-ads-textarea"
            id="description"
            {...register('description', { required: true })}
          />
          {errors.description && <p className="creare-ads-error-description">{t('adsCreate.error')}</p>}
        </div>

        <div className="creare-ads-input-block price-block">
          <label className="creare-ads-label">{t('adsCreate.price')}</label>
          <input
            type={'number'}
            className="creare-ads-text-input"
            id="price"
            {...register('price', { required: true })}
          />
          {errors.price && <p className="creare-ads-error-description">{t('adsCreate.error')}</p>}
          <div className="input-icon">
            <RubleIcon />
          </div>
        </div>

        <Button text={t('adsCreate.button')} size="middle" color="blue" disabled={false} />
      </form>
    </Modal>
  );
}
