import { useState } from 'react';

import Api from './api';

export function usePosts() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  function ForumCreate(title: string, description: string) {
    setIsLoading(true);
    Api.forumCreate(title, description)
      .then((res) => {
        setData(res.data);
        window.location.reload();
      })
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));

    return data;
  }

  function CommentForumCreate(post: number, text: string) {
    setIsLoading(true);
    Api.commentCreateForum(post, text)
      .then((res) => {
        setData(res.data);
        window.location.reload();
      })
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));

    return data;
  }

  function Login(nickname: string, password: string) {
    setIsLoading(true);
    Api.login(nickname, password)
      .then((res) => {
        localStorage.clear();
        localStorage.setItem('token', res.data.auth_token);
        setData(res.data);
        window.location.reload();
      })
      .catch(() => localStorage.setItem('errorLogin', 'Неверно введен логин или пароль!'))
      .finally(() => setIsLoading(false));

    return data;
  }

  function Logout() {
    setIsLoading(true);
    Api.logout()
      .then((res) => {
        localStorage.clear();
        setData(res.data);
        window.location.reload();
      })
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));

    return data;
  }

  function Registration(email: string, nickname: string, password: string) {
    setIsLoading(true);
    Api.registration(nickname, email, password)
      .then((res) => {
        setData(res.data);
        window.location.reload();
      })
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));

    return data;
  }

  function CreateBoard(title: string, content: string, price: string, category: string) {
    setIsLoading(true);
    Api.createBoard(title, content, price, category)
      .then((res) => {
        setData(res.data);
        window.location.reload();
      })
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));

    return data;
  }

  return { Registration, CreateBoard, CommentForumCreate, ForumCreate, Login, Logout, isLoading };
}
