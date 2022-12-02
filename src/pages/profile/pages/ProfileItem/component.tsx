import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import Button from '../../../../components/Button';
import List from '../../../../components/List';
import './styles.scss';

export default function ProfileItem() {
  const linkHandler = () => {
    const linkEl = document.getElementById('toEdit') as HTMLLinkElement;
    linkEl.click();
  };

  const { t } = useTranslation('p_profile');

  return (
    <div className="container profile-container">
      <div className="info-block">
        <div className="info-text">
          <h1 className="profile-header">Иван</h1>

          <p className="profile-institution">ТУСУР ФСУ-2 ПИ</p>

          <h2 className="profile-unit-header">{t('page.skills')}</h2>

          <List
            list={['HTML', 'CSS', 'JS/TS', 'React']}
            classList="profile-skills-list"
            classItem="profile-skills-item"
          />
        </div>

        <div className="info-avatar">
          <img src={require('../../../../static/img/profile_anon.png')} alt="avatar" className="avatar" />
          <Button disabled={false} text={t('page.editButton')} color="blue" size="middle" onClick={linkHandler} />
        </div>
      </div>

      <h2 className="profile-unit-header">{t('page.about')}</h2>
      <p className="profile-about">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore iste officia aut itaque, nam error aliquam
        tempora qui rem. Fugit beatae illum tempore culpa, ipsa similique? Omnis nihil tenetur molestiae.
      </p>
      <Link to="/profile/edit" id="toEdit" />
    </div>
  );
}
