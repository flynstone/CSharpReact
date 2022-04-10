import { ErrorMessage, Form, Formik } from "formik";
import { observer } from "mobx-react-lite";
import React from "react";
import { Button, CardHeader, FormField, Label } from 'semantic-ui-react';
import MyTextInput from "../../app/common/form/MyTextInput";
import { useStore } from "../../app/stores/store";
import * as Yup from 'yup';
import { Card } from "@mui/material";

export default observer(function RegisterForm() {
  const { userStore } = useStore();
  return (
    <Formik
      initialValues={{ displayName: '', username: '', email: '', password: '', error: null }}
      onSubmit={(values, { setErrors }) => userStore.register(values).catch(error => setErrors({ error }))}
      validationSchema={Yup.object({
        displayName: Yup.string().required(),
        username: Yup.string().required(),
        email: Yup.string().required().email(),
        password: Yup.string().required()
      })}
    >
      {({ handleSubmit, isSubmitting, errors, isValid, dirty }) => ( 
        <Form className="ui form" onSubmit={handleSubmit} autoComplete='off'>    
          <Card className="Container" style={{backgroundColor: '#343434', width: '100%'}}>
          <CardHeader><h2 className="py-3" style={{color: 'white'}}>Register</h2></CardHeader>
            <FormField className="py-2 px-3" >
              <MyTextInput name="displayName" placeholder="Display Name" />        
            </FormField>
            <FormField className="py-2 px-3" >
              <MyTextInput name="username" placeholder="Username" />        
            </FormField>
            <FormField className="py-2 px-3" >
              <MyTextInput name="email" placeholder="Email" />        
            </FormField>
            <FormField className="py-2 px-3">
              <MyTextInput name="password" placeholder="Password" type="password" />
            </FormField>     
            <ErrorMessage   
              name='error' render={() => <Label basic
                style={{ marginBottom: 10, marginTop: 10, backgroundColor: '#343434', color: 'red', borderStyle: 'none', fontSize: '18px' }}
                content={errors.error}
              />}
            />  
            <Button disabled={!isValid || !dirty || isSubmitting}
              loading={isSubmitting} positive content="Register" type="submit" fluid /> 
          </Card>
          
      </Form>
    )}   
    </Formik>    
  )
})