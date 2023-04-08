import React, { Dispatch, SetStateAction } from 'react';
import { CardData } from 'types';

type PropsType = {
  data: CardData;
  setActive: Dispatch<SetStateAction<boolean>>;
  getData: (data: CardData) => void;
  setDataId: (card: CardData | undefined) => void;
};

const Card = ({ data, setActive, getData, setDataId }: PropsType) => {
  const { name, image, id } = data;

  const fetchDataId = (id: number) => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data: CardData) => getData(data));
  };

  const handlerClick = () => {
    setActive(true);
    setDataId(undefined);
    fetchDataId(id);
  };

  return (
    <button className="card" onClick={() => handlerClick()}>
      <img src={image} alt={name} />
      <h2 className="card__name">{name}</h2>
    </button>
  );
};

export default Card;
