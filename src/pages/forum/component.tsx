import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useGets } from '../../api/gets';
import { ForumItemCard, User } from '../../api/types';
import Header from '../../blocks/Header';
import Button from '../../components/Button';
import PageLoader from '../../components/PageLoader';
import CreateForumForm from './components/CreateForumForm';
import CardForum from './components/ItemForum';

export default function ForumPage() {
  const [dataForum, setDataForum] = useState<ForumItemCard[]>();
  const [dataUser, setDataUser] = useState<User | undefined>(undefined);
  const [isOpenCreateAds, setIsOpenCreateAds] = useState(false);

  const { t } = useTranslation('p_forum');

  const { GetForumList, isLoading } = useGets();
  const { GetUser, isLoading: isLoadingUser } = useGets();

  useEffect(() => {
    if (!dataForum) {
      setDataForum(GetForumList());
    }
  }, [GetForumList, dataForum]);

  function getUser() {
    if (!isLoadingUser) {
      setDataUser(GetUser());
    }
  }
  if (isLoadingUser || (localStorage.getItem('token') && !dataUser)) {
    getUser();
    return <PageLoader />;
  }

  if (isLoading) return <PageLoader />;

  return (
    <>
      <Header />
      <div className="container announ-page-container">
        <div className="announ-page-create">
          <h1 className="announ-header">{t('header')}</h1>
          <Button
            disabled={false}
            text={t('buttonCreate')}
            size="middle"
            color="blue"
            onClick={() => {
              if (!dataUser) {
                alert(t('authError'));
              } else {
                setIsOpenCreateAds(true);
              }
            }}
          />
        </div>

        {dataForum?.map((item) => (
          <CardForum
            id={item.id}
            key={item.id}
            customer={item.created_by.username}
            title={item.title}
            description={item.description}
            publishedDate={item.created_at}
          />
        ))}

        <CreateForumForm isOpen={isOpenCreateAds} onClose={() => setIsOpenCreateAds(false)} />
      </div>
    </>
  );
}
