import React from 'react';
import { CardFormTypeSubmit } from 'types';

type CardFromProps = {
  data: CardFormTypeSubmit;
};

const CardForm = ({ data }: CardFromProps) => {
  return (
    <div className="card__form">
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
};

export default CardForm;
