import React from 'react';
import { Form } from './form';

export default { title: 'Primitives/Form' };

export const form = () => (
  <Form.Form>
    <Form.Field label="Input" error="Error">
      <input />
    </Form.Field>
  </Form.Form>
);
