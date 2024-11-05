import React, { useState } from 'react';
import styled from 'styled-components';
import CustomSelect from './CustomSelect';
import PriceWrapper from './PriceWrapper';
import CustomButton from './CustomButton';
import FormCard from './FormCard';
import { useCallApiMutation } from '../redux/apiSlice';
import { useNavigate } from 'react-router-dom';

const CertificateContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  width: 100%;
  height: 700px;
  max-height: 100vh;
  padding: 10px;
  box-sizing: border-box;
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  overflow-y: auto;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  max-width: 400px;
  margin-top: auto;
  margin-right: 10px;
  gap: 20px;
`;

function ChooseCertificate({ select, handleChange, data }) {
  const [callApi] = useCallApiMutation();
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  const handleBuyClick = () => {
    setShowForm(true);
  };

  const handleBackClick = () => {
    setShowForm(false);
  };

  const handleSubmit = (data) => {

    let params = {
      Id: select.ID,
      TableName: select.TABLENAME,
      PrimaryKey: `${select.TABLENAME}_${select.ID}`,
      Price: select.PRICE,
      Summa: select.SUMMA,
      PaymentTypeId: 2,
      UseDelivery: 0,
      DeliveryAddress: 0,
      IsGift: 0,
      PName: '',
      PPhone: '',
      ...data,
    }

    callApi({
      MethodName: 'OSSale',
      params,
    })
      .unwrap()
      .then(() => {
        console.log('Оплата прошла успешно!');
        navigate('/LoadingPayment');
      })
      .catch((err) => {
        console.error('Ошибка запроса:', err);
        navigate('/error');
      });
  };

  return (
    <CertificateContainer>
      {!showForm ? (
        <>
          <CustomSelect select={select} handleChange={handleChange} data={data} />
          {select && <PriceWrapper select={select} onBuyClick={handleBuyClick} />}
        </>
      ) : (
        <>
          <FormCard handleSubmit={handleSubmit} price={select.PRICE} />
          <ButtonContainer>
            <CustomButton label="Назад" onClick={handleBackClick} />
            <CustomButton label="Перейти к оплате" formName="certificate-card"/>
          </ButtonContainer>
        </>
      )}
    </CertificateContainer>
  );
}

export default ChooseCertificate;
