import { Card } from "@mui/material";
import { Form, Formik } from "formik";
import { observer } from "mobx-react-lite";
import React from "react";
import { Button } from "semantic-ui-react";
import MyTextInput from "../../app/common/form/MyTextInput";
import { useStore } from "../../app/stores/store";

export default observer(function LoginForm() {
  const { userStore } = useStore();
  return (
    <>
      <br />
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={values => userStore.login(values)}
      >
      {({ handleSubmit, isSubmitting }) => (
        <Form className="ui form" onSubmit={handleSubmit} autoComplete="off">
          <Card className="Container">
            <MyTextInput name="email" placeholder="Email" />
            <MyTextInput name="password" placeholder="Password" type="password" />
            <Button loading={isSubmitting} positive content="Login" type="submit" fluid />
           </Card>        
        </Form>
      )}   
      </Formik>    
    </>
  )
})