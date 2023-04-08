import React, { Dispatch, SetStateAction } from 'react';
import { CardData } from 'types';

type ModalProps = {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
  data: CardData | undefined;
};

const Modal = ({ active, setActive, data }: ModalProps) => {
  return (
    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
      {data ? (
        <div className="modal__wrapper" onClick={(e) => e.stopPropagation()}>
          <div className="modal__close" onClick={() => setActive(false)}></div>
          <img className="modal__image" src={data.image} alt={data.name} />
          <div className="modal__content">
            <h3 className="modal__name">{data.name}</h3>
            <div className="modal__content_wrapper">
              <p>Location: </p>
              <p>{data.location.name}</p>
              <p>Gender: </p>
              <p>{data.gender}</p>
              <p>Species: </p>
              <p>{data.species}</p>
              <p>Status: </p>
              <p>{data.status}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="spinner"></div>
      )}
    </div>
  );
};

export default Modal;
