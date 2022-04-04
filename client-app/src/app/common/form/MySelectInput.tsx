import { useField } from "formik";
import React from "react";
import { Form, Label, Select } from 'semantic-ui-react';

interface Props {
  placeholder: string;
  name: string;
  options: any;
  label?: string;
}

export default function MySelectInput(props: Props) {
  const [field, meta, helpers] = useField(props.name);
  return (
    <Form.Field error={meta.touched && !!meta.error}>
      <label>{props.label}</label>
      <Select
        clearable
        options={props.options}
        value={field.value || null}
        onChange={(e, d) => helpers.setValue(d.value)}
        onBlur={() => helpers.setTouched(true)}
        placeholder={props.placeholder}
        style={{ backgroundColor: '#343434', color: 'beige', borderStyle: 'none' }}
      />
      {meta.touched && meta.error ? (
        <Label basic style={{ backgroundColor: '#343434', color: 'red', borderStyle: 'none', fontSize: '18px' }}>{meta.error}</Label>
      ): null}
    </Form.Field>
  )
}