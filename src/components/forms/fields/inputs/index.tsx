import React, { ChangeEvent, ReactElement, InputHTMLAttributes } from 'react';
import { useFormikContext, useField } from 'formik';
import TextField from '@mui/material/TextField';

interface IFormikMuiInput extends InputHTMLAttributes<HTMLInputElement> {
  label?: string | ReactElement;
}

function FormikTextField(props: IFormikMuiInput): ReactElement {
  const { label = '', name = '', type = 'text', disabled = false, onChange } = props;
  const [field, meta] = useField(name);
  const form = useFormikContext();

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    form.setFieldValue(name, e.target.value);
    if (onChange) {
      onChange(e);
    }
  };
  const inputValue = field.value || '';
  const evalProps = {
    value: inputValue,
    id: name,
    disabled,
    type,
    onChange: handleChange
  };
  const isError = !!(meta.error && meta.touched);

  return (
    <TextField
      error={isError}
      label={label}
      helperText={isError ? meta.error : null}
      {...evalProps}
    />
  );
}

export default FormikTextField;
