import React from 'react';
import { useTranslation } from 'react-i18next';

import './styles.scss';

export default function ProfilePage() {
  const { t } = useTranslation('p_profile');

  return <div>{t('title')}</div>;
}
