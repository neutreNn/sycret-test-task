import React from 'react';
import styled from 'styled-components';
import { MenuItem, Select as MuiSelect} from '@mui/material';

const Select = styled(MuiSelect)`
  background-color: #ffffff;
  width: 100%; 
  max-width: 400px; 
  height: 40px;
  display: flex;
  align-items: center;
  margin-right: 10px;

  .MuiOutlinedInput-notchedOutline {
    border-color: rgb(236, 177, 252);
    border-width: 2px;
  }

  &:hover .MuiOutlinedInput-notchedOutline {
    border-color: rgb(236, 177, 252);
  }

  &.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: rgb(236, 177, 252);
  }
`;

const CustomSelect = ({ select, handleChange, data }) => {
  return (
    <Select
        id="demo-simple-select"
        placeholder="Выберите товар"
        value={select ? select.NAME : ''}
        onChange={handleChange}
        displayEmpty
        renderValue={(selected) => {
          return selected ? selected : <span style={{ color: 'gray' }}>Выберите товар</span>;
        }}
      >
        {data.map((item) => (
          <MenuItem key={item.ID} value={item.NAME}>
            {item.NAME}
          </MenuItem>
        ))}
      </Select>
  );
};

export default CustomSelect;
