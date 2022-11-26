import React from 'react';

import ProfileAvatar from './ProfileAvatar';
import ProfileForm from './ProfileForm/component';
import './styles.scss';

export default function ProfileEdit() {
  return (
    <section className="edit-section">
      <div className="container edit-container">
        <ProfileAvatar />
        <ProfileForm />
      </div>
    </section>
  );
}
