import { useState } from 'react';

import Api from './api';

export function usePuts() {
  const [data, setData] = useState();

  function PutBoard(title: string, content: string, price: string, category: string, id: number) {
    Api.putBoard(title, content, price, category, id)
      .then((res) => {
        setData(res.data);
        window.location.reload();
      })
      .catch((err) => console.error(err));

    return data;
  }

  return { PutBoard };
}
