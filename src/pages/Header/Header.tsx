import React from 'react';
import { Link } from 'react-router-dom';
import { InputComponent } from '../InputComponent';
import { FormComponent } from '../LoginForm/LoginForm';
import { DropdownComponent } from '../DropdownComponent';
import './header.scss';

export function Header() {
  return (
    <header className='header'>
      <div className="container header-container">
        <nav className='header-nav'>
          <ul className='nav-list'>
            <li className="nav-item">
              <Link to={'#'}>Главная</Link>
            </li>

            <li className="nav-item">
              <Link to={'#'}>Объявления</Link>
            </li>

            <li className="nav-item">
              <Link to={'#'}>Регистрация/авторизация</Link>
            </li>
          </ul>
        </nav>

        <DropdownComponent
          text={"Выбор языка"}
          
          choose={['Английский', 'Русский']}
        />

        <DropdownComponent
          text={'"Иконка профиля"'}
          
          choose={[
            <Link to={"#"}>Профиль</Link>,
            <Link to={"#"}>Мои объявления</Link>,
            <Link to={"#"}>Выход</Link>
          ]}
        />

        {/* Форму я воткнул, просто, чтобы ты обратил на него внимание и посмотрел. Я его потом уберу, куда нужно */}
        {/* это компонент формы, который я написал для прошлого проекта. Я подумал, что он понадобится позже. Моя идея для этого компонента в том, что для его использования нужно просто правильным образом вписать в код и всё доолжно работать. Я так надеюсь))) */}
        {/* В параметр inputs можно вписать от одного и больше компонентов InputComponent */}
        <FormComponent 
          action='#' 
          header="Форма"
          button="Войти"
          formId='FormId'
          inputs={[
            <InputComponent type='text' name='login' placeholder='Логин' label='Логин'/>,
            <InputComponent type='text' name='pass' placeholder='Пароль' label='Пароль'/>
          ]}
        />
      </div>
    </header>
  );
}
