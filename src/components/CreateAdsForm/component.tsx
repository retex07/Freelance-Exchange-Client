import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { RubleIcon } from '../../static/icons';
import Button from '../Button';
import './styles.scss';

type Inputs = {
  category: string;
  theme: string;
  description: string;
  price: string;
};

export default function CreateAdsForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const { t } = useTranslation('p_ads');

  return (
    <form className="creare-ads-form" action="" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="create-ads-header">{t('adsCreate.header')}</h2>

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
  );
}
