import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../../../components/Button';
import './styles.scss';

export default function ProfileAvatar() {

  const {t} = useTranslation("p_profile");

  return (
    <div className="profile-avatar-block">
      <h1 className='profile-header'>
        {t("profile_header")}
      </h1>

      <img className='profile-avatar' src={require("../../../static/img/profile_anon.png")} alt="profile-avatar" />

      <Button disabled={false} text={t("profile_ava_button")} size="small" color='clear' onClick={() => {console.log("Change avatar")}}/>
    </div>
  );
}
