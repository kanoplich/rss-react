import React from 'react';
import Form from '../../components/Form/Form';
import CardForm from '../../components/CardForm/CardForm';
import { useAppSelector } from '../../hook/redux';

const FormPage = () => {
  const formData = useAppSelector((state) => state.formReducer.cards);
  const isCard = useAppSelector((state) => state.formReducer.isCard);

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
      {formData.length === 0 ? (
        <div className="title" style={{ marginBottom: '50px' }}>
          No card
        </div>
      ) : (
        <div className="card__form_wrapper">
          {formData.map((data, index) => (
            <CardForm key={index} data={data} />
          ))}
        </div>
      )}
    </>
  );
};

export default FormPage;
