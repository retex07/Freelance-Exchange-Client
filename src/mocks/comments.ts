import { Comment } from '../api/types';

export const comments: Comment[] = [
  {
    id: 0,
    user: {
      id: 1,
      username: 'alex',
    },
    text: 'this comment',
    create_at: new Date(),
    post: 1,
  },
  {
    id: 1,
    user: {
      id: 1,
      username: 'alex',
    },
    text: 'this comment2',
    create_at: new Date(),
    post: 1,
  },
];
