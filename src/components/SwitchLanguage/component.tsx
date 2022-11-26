import React from 'react';
import { useTranslation } from 'react-i18next';
import './styles.scss';

export default function SwitchLanguage() {
  const { i18n } = useTranslation();

  return (
    <label className="switch">
      <input
        type="checkbox"
        className="switch-checkbox"
        onChange={(e) => (e.target.checked ? i18n.changeLanguage('ru') : i18n.changeLanguage('en'))}
        defaultChecked={i18n.language == 'ru'}
      />
      <div className="slider" />
    </label>
  );
}
