import React, { FunctionComponent } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import styled from 'styled-components';
import { Form, TextInput, Text, Button } from '../../primitives';

export interface NewTaskFormValues {
  name: string;
  description: string;
}

const NewTaskSchema = yup.object().shape({
  name: yup.string().required('Required').max(50, 'Too Long!'),
  description: yup.string().max(300, 'Too Long!'),
});

interface NewTaskFormProps {
  onSubmit?: (values: NewTaskFormValues) => void;
}

const BaseForm = styled(Form.Form)`
  background-color: #0a1944;
  padding: 20px;
  border-radius: 8px;
`;

export const NewTaskForm: FunctionComponent<NewTaskFormProps> = ({
  onSubmit,
}) => {
  const formik = useFormik<NewTaskFormValues>({
    initialValues: {
      name: '',
      description: '',
    },
    validationSchema: NewTaskSchema,
    onSubmit: (values) => onSubmit(values),
  });
  return (
    <BaseForm onSubmit={formik.handleSubmit}>
      <Text.Subtitle>New Task</Text.Subtitle>
      <Form.Field label="Name" error={formik.errors.name}>
        <TextInput.Input
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
      </Form.Field>
      <Form.Field label="Description" error={formik.errors.description}>
        <TextInput.Area
          name="description"
          value={formik.values.description}
          onChange={formik.handleChange}
        />
      </Form.Field>
      <Button type="submit">Add Task</Button>
    </BaseForm>
  );
};
