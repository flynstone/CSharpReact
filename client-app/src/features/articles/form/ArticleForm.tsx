import { observer } from 'mobx-react-lite';
import React, { ChangeEvent, useState } from 'react';
import { Button, Form, Segment,  } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';


export default observer(function ArticleForm() {
  const { articleStore } = useStore();
  const { selectedArticle, createArticle, updateArticle, loading } = articleStore;

  const initialState = selectedArticle ?? {
    id: '',
    title: '',
    body: '',
    dateCreated: ''
  }

  const [article, setArticle] = useState(initialState);

  const handleSubmit = () => {
    article.id ? updateArticle(article) : createArticle(article);
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setArticle({ ...article, [name]: value });
  }

  
  return (
    <>
      <br />
      <Segment>
        <Form onSubmit={handleSubmit} className='article__form' autoComplete='off'>
          <Form.Group className="mb-3 px-3">
            <Form.Input value={article.title} name="title" placeholder="Title" onChange={handleInputChange} />
          </Form.Group>
          <Form.Group className="mb-3 px-3">
            <Form.TextArea value={article.body} name="body" type="textarea" placeholder="Input content here" onChange={handleInputChange} />
          </Form.Group>
          <Form.Input value={article.dateCreated} name="dateCreated" onChange={handleInputChange} />

          <Form.Group className="mb-3 px-3">
            <Button basic color='blue' loading={loading} type="submit" floated="right">Submit</Button>{' '}
            <Button basic color='orange' type="button" floated="right">Cancel</Button>
          </Form.Group>
        </Form>
      </Segment>
    </>
  )
});