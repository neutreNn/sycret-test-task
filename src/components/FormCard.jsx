import React from 'react';
import styled from 'styled-components';
import { Typography as MuiTypography} from '@mui/material';
import PurchaseForm from './PurchaseForm';

const Typography = styled(MuiTypography)`
  text-align: center;
  font-size: 18px !important;
`;

const FormCardContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  margin-right: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: stretch; /* Поля растянутся на всю ширину карточки */
`;

const Link = styled.a`
  color: blue;
  text-decoration: underline;
  font-size: 16px;
  text-align: center;
  margin-top: 10px;
  display: block;
  cursor: pointer;
`;

const FormCard = ({ handleSubmit, price }) => {
  return (
    <FormCardContainer>
        <Typography>Сертификат на {Math.round(price)} руб</Typography>
        <PurchaseForm onSubmit={handleSubmit} />
        <Link href="https://sycret.ru" target="_blank" rel="noopener noreferrer">
            Правила
        </Link>
    </FormCardContainer>
  );
};

export default FormCard;
