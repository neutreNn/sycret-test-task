import { Typography as MuiTypography} from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import CustomButton from './CustomButton';

const PriceContainer = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-right: 50px;
`;

const Typography = styled(MuiTypography)`
  font-size: 18px;
  padding-bottom: 10px;
`;

const PriceWrapper = ({ select, onBuyClick }) => {
  return (
    <PriceContainer>
      <Typography>Цена - <b>{Math.round(select.REC_SUM)} р.</b></Typography>
      <CustomButton label="Купить" onClick={onBuyClick} />
    </PriceContainer>
  );
};

export default PriceWrapper;
