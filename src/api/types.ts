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

export type ForumItemCard = {
  id: number;
  title: string;
  description: string;
  created_at: Date;
  created_by: {
    id: number;
    username: string;
  };
};

export type ForumId = {
  id: number;
  created_by: {
    id: number;
    username: string;
  };
  comment: Comment[];
  title: string;
  description: string;
  created_at: Date;
};

export type Comment = {
  id: number;
  user: {
    id: number;
    username: string;
  };
  text: string;
  create_at: Date;
  post: number;
};
