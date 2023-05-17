import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { usePosts } from '../../../../api/posts';
import Button from '../../../../components/Button';
import Modal from '../../../../components/Modal';
import Close from '../../../../static/icons/Close';
import './styles.scss';

type Inputs = {
  title: string;
  description: string;
};

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function CreateForumForm({ isOpen, onClose }: Props) {
  const { t } = useTranslation('p_forum');

  const { ForumCreate } = usePosts();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  function onSubmit(data: Inputs) {
    ForumCreate(data.title, data.description);
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form className="creare-ads-form" action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="create-ads-topic-info">
          <h2 className="create-ads-header">{t('forumCreate.header')}</h2>
          <div className="closer" onClick={onClose}>
            <Close />
          </div>
        </div>
        <div className="creare-ads-input-block">
          <label className="creare-ads-label">{t('forumCreate.theme')}</label>
          <input className="creare-ads-text-input" id="theme" {...register('title')} required />
          {errors.title && <p className="creare-ads-error-description">{t('forumCreate.error')}</p>}
        </div>
        <div className="creare-ads-input-block">
          <label className="creare-ads-label">{t('forumCreate.description')}</label>
          <textarea
            className="creare-ads-text-input create-ads-textarea"
            id="description"
            {...register('description')}
            required
          />
          {errors.description && <p className="creare-ads-error-description">{t('forumCreate.error')}</p>}
        </div>
        <Button type="submit" text={t('forumCreate.button')} size="middle" color="blue" disabled={false} />
      </form>
    </Modal>
  );
}
