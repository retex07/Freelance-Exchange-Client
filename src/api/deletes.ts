import { useState } from 'react';

import Api from './api';

export function useDeletes() {
  const [data, setData] = useState();

  function DelBoard(id: number) {
    Api.deleteBoard(id)
      .then((res) => {
        setData(res.data);
        window.location.reload();
      })
      .catch((err) => {
        console.error(err);
      });
    return data;
  }

  return { DelBoard };
}
