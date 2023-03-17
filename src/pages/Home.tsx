import React, { Component } from 'react';
import Search from '../components/Search';
import Card from '../components/Card';
import data from '../Data/CardData';

class Home extends Component {
  render() {
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
  }
}

export default Home;
