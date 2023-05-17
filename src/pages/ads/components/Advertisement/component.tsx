import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useDeletes } from '../../../../api/deletes';
import { User } from '../../../../api/types';
import AdsForm from '../../../../components/AdsForm';
import Auth from '../../../../components/Auth';
import Button from '../../../../components/Button';
import AdsItemModal from '../AdsItem';
import './styles.scss';

interface Props {
  customer: string;
  topic: string;
  description: string;
  publishedDate: Date;
  user?: User;
  category: string;
  deadline?: string;
  id: number;
  earn: number;
}

export default function Advertisement({
  user,
  id,
  customer,
  topic,
  description,
  publishedDate,
  category,
  earn,
}: Props) {
  const { t } = useTranslation('p_ads');

  const [isOpenItemAds, setIsOpenItemAds] = useState(false);
  const [isOpenModalAuth, setIsOpenModalAuth] = useState(false);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);

  const { DelBoard } = useDeletes();

  function onClose() {
    setIsOpenItemAds(false);
  }

  return (
    <>
      {isOpenEditModal && <AdsForm isOpen={isOpenEditModal} onClose={() => setIsOpenEditModal(false)} id={id} isEdit />}
      {isOpenModalAuth && <Auth isOpen={isOpenModalAuth} onClose={() => setIsOpenModalAuth(false)} />}

      <AdsItemModal
        isOpen={isOpenItemAds}
        onClose={onClose}
        customer={customer}
        category={category}
        description={description}
        topic={topic}
        earn={earn}
        user={user}
      />

      <div className="announ-component">
        <div className="announ-container-info">
          <div className="announ-info" onClick={() => setIsOpenItemAds(true)}>
            <div className="announ-img-block">
              <img className="announ-img" src={require('../../../../static/img/anon_ava.png')} alt="avatar" />
              <label>{customer}</label>
            </div>
            <div className="announ-text-block">
              <h3 className="announ-theme-header">{topic}</h3>
              <p className="announ-description">{description}</p>
            </div>
          </div>
          {customer != user?.username && (
            <div>
              <Button
                text={t('buttonRespond')}
                color="green"
                size="middle"
                onClick={() => {
                  if (!user && !localStorage.getItem('token')) {
                    setIsOpenModalAuth(true);
                  } else {
                    alert(t('alert'));
                  }
                }}
              />
            </div>
          )}
        </div>

        <div className="announ-footer">
          {customer == user?.username && (
            <div className="labels-task">
              <label className="label-edit" onClick={() => setIsOpenEditModal(true)}>
                {t('put')}
              </label>
              <label
                className="label-delete"
                onClick={() => {
                  DelBoard(id);
                }}
              >
                {t('delete')}
              </label>
            </div>
          )}
          <div className="published">
            {new Date(publishedDate).getDate()}.{new Date(publishedDate).getMonth()}.
            {new Date(publishedDate).getFullYear()}
          </div>
        </div>
      </div>
    </>
  );
}
