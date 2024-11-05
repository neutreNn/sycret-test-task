import React, { useState } from 'react';
import styled from 'styled-components';
import InputMask from 'react-input-mask';
import { Box as MuiBox, TextField as MuiTextField, Typography as MuiTypography } from '@mui/material';
import { useFormContext } from 'react-hook-form';

const TextField = styled(MuiTextField)`
  & .MuiOutlinedInput-root {
    height: 40px;
    &.Mui-focused fieldset {
      border-color: #ecb1fc;
    }
  }

  & input::placeholder {
    color: gray;
    opacity: 1;
  }
`;

const Typography = styled(MuiTypography)`
  padding-left: 10px;
  color: ${({ isFocused }) => (isFocused ? '#ecb1fc' : 'inherit')};
`;

const Box = styled(MuiBox)`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const StyledTextarea = styled.textarea`
  height: 85px;
  resize: none;
  overflow: auto;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px 14px;
  font-size: 18px; // Устанавливаем размер текста

  &:focus {
    border-color: #ecb1fc;
    border-width: 2px;
    outline: none;
  }

  &::placeholder {
    color: gray;
    font-size: 17px;
  }
`;


const HelperText = styled.span`
  font-weight: 600;
  font-size: 15px;
`;

const CustomTextField = ({ name, label, requiredText, variant = "outlined", type = "text" }) => {
  const { register, formState: { errors }, trigger } = useFormContext();
  const [isFocused, setIsFocused] = useState(false);

  const validationRules = {
    required: requiredText,
    ...(type === 'email' && {
      pattern: {
        value: /^\S+@\S+\.\S+$/i,
        message: 'Введен некорректный адрес электронной почты'
      }
    }),
    ...(type === 'phone' && {
      pattern: {
        value: /^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/,
        message: 'Введен некорректный номер телефона'
      }
    })
  };

  const handleBlur = async () => {
    await trigger(name);
    setIsFocused(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  let inputField;

  if (type === 'phone') {
    inputField = (
      <InputMask
        mask="+7 (999) 999-99-99"
        {...register(name, validationRules)}
        onBlur={handleBlur}
        onFocus={handleFocus}
      >
        {(inputProps) => (
          <TextField
            {...inputProps}
            fullWidth
            placeholder="+7 (___) ___-__-__"
            variant={variant}
            error={!!errors[name]}
            helperText={errors[name] ? <HelperText>{errors[name].message}</HelperText> : ''}
          />
        )}
      </InputMask>
    );
  } else if (type === 'message') {
    inputField = (
      <StyledTextarea
        placeholder="Введите..."
        {...register(name, validationRules)}
        onBlur={handleBlur}
        onFocus={handleFocus}
        error={!!errors[name]}
      />
    );
  } else {
    inputField = (
      <TextField
        fullWidth
        variant={variant}
        placeholder="Введите..."
        {...register(name, validationRules)}
        error={!!errors[name]}
        helperText={errors[name] ? <HelperText>{errors[name].message}</HelperText> : ''}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
    );
  }

  return (
    <Box>
      <Typography isFocused={isFocused}>
        {label}
        {requiredText && ' *'}
      </Typography>
      {inputField}
    </Box>
  );
};

export default CustomTextField;
