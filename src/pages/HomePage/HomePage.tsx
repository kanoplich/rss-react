import React, { useState } from 'react';
import Search from '../../components/Search/Search';
import Card from '../../components/Card/Card';
import { FetchData, CardData } from 'types';

const HomePage = () => {
  const [data, setData] = useState<CardData[]>([]);
  const [pending, setIsPending] = useState(true);
  const getFetchData = (data: FetchData) => {
    setData([]);
    setIsPending(true);
    setData(data.results);
    setIsPending(false);
  };

  return (
    <>
      <Search getData={getFetchData} />
      <div className="card__wrapper">
        {pending && <div className="spinner"></div>}
        {data && data.map((item) => <Card key={item.id} data={item} />)}
        {!pending && !data && <div className="title">No card</div>}
      </div>
    </>
  );
};

export default HomePage;
