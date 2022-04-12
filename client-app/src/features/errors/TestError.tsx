import React, { useState } from "react";
import { Button, Header, Segment } from 'semantic-ui-react';
import axios from "axios";
import ValidationErrors from "./ValidationErrors";

export default function TestErrors() {
  const baseUrl = process.env.REACT_APP_API_URL;
  const [errors, setErrors] = useState(null);

  const handleNotFound = () => {
    axios.get(baseUrl + '/defective/not-found').catch(err => console.log(err.response));
  }

  const handleBadRequest = () => {
    axios.get(baseUrl + '/defective/bad-request').catch(err => console.log(err.response));
  }

  const handleServerError = () => {
    axios.get(baseUrl + '/defective/server-error').catch(err => console.log(err.response));
  }

  const handleUnauthorized = () => {
    axios.get(baseUrl + '/defective/unauthorized').catch(err => console.log(err.response));
  }

  const handleBadGuid = () => {
    axios.get(baseUrl + '/articles/notaguid').catch(err => console.log(err.response));
  }

  const handleValidationError = () => {
    axios.post(baseUrl + '/articles', {}).catch(err => setErrors(err));
  }

  return (
    <>
      <Header as='h1' content='Test Error Component' style={{ color: 'beige' }} />
      <Segment>
        <Button.Group widths='7'>
          <Button onClick={handleNotFound} content='Not Found' basic primary />
          <Button onClick={handleBadRequest} content='Bad Request' basic primary />
          <Button onClick={handleValidationError} content='Validation Error' basic primary />
          <Button onClick={handleServerError} content='Server Error' basic primary />
          <Button onClick={handleUnauthorized} content='Unauthorized' basic primary />
          <Button onClick={handleBadGuid} content='Bad Guid' basic primary />
        </Button.Group>
      </Segment>
      {errors && 
        <ValidationErrors errors={errors} />
      }
    </>
  )
}