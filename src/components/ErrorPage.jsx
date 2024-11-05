import { Typography as MuiTypography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

const Typography = styled(MuiTypography)`
  color: #fff;
  padding-bottom: 50px;
`;

const ReloadButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ErrorPage = ({ message = 'Произошла ошибка! Пожалуйста, попробуйте снова.' }) => {
  const navigate = useNavigate();
  const handleReload = () => {
    navigate('/');
  };

  return (
    <ErrorContainer>
      <Typography>{message}</Typography>
      <ReloadButton onClick={handleReload}>Перезагрузить страницу</ReloadButton>
    </ErrorContainer>
  );
};

export default ErrorPage;
