import React, { useState } from 'react';
import { CardFormTypeSubmit } from 'types';
import Form from '../../components/Form/Form';
import CardForm from '../../components/CardForm/CardForm';

const FormPage = () => {
  const [formData, setFormData] = useState<CardFormTypeSubmit[]>([]);
  const [isCard, setCard] = useState(false);

  const getCardFormData = (data: CardFormTypeSubmit) => {
    setFormData((prev) => [...prev, data]);
    setCard(true);
    setTimeout(() => {
      setCard(false);
    }, 3000);
  };
  return (
    <>
      <Form getData={getCardFormData} />
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
        <div className="card__wrapper">
          {formData.map((data, index) => (
            <CardForm key={index} data={data} />
          ))}
        </div>
      )}
    </>
  );
};

export default FormPage;
