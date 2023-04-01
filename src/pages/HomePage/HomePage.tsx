import React from 'react';
import Search from '../../components/Search/Search';
import Card from '../../components/Card/Card';
import data from '../../Data/CardData';

const HomePage = () => {
  return (
    <>
      <Search />
      <div className="card__wrapper">
        {data.map((item) => {
          return <Card key={item.id} data={item} />;
        })}
      </div>
    </>
  );
};

export default HomePage;
