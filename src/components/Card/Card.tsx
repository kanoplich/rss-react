import React from 'react';
import { modalSlice } from '../../store/reduсers/ModalSlice';
import { CardData } from 'types';
import { useAppDispatch } from '../../hook/redux';

type PropsType = {
  data: CardData;
};

const Card = ({ data }: PropsType) => {
  const { name, image, id } = data;
  const { isModal, isSkip, identification } = modalSlice.actions;
  const dispatch = useAppDispatch();

  const handlerClick = () => {
    dispatch(isModal(true));
    dispatch(isSkip(false));
    dispatch(identification(id));
  };

  return (
    <button className="card" onClick={() => handlerClick()}>
      <img src={image} alt={name} />
      <h2 className="card__name">{name}</h2>
    </button>
  );
};

export default Card;
