import { useField } from "formik";
import React from "react";
import { Form, Label } from "semantic-ui-react";

interface Props {
  placeholder: string;
  name: string;
  type?: string;
  label?: string;
}

export default function MyPasswordInput(props: Props) {
  const [field, meta] = useField(props.name);
  return (
    <Form.Field error={meta.touched && !!meta.error}>
      <label>{props.label}</label>
      <input {...field} {...props} type='password' style={{backgroundColor: '#343434', color: 'beige', borderStyle: 'none'}} />
      {meta.touched && meta.error ? (
        <Label basic style={{ backgroundColor: '#343434', color: 'red', borderStyle: 'none', fontSize: '18px' }}>{meta.error}</Label>
      ): null}
    </Form.Field>
  )
}