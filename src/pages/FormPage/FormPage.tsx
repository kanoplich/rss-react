import React from 'react';
import Form from '../../components/Form/Form';
import CardForm from '../../components/CardForm/CardForm';
import { useAppSelector } from '../../hook/redux';

const FormPage = () => {
  const { cards, isCard } = useAppSelector((state) => state.formReducer);

  return (
    <>
      <Form />
      {isCard && (
        <div
          className="title"
          style={{ color: 'green', textTransform: 'uppercase', marginBottom: '50px' }}
        >
          Card created successfully
        </div>
      )}
      <div className="line"></div>
      {cards.length === 0 ? (
        <div className="title" style={{ marginBottom: '50px' }}>
          No card
        </div>
      ) : (
        <div className="card__form_wrapper">
          {cards.map((data, index) => (
            <CardForm key={index} data={data} />
          ))}
        </div>
      )}
    </>
  );
};

export default FormPage;
