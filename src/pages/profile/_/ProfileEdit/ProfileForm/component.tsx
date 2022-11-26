import React from 'react';
import 'react-calendar/dist/Calendar.css';
import { Calendar } from 'react-calendar';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import Button from '../../../../../components/Button';
import './styles.scss';

type Inputs = {
  name: string;
  surname: string;
  patronymic: string;
  birthday: string;
  institution: string;
  skills: string;
  about: string;
};

export default function ProfileForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const [date, setDate] = React.useState<Date | null>();

  function formatDate(date: Date) {
    let dd: number | string = date.getDate();
    if (dd < 10) dd = '0' + dd;

    let mm: number | string = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    let yy: number | string = date.getFullYear() % 100;
    if (yy < 10) yy = '0' + yy;

    return dd + '.' + mm + '.' + yy;
  }

  const [dateShow, setDateShow] = React.useState(false);

  const { t } = useTranslation('p_profile');

  return (
    <form className="edit-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="edit-input-block">
        <label className="edit-label">{t('edit.form.name')}</label>
        <input className="edit-text-input" id="name" {...register('name', { required: true })} />
        {errors.name && <p className="edit-error-description">{t('edit.form.errorMessage')}</p>}
      </div>

      <div className="edit-input-block">
        <label className="edit-label">{t('edit.form.surname')}</label>
        <input className="edit-text-input" id="surname" {...register('surname', { required: true })} />
        {errors.surname && <p className="edit-error-description">{t('edit.form.errorMessage')}</p>}
      </div>

      <div className="edit-input-block">
        <label className="edit-label">{t('edit.form.patronymic')}</label>
        <input className="edit-text-input" id="patronymic" {...register('patronymic')} />
      </div>

      <div className="edit-select-block">
        <div className="edit-input-block">
          <label className="edit-label">{t('edit.form.birth')}</label>

          <div className="date-block">
            <div
              onClick={() => {
                setDateShow(!dateShow);
              }}
            >
              <input
                readOnly
                className="edit-text-input"
                id="birthday"
                {...register('birthday', { required: true })}
                value={date ? formatDate(date) : ''}
              />
              {errors.birthday && <p className="edit-error-description">{t('edit.form.errorMessage')}</p>}
            </div>

            {
              dateShow && (
                <Calendar
                  onChange={(value: Date) => {
                    setDate(value);
                  }}
                  value={date}
                />
              ) //Есть проблемка. Потом решу.
            }
          </div>
        </div>
      </div>

      <div className="edit-input-block">
        <label className="edit-label">{t('edit.form.institution')}</label>
        <input className="edit-text-input" id="institution" {...register('institution')} />
      </div>

      <div className="edit-input-block">
        <label className="edit-label">{t('edit.form.skills')}</label>
        <input className="edit-text-input" id="skills" {...register('skills', { required: true })} />
        {errors.skills && <p className="edit-error-description">{t('edit.form.errorMessage')}</p>}
      </div>

      <div className="edit-input-block">
        <label className="edit-label">{t('edit.form.about')}</label>
        <textarea className="edit-text-input textarea" id="about" {...register('about')} />
      </div>

      <Button text={t('edit.form.saveButton')} color="blue" size="middle" disabled={false} />
    </form>
  );
}
