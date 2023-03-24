import React, { Component } from 'react';
import { CardFormType } from 'types';
import Form from '../../components/Form/Form';
import CardForm from '../../components/CardForm/CardForm';

type FormPageState = {
  formData: CardFormType[];
  isCard: boolean;
};

class FormPage extends Component {
  state: FormPageState = {
    formData: [],
    isCard: false,
  };

  getCardFormData = (data: CardFormType) => {
    this.setState((prev: FormPageState) => {
      return {
        formData: [...prev.formData, data],
        isCard: true,
      };
    });
    setTimeout(() => {
      this.setState({ isCard: false });
    }, 3000);
  };

  render() {
    const { formData, isCard } = this.state;
    return (
      <>
        <Form getData={this.getCardFormData} />
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
  }
}

export default FormPage;
