import React from 'react';
import './styles.scss';
import { useForm, SubmitHandler } from "react-hook-form";
import Button from '../../../components/Button';
import { useTranslation } from 'react-i18next';

// enum MonthEnum{
//   January= "Январь",
//   February= "Февраль",
//   March= "Март",
//   April="Апрель",
//   May="Май",
//   June="Июнь",
//   July="Июль",
//   August="Август",
//   September="Сентябрь",
//   October="Октябрь",
//   November="Ноябрь",
//   December="Декабрь",
// }

type Inputs = {
  name: string,
  surname: string,
  patronymic: string,
  institution: string,
  skills: string,

  day: string,
  month: string,
  year: string,
};

export default function ProfileForm() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  const {t} = useTranslation("p_profile");

  return (
    <form className='profile-form' onSubmit={handleSubmit(onSubmit)}>

      <label className='profile-label' htmlFor="">
        {t("profile_form_name")}
      </label>
      <input className='profile-text-input' id='name' {...register("name", { required: true })} />
      {errors.name && <p className='profile-error-description'>{t("profile_error_message")}</p>}

      <label className='profile-label' htmlFor="">
        {t("profile_form_surname")}
      </label>
      <input className='profile-text-input' id='surname' {...register("surname", { required: true })} />
      {errors.surname && <p className='profile-error-description'>{t("profile_error_message")}</p>}

      <label className='profile-label' htmlFor="">
        {t("profile_form_patronymic")}
      </label>
      <input className='profile-text-input' id='patronymic' {...register("patronymic")} />

      <div className="profile-select-block">
        <label className='profile-label' htmlFor="">
          {t("profile_form_birth")}
        </label>

        <select className='profile-select' {...register("day")}>
          <option value="11">11</option>
        </select>

        <select className='profile-select' {...register("month")}>
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>
        </select>

        <select className='profile-select' {...register("year")}>
          <option value="1984">1984</option>
        </select>
      </div>

      <label className='profile-label' htmlFor="institution">
        {t("profile_form_institution")}
      </label>
      <input className='profile-text-input' id='institution' {...register("institution")} />

      <label className='profile-label' htmlFor="skills">
        {t("profile_form_skills")}
      </label>
      <input className='profile-text-input' id='skills' {...register("skills", { required: true })} />
      {errors.skills && <p className='profile-error-description'>{t("profile_error_message")}</p>}

      <Button text={t("profile_save_button")} color='blue' size='small' disabled={false}/>
    </form>
  );
}
