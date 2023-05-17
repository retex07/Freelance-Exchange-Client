export type AdsList = {
  id: number;
  title: string;
  content: string;
  price: number;
  published: Date;
  category: {
    id: number;
    category: string;
  };
  author: {
    id: number;
    username: string;
  };
};

export type Category = {
  id: number;
  category: string;
};

export type User = {
  email: string;
  id: number;
  username: string;
};
