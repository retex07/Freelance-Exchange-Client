import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { useGets } from '../../api/gets';
import { usePosts } from '../../api/posts';
import { usePuts } from '../../api/puts';
import { Category } from '../../api/types';
import Close from '../../static/icons/Close';
import Button from '../Button';
import Modal from '../Modal';
import PageLoader from '../PageLoader';
import DropdownComponent from './components/Dropdown';
import './styles.scss';

type Inputs = {
  category: string;
  title: string;
  content: string;
  price: string;
};

interface Props {
  isEdit?: boolean;
  id?: number;
  isOpen: boolean;
  onClose: () => void;
}

export default function AdsForm({ isEdit, id, isOpen, onClose }: Props) {
  const { t } = useTranslation('p_ads');

  const [dataCategory, setDataCategory] = useState<Category[]>();
  const [nowCategory, setNowCategory] = useState('');

  const { CreateBoard } = usePosts();
  const { PutBoard } = usePuts();
  const { GetCategoryList, isLoading } = useGets();

  useEffect(() => {
    if (!dataCategory) {
      setDataCategory(GetCategoryList());
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    mode: 'onChange',
  });

  function onSubmit(data: Inputs) {
    if (isEdit && id) {
      PutBoard(data.title, data.content, data.price, nowCategory, id);
    } else {
      CreateBoard(data.title, data.content, data.price, nowCategory);
    }
  }
  if (!dataCategory && !isLoading) {
    setDataCategory(GetCategoryList());
  }
  if (isLoading) return <PageLoader />;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form className="creare-ads-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="create-ads-topic-info">
          <h2 className="create-ads-header">{t('adsCreate.header')}</h2>
          <div className="closer" onClick={onClose}>
            <Close />
          </div>
        </div>

        <div className="creare-ads-input-block">
          <label className="creare-ads-label">{t('adsCreate.category')}</label>
          <DropdownComponent
            nowCategory={nowCategory}
            setCategory={(category: string) => setNowCategory(category)}
            name="category"
            list={dataCategory != null ? dataCategory : []}
            required
          />
          {errors.category && <p className="creare-ads-error-description">{t('adsCreate.error')}</p>}
        </div>

        <div className="creare-ads-input-block">
          <label className="creare-ads-label">{t('adsCreate.theme')}</label>
          <input className="creare-ads-text-input" id="theme" {...register('title')} required />
          {errors.title && <p className="creare-ads-error-description">{t('adsCreate.error')}</p>}
        </div>
        <div className="creare-ads-input-block">
          <label className="creare-ads-label">{t('adsCreate.description')}</label>
          <textarea
            className="creare-ads-text-input create-ads-textarea"
            id="description"
            {...register('content')}
            required
          />
          {errors.content && <p className="creare-ads-error-description">{t('adsCreate.error')}</p>}
        </div>
        <div className="creare-ads-input-block price-block">
          <label className="creare-ads-label">{t('adsCreate.price')}</label>
          <input type={'number'} className="creare-ads-text-input" id="price" {...register('price')} required />
          {errors.price && <p className="creare-ads-error-description">{t('adsCreate.error')}</p>}
        </div>
        <Button type="submit" text={t('adsCreate.button')} size="middle" color="blue" disabled={false} />
      </form>
    </Modal>
  );
}
