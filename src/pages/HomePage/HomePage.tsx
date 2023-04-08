import React, { useState } from 'react';
import Search from '../../components/Search/Search';
import Card from '../../components/Card/Card';
import { CardData } from 'types';
import Modal from '../../components/Modal/Modal';

const HomePage = () => {
  const [data, setData] = useState<CardData[] | undefined>(undefined);
  const [dataId, setDataId] = useState<CardData | undefined>(undefined);
  const [pending, setIsPending] = useState(true);
  const [modalActive, setModalActive] = useState(false);
  const getFetchData = (data: CardData[] | undefined) => {
    setTimeout(() => {
      if (data === undefined) {
        setData(data);
      } else {
        const sortData: CardData[] = [];
        for (let i = 0; i < data.length; i++) {
          if (data[i].id <= 20) sortData.push(data[i]);
        }
        setData(sortData.length ? sortData : undefined);
      }
      setIsPending(false);
    }, 2000);
  };
  const getFetchDataId = (data: CardData) => {
    setDataId(data);
  };

  return (
    <>
      <Search getFetchData={getFetchData} setData={setData} setIsPending={setIsPending} />
      <div className="card__wrapper">
        {pending && <div className="spinner"></div>}
        {data &&
          data.map((item) => (
            <Card
              key={item.id}
              data={item}
              setActive={setModalActive}
              getData={getFetchDataId}
              setDataId={setDataId}
            />
          ))}
        {!pending && !data && <div className="title">No card</div>}
      </div>
      <Modal active={modalActive} setActive={setModalActive} data={dataId} />
    </>
  );
};

export default HomePage;
