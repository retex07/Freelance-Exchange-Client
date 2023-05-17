import axios from 'axios';

const apiInstance = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiInstance.interceptors.request.use(function (config) {
  const tokenStr = localStorage.getItem('token');
  config.url = `${config.url}`;
  config.headers.Authorization = tokenStr ? `Token ${tokenStr}` : '';

  return config;
});

const api = {
  categoryList: async () => {
    return apiInstance.get('board/category/');
  },

  user: async () => {
    return apiInstance.get('auth/users/me/');
  },

  logout: async () => {
    return apiInstance.post('auth/token/logout/');
  },

  login: async (password: string, username: string) => {
    return apiInstance.post('auth/token/login/', {
      password,
      username,
    });
  },

  registration: async (username: string, email: string, password: string) => {
    return apiInstance.post('auth/users/', {
      username,
      password,
    });
  },

  createBoard: async (title: string, content: string, price: string, category: string) => {
    return apiInstance.post('board/', {
      title,
      content,
      price,
      category,
    });
  },

  putBoard: async (title: string, content: string, price: string, category: string, id: number) => {
    return apiInstance.put(`board/${id}/`, {
      title,
      content,
      price,
      category,
    });
  },

  deleteBoard: async (id: number) => {
    return apiInstance.delete(`board/${id}`);
  },

  adsItems: async () => {
    return apiInstance.get('board/');
  },
};

export default api;
