import React, { Component } from 'react';
import { CardFormType } from 'types';

type CardFromProps = {
  data: CardFormType;
};

class CardForm extends Component<CardFromProps> {
  render() {
    const { data } = this.props;
    return (
      <div className="card">
        <img src={data.image} alt="image" />
        <h2 className="card__name">{data.name}</h2>
        <div className="card__data">
          <p>Birthday: {data.birthday}</p>
          <p>Country: {data.country}</p>
          <p>Gender: {data.gender}</p>
        </div>
      </div>
    );
  }
}

export default CardForm;
