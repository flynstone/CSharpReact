import React from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

export default function ArticleForm() {
  return (
    <>
      <section>
        <Form className="article__form">
          <Form.Group className="mb-3 px-3">
            <Form.Control id="title" placeholder="Title"></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3 px-3">
            <Form.Control type="textarea" placeholder="Input content here" />
          </Form.Group>

          <Form.Group className="mb-3 px-3">
            <Button type="submit" variant="outline-primary">Submit</Button>{' '}
            <Button type="button" variant="outline-danger">Cancel</Button>
          </Form.Group>
        </Form>
      </section>
    </>
  )
}