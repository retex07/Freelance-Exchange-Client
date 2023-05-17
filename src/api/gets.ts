import { useState } from 'react';

import Api from './api';

export function useGets() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  function GetForumList() {
    setIsLoading(true);
    Api.forumList()
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => setIsLoading(false));
    return data;
  }

  function GetCommentsForum(id: string) {
    setIsLoading(true);
    Api.commentListForum(id)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => setIsLoading(false));
    return data;
  }

  function GetUser() {
    setIsLoading(true);
    Api.user()
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => setIsLoading(false));
    return data;
  }

  function GetCategoryList() {
    setIsLoading(true);
    Api.categoryList()
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => setIsLoading(false));
    return data;
  }

  function GetAdsList() {
    setIsLoading(true);
    Api.adsItems()
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));

    return data;
  }

  return { GetAdsList, GetForumList, GetCommentsForum, GetUser, GetCategoryList, isLoading };
}
