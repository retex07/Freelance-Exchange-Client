import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useGets } from '../../api/gets';
import { AdsList, User } from '../../api/types';
import Header from '../../blocks/Header';
import AdsForm from '../../components/AdsForm';
import Button from '../../components/Button';
import PageLoader from '../../components/PageLoader';
import Advertisement from './components/Advertisement';
import './styles.scss';

export default function AdsPage() {
  const [dataAds, setDataAds] = useState<AdsList[]>();
  const { t } = useTranslation('p_ads');

  const [dataUser, setDataUser] = useState<User | undefined>(undefined);
  const [isOpenCreateAds, setIsOpenCreateAds] = useState(false);

  const { GetAdsList } = useGets();
  const { GetUser, isLoading } = useGets();

  useEffect(() => {
    if (!dataAds) {
      setDataAds(GetAdsList());
    }
  }, [GetAdsList, dataAds]);

  function getUser() {
    if (!isLoading) {
      setDataUser(GetUser());
    }
  }
  if (isLoading || (localStorage.getItem('token') && !dataUser)) {
    getUser();
    return <PageLoader />;
  }

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
              setIsOpenCreateAds(true);
            }}
          />
        </div>

        {dataAds?.map((item) => (
          <Advertisement
            key={item.id}
            customer={item.author.username}
            topic={item.title}
            description={item.content}
            publishedDate={item.published}
            category={item.category.category}
            earn={item.price}
            id={item.id}
            user={dataUser}
          />
        ))}

        <AdsForm isOpen={isOpenCreateAds} onClose={() => setIsOpenCreateAds(false)} />
      </div>
    </>
  );
}
