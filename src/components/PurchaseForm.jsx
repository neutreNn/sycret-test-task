import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import StyledTextField from './StyledTextField';

const PurchaseForm = ({ onSubmit }) => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
        <form 
          onSubmit={methods.handleSubmit(onSubmit)}
          id="certificate-card"
					name="certificate-card"
        >
          <StyledTextField
            name="ClientName"
            label="ФИО"
            requiredText="Имя должно быть заполнено"
          />
          <StyledTextField
            name="Phone"
            type="phone"
            label="Телефон"
            requiredText="Телефон должен быть заполнен"
          />
          <StyledTextField
            name="MsgText"
            type="message"
            label="Сообщение"
          />
          <StyledTextField
            name="Email"
            type="email"
            label="Почта"
            requiredText="Почта должна быть заполнена"
          />
        </form>
    </FormProvider>
  );
};

export default PurchaseForm;
