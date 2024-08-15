import React from 'react';
import { TextField, TextFieldProps, SxProps } from '@mui/material';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

interface FormTextFieldProps extends Omit<TextFieldProps, 'error'> {
  label: string;
  registration: UseFormRegisterReturn;
  error?: FieldError;
  sx?: SxProps;
}

export const FormTextField: React.FC<FormTextFieldProps> = ({ label, registration, error, sx, ...restProps }) => {
  return (
    <TextField
      fullWidth
      label={label}
      {...registration}
      error={!!error}
      helperText={error ? error.message : ''}
      variant="outlined"
      margin="normal"
      sx={{
        input: { color: '#1976d2' },
        ...sx,
      }}
      {...restProps}
    />
  );
};
