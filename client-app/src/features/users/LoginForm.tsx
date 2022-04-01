import { Card } from "@mui/material";
import { Form, Formik } from "formik";
import React from "react";
import { Button } from "semantic-ui-react";
import MyTextInput from "../../app/common/form/MyTextInput";

export default function LoginForm() {
  return (
    <>
      <br />
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={values => console.log(values)}
      >
      {({ handleSubmit }) => (
        <Form className="ui form" onSubmit={handleSubmit} autoComplete="off">
          <Card className="Container">
            <MyTextInput name="email" placeholder="Email" />
            <MyTextInput name="password" placeholder="Password" type="password" />
            <Button positive content="Login" type="submit" fluid />
           </Card>        
        </Form>
      )}   
      </Formik>    
    </>
  )
}