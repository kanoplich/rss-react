import React from 'react';
import { CardData } from 'types';

type PropsType = {
  data: CardData;
};

const Card = ({ data }: PropsType) => {
  const { name, image } = data;
  return (
    <button className="card">
      <img src={image} alt={name} />
      <h2 className="card__name">{name}</h2>
    </button>
  );
};

export default Card;
