import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hook/redux';
import { modalSlice } from '../../store/reduсers/ModalSlice';
import { CardData } from 'types';

type ModalProps = {
  data: CardData | undefined;
  loading: boolean;
};

const Modal = ({ data, loading }: ModalProps) => {
  const active = useAppSelector((state) => state.modalReducer.isModal);
  const dispatch = useAppDispatch();
  const { isModal } = modalSlice.actions;

  const handleClick = () => {
    dispatch(isModal(false));
  };

  return (
    <div
      className={active ? 'modal active' : 'modal'}
      onClick={() => handleClick()}
      data-testid="modal_button"
    >
      {loading && <div className="spinner"></div>}
      {data && (
        <div className="modal__wrapper" onClick={(e) => e.stopPropagation()}>
          <div className="modal__close" onClick={() => handleClick()}></div>
          <img className="modal__image" src={data.image} alt={data.name} />
          <div className="modal__content">
            <h3 className="modal__name">{data.name}</h3>
            <div className="modal__content_wrapper">
              <p>Location: </p>
              <p>{data.location.name}</p>
              <p>Origin: </p>
              <p>{data.origin.name}</p>
              <p>Gender: </p>
              <p>{data.gender}</p>
              <p>Type: </p>
              <p>{data.type}</p>
              <p>Species: </p>
              <p>{data.species}</p>
              <p>Status: </p>
              <p>{data.status}</p>
              <p>Created: </p>
              <p>{new Date(data.created).toLocaleDateString('en-GB')}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
