import React, { ChangeEvent, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Article } from '../../../app/models/article';

interface Props {
  article: Article | undefined;
  closeForm: () => void;
  createOrEdit: (article: Article) => void;
  submitting: boolean;
}

export default function ArticleForm({ article: selectedArticle, closeForm, createOrEdit, submitting }: Props) {

  const initialState = selectedArticle ?? {
    id: '',
    title: '',
    body: '',
    dateCreated: ''
  }

  const [article, setArticle] = useState(initialState);

  const handleSubmit = () => {
    createOrEdit(article);
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setArticle({ ...article, [name]: value });
  }
  
  return (
    <>
      <section>
        <Form onSubmit={handleSubmit} className='article__form' autoComplete='off'>
          <Form.Group className="mb-3 px-3">
            <Form.Control value={article.title} name="title" placeholder="Title" onChange={handleInputChange}></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3 px-3">
            <Form.Control value={article.body} name="body" type="textarea" placeholder="Input content here" onChange={handleInputChange} />
          </Form.Group>

          <Form.Group className="mb-3 px-3">
            <Button type="submit" variant="outline-primary">Submit</Button>{' '}
            <Button onClick={closeForm} type="button" variant="outline-danger">Cancel</Button>
          </Form.Group>
        </Form>
      </section>
    </>
  )
}