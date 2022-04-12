import { Card } from "@mui/material";
import { ErrorMessage, Form, Formik } from "formik";
import { observer } from "mobx-react-lite";
import React from "react";
import { Button, CardHeader, FormField, Label } from 'semantic-ui-react';
import MyTextInput from "../../app/common/form/MyTextInput";
import { useStore } from "../../app/stores/store";

export default observer(function LoginForm() {
  const { userStore } = useStore();
  return (
    <div className="Container">
    <Formik
      initialValues={{ email: '', password: '', error: null }}
      onSubmit={(values, { setErrors }) => userStore.login(values).catch(error => setErrors({ error: error.response.data }))}
    >
      {({ handleSubmit, isSubmitting, errors }) => ( 
        <Form className="ui form" onSubmit={handleSubmit} autoComplete='off'>
          <Card className="Container">
            <CardHeader ><h2>Login</h2></CardHeader>
            <FormField className="py-2 px-3" >
              <MyTextInput name="email" placeholder="Email" />        
            </FormField>
            <FormField className="py-2 px-3">
              <MyTextInput name="password" placeholder="Password" type="password" />
            </FormField>     
            <ErrorMessage   
              name='error' render={() => <Label basic style={{ marginBottom: 10, marginTop: 10, backgroundColor: '#343434', color: 'red', borderStyle: 'none', fontSize: '18px' }} content={errors.error} />}
            />  
            <Button loading={isSubmitting} positive content="Login" type="submit" fluid /> 
          </Card>
          
      </Form>
    )}   
      </Formik>  
      </div>  
  )
})