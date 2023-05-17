import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { useGets } from '../../../api/gets';
import { usePosts } from '../../../api/posts';
import { ForumId } from '../../../api/types';
import Header from '../../../blocks/Header';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import PageLoader from '../../../components/PageLoader';
import CommentCard from './components/Comment';

import './styles.scss';

interface Inputs {
  text: string;
}

export default function PageForumId() {
  const { t } = useTranslation('p_forum');
  const [dataForum, setDataForum] = useState<ForumId>();

  const { GetForumId, isLoading } = useGets();
  const { CommentForumCreate } = usePosts();

  const idForum = window.location.pathname.replace('/forum/', '');

  const { register, handleSubmit } = useForm<Inputs>({
    mode: 'onChange',
  });

  useEffect(() => {
    if (!dataForum) {
      setDataForum(GetForumId(idForum));
    }
  }, [GetForumId, dataForum, idForum]);

  function onSubmit(data: Inputs) {
    if (dataForum) {
      CommentForumCreate(dataForum.id, data.text);
    }
  }

  if (isLoading) return <PageLoader />;

  if (!dataForum) return <PageLoader />;

  return (
    <>
      <Header />
      <div className="container forum-wrapper">
        <div>
          <div className="forum-to-back-list">
            <label className="forum-to-back-list link" onClick={() => location.replace('/forum')}>
              {t('forumId.backToList')}
            </label>
            <label className="forum-to-back-list"> - {dataForum.title}</label>
          </div>
          <div className="headers">
            <h1 className="heading">{dataForum.title}</h1>
            <div className="subtitle">
              <div className="description">
                <h2 className="description-heading">{t('forumId.author')}</h2>
                <span className="use-text">{dataForum.created_by.username}</span>
              </div>
              <div className="description">
                <h2 className="description-heading">{t('forumId.created')}</h2>
                <span className="use-text">
                  {new Date(dataForum.created_at).getDate()}.{new Date(dataForum.created_at).getMonth()}.
                  {new Date(dataForum.created_at).getFullYear()}
                </span>
              </div>
            </div>
            <div className="description">
              <h2 className="description-heading">{t('forumId.description')}</h2>
              <span className="use-text">{dataForum?.description}</span>
            </div>
          </div>
        </div>
        {dataForum.comment.length > 0 && (
          <div className="comments-block">
            {dataForum.comment.map((comment) => (
              <CommentCard
                key={comment.id}
                user={comment.user.username}
                text={comment.text}
                created_at={comment.create_at}
              />
            ))}
          </div>
        )}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="sendComment">
            <Input name="sendComment" type="text" placeholder={t('forumId.pressComment')} register={register('text')} />
            <Button type="submit" size="small" color="blue" text={t('forumId.send')} />
          </div>
        </form>
      </div>
    </>
  );
}
