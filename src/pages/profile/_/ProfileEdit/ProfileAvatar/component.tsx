import React from 'react';
import { useTranslation } from 'react-i18next';

import Button from '../../../../../components/Button';
import './styles.scss';

export default function ProfileAvatar() {
  const { t } = useTranslation('p_profile');

  return (
    <div className="edit-avatar-block">
      <h1 className="edit-header">{t('edit.header')}</h1>

      <img className="avatar" src={require('../../../../../static/img/profile_anon.png')} alt="profile-avatar" />

      <Button
        disabled={false}
        text={t('edit.avaButton')}
        size="middle"
        color="clear"
        onClick={() => {
          console.log('Change avatar');
        }}
      />
    </div>
  );
}
