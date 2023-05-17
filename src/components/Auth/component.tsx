import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { usePosts } from '../../api/posts';
import Close from '../../static/icons/Close';
import Button from '../Button';
import InputComponent from '../Input';
import Modal from '../Modal';
import './styles.scss';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

interface Data {
  nickname: string;
  email: string;
  password: string;
  password2: string;
  login?: string;
}

export default function Auth(props: Props) {
  const { t } = useTranslation('c_auth');

  const [isContentLogin, setIsContentLogin] = useState(true);
  const { Registration, Login } = usePosts();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    setError,
    setFocus,
  } = useForm<Data>({
    mode: 'onChange',
  });

  function onSubmit(data: Data) {
    if (data.password === data.password2 && !data.login) {
      reset();
      Registration(data.email, data.nickname, data.password);
    } else if (data.login) {
      reset();
      Login(data.password, data.login);
    } else {
      setFocus('password');
      setFocus('password2');

      setError('password', {
        message: t('errorPass'),
      });
    }
  }

  return (
    <Modal isOpen onClose={props.onClose}>
      {isContentLogin ? (
        <div className="auth__container">
          <div className="auth__header">
            <h3>{t('auth.header')}</h3>
            <div onClick={props.onClose} className="auth__click">
              <Close />
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="auth__inputs">
              <InputComponent
                label={t('auth.inputsBlock.login')}
                name="Login"
                type="Login"
                placeholder={t('auth.inputsBlock.pressLogin')}
                register={register('login')}
                required
              />
              <InputComponent
                label={t('auth.inputsBlock.pass')}
                name="Password"
                type="Password"
                placeholder={t('auth.inputsBlock.pressPass')}
                register={register('password')}
                required
              />
            </div>
            {localStorage.getItem('errorLogin') && (
              <label className="auth__error">{localStorage.getItem('errorLogin')}</label>
            )}
            <span className="auth__click" onClick={() => setIsContentLogin(false)}>
              <u>{t('auth.inputsBlock.registration')}</u>
            </span>
            <Button type="submit" text={t('auth.inputsBlock.signIn')} color="blue" size="small" fullWidth />
          </form>
          <span className="auth__text">
            {t('rules.one')} <u>{t('rules.two')}</u> {t('rules.three')} <u>{t('rules.four')}</u>
          </span>
        </div>
      ) : (
        <div className="auth__container">
          <div className="auth__header">
            <h3>{t('registration.header')}</h3>
            <div onClick={props.onClose} className="auth__click">
              <Close />
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="auth__inputs">
              <InputComponent
                label={t('registration.inputsBlock.login')}
                name="Nickname"
                type="Text"
                placeholder={t('registration.inputsBlock.pressLogin')}
                register={register('nickname')}
                required
              />
              <InputComponent
                label={t('registration.inputsBlock.email')}
                name="Email"
                type="Text"
                placeholder={t('registration.inputsBlock.pressEmail')}
                register={register('email')}
                required
              />
              <InputComponent
                label={t('registration.inputsBlock.pass')}
                name="Password"
                type="Password"
                placeholder={t('registration.inputsBlock.pressPass')}
                register={register('password')}
                error={errors.password?.message}
                required
              />
              <InputComponent
                label={t('registration.inputsBlock.repeatPass')}
                name="Password2"
                type="Password"
                placeholder={t('registration.inputsBlock.pressRepeatPass')}
                register={register('password2')}
                error={errors.password?.message}
                required
              />
            </div>
            <div>
              <span className="auth__click" onClick={() => setIsContentLogin(true)}>
                <u>{t('registration.inputsBlock.signIn')}</u>
              </span>
              <Button
                text={t('registration.inputsBlock.registration')}
                color="blue"
                size="small"
                type="submit"
                fullWidth
              />
            </div>
          </form>
          <span className="auth__text">
            {t('rules.one')} <u>{t('rules.two')}</u> {t('rules.three')} <u>{t('rules.four')}</u>
          </span>
        </div>
      )}
    </Modal>
  );
}
