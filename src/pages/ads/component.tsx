import React from 'react';
import { useTranslation } from 'react-i18next';

import './styles.scss';

export default function AdsPage() {
  const { t } = useTranslation('p_ads');

  return <div>{t('title')}</div>;
}
