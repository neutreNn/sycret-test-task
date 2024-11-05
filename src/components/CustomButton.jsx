import React from 'react';
import { Button as MuiButton } from '@mui/material';
import styled from 'styled-components';

const Button = styled(MuiButton)`
  && {
    width: 150px;
    height: 45px;
    color: rgb(236, 177, 252);
    background-color: #ffffff;
    font-weight: 600;
    filter: brightness(0.95);
    border-radius: 10px;
    text-transform: none;
    border: 2px solid rgb(236, 177, 252);
    transition: background-color 0.3s, color 0.3s;

    &:hover {
      background-color: rgb(236, 177, 252);
      color: #ffffff;
    }
  }
`;

const CustomButton = ({ label, onClick, formName }) => {
  return (
    <Button onClick={onClick} form={formName} name={formName} type={formName ? 'submit' : undefined}>
      {label}
    </Button>
  );
};

export default CustomButton;
