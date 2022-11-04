import React from 'react';
import ProfileAvatar from './ProfileAvatar';
import ProfileForm from './ProfileForm/component';
import './styles.scss';


export default function Profile() {

 
  return (
    <section className="profile-section">
      <div className="container profile-container">
        <ProfileAvatar/>
        <ProfileForm/>
      </div>
    </section>
  );
}
