import React from 'react';
import { CardData } from 'types';
import { fetchDataId } from './Card.service';

type PropsType = {
  data: CardData;
  setActive: (active: boolean) => void;
  getData: (data: CardData) => void;
  setDataId: (card: CardData | undefined) => void;
};

const Card = ({ data, setActive, getData, setDataId }: PropsType) => {
  const { name, image, id } = data;

  const handlerClick = () => {
    setActive(true);
    setDataId(undefined);
    fetchDataId(id).then((data) => getData(data));
  };

  return (
    <button className="card" onClick={() => handlerClick()}>
      <img src={image} alt={name} />
      <h2 className="card__name">{name}</h2>
    </button>
  );
};

export default Card;
