import React from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';
import './styles.scss';
import { Link } from 'react-router-dom';

interface IFormComponentProps{
  action: string,
  header: string,
  button: string,
  formId: string,
  inputs: Array<React.ReactNode>,
}

export default function FormComponent( {action ,header, button, formId, inputs}: IFormComponentProps) {

  const [formInvalid, setFormInvalid] = React.useState(false);

  const submitHandle = (e: React.FormEvent) => {
    e.preventDefault();
    const todayLink = document.getElementById('todayLink') as HTMLLinkElement;

    let formEl = document.getElementById(`${formId}`) as HTMLFormElement; //нахожу форму
    let inputList = formEl.querySelectorAll('input'); // все инпуты в форме
    let inputNames: Array<string> = Array.prototype.slice.call(inputList).map((el) => { 
      return el.id // а тут id инпутов
    });
    
    class FormParameters { // а теперь финт ушами...
      [x: string]: string;
      constructor(arr: Array<string>) {
        for (let i = 0; i < arr.length; i++) { // этот класс создаёт объект со свойствами из id инпутов и их значений. Столько же, сколько и инпутов.
          let name = arr[i]
          this[name] = inputList[i].value;
        }
      }
    };
    
    let params = new FormParameters(inputNames); // создаю объект

    // и в axios вписываю, в качестве отправляемых параметров.
    axios.post(action, params).then(function (res) { 
      localStorage.setItem('token', res.data.accessToken);
      todayLink.click();
    }).catch(function (err) {
      
      setTimeout(() => {
        for (let i = 0; i < inputList.length; i++) {
          inputList[i].setCustomValidity('');
        };
        setFormInvalid(false);

      }, 2500)

      setFormInvalid(true);
      for (let i = 0; i < inputList.length; i++) {
        inputList[i].setCustomValidity(' ');
      }
    });
  }
  // это всё ради того, чтобы можно было использовать этот компонент снова и снова, как можно легче.
  return (
    <>
      <form id={formId} className='form-style' action='' onSubmit={submitHandle}>
        <p className='form-header'>{header}</p>

        {
          inputs.map((El) => {
            return El // рендерим инпуты из массива
          })
        }
        
        <button type='submit' className='input-button'>{button}</button>
      </form>

      {formInvalid &&
        <p className='error-description'>
          Имя пользователя или пароль введены не верно
        </p>
      }

      <Link id='todayLink' to={'/today'}/>
    </>
  );
}
