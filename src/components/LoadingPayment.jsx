import React from 'react';
import styled from 'styled-components';
import { Typography as MuiTypography } from '@mui/material';

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

const Typography = styled(MuiTypography)`
  font-size: 24px;
  color: #fff;
  margin-top: 20px;
`;

const BackgroundSquare = styled.div`
  width: 120px;
  height: 60px;
  background-color: rgb(236, 177, 252, 0.8); /* Цвет фона */
  border-radius: 12px; /* Скругление углов фона */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px; /* Отступ между фоном и текстом */
`;

const LoadingPayment = () => {
  return (
    <LoadingContainer>
      <BackgroundSquare>
        <Typography variant="h6">Оплата...</Typography>
      </BackgroundSquare>
    </LoadingContainer>
  );
};

export default LoadingPayment;
