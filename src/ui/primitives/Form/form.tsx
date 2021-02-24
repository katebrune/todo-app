import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const BaseForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FormFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
`;

const FormFieldLabel = styled.p`
  font-size: 1em;
  margin-bottom: 2px;
`;

const FormFieldError = styled.p`
  font-size: 0.8em;
  margin-top: 2px;
  color: #ffd949;
`;

interface FormInputProps {
  label?: string;
  error?: string;
}
const FormField: FunctionComponent<FormInputProps> = ({
  label,
  error,
  children,
}) => (
  <FormFieldWrapper>
    <FormFieldLabel>{label}</FormFieldLabel>
    {children}
    <FormFieldError>{error}</FormFieldError>
  </FormFieldWrapper>
);

export const Form = {
  Form: BaseForm,
  Field: FormField,
};
