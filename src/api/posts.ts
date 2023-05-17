import { useState } from 'react';

import Api from './api';

export function usePosts() {
  const [data, setData] = useState();

  function Login(nickname: string, password: string) {
    Api.login(nickname, password)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem('token', res.data.auth_token);
        setData(res.data);
        window.location.reload();
      })
      .catch((err) => console.error(err));

    return data;
  }

  function Logout() {
    Api.logout()
      .then((res) => {
        console.log(res.data);
        localStorage.clear();
        setData(res.data);
        window.location.reload();
      })
      .catch((err) => console.error(err));

    return data;
  }

  function Registration(email: string, nickname: string, password: string) {
    Api.registration(nickname, email, password)
      .then((res) => {
        setData(res.data);
        window.location.reload();
      })
      .catch((err) => console.error(err));

    return data;
  }

  function CreateBoard(title: string, content: string, price: string, category: string) {
    Api.createBoard(title, content, price, category)
      .then((res) => {
        setData(res.data);
        window.location.reload();
      })
      .catch((err) => console.error(err));

    return data;
  }

  return { Registration, CreateBoard, Login, Logout };
}
