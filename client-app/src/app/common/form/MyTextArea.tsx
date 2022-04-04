import { useField } from "formik";
import React from "react";
import { Form, Label } from 'semantic-ui-react';

interface Props {
  placeholder: string;
  name: string;
  rows: number;
  label?: string;
}

export default function MyTextArea(props: Props) {
  const [field, meta] = useField(props.name);
  return (
    <Form.Field error={meta.touched && !!meta.error}>
      <label>{props.label}</label>
      <textarea {...field} {...props} style={{backgroundColor: '#343434', color: 'beige', borderStyle: 'none', width: '100%'}} />
      {meta.touched && meta.error ? (
        <Label basic style={{ backgroundColor: '#343434', color: 'red', borderStyle: 'none', fontSize: '18px' }}>{meta.error}</Label>
      ): null}
    </Form.Field>
  )
}