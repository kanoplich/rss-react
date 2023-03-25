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
          <p>
            Birthday: <span>{data.birthday}</span>
          </p>
          <p>
            Country: <span>{data.country}</span>
          </p>
          <p>
            Gender: <span>{data.gender}</span>
          </p>
        </div>
      </div>
    );
  }
}

export default CardForm;
