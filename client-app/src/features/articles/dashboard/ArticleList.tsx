import React from 'react';
import { Article } from '../../../app/models/article';
import { Button, Segment } from 'semantic-ui-react';
import { Card } from 'react-bootstrap';


interface Props {
  articles: Article[];
  selectArticle: (id: string) => void;
  deleteArticle: (id: string) => void;
  submitting: boolean;
}

export default function ArticleList({articles, selectArticle, deleteArticle, submitting }: Props) {
  return (
    <>
      <br />
      <Segment>
          {articles.map((article) => (
            <Card key={article.id}>
              <Card.Header>{article.title}</Card.Header>
              <Card.Body>
                {article.body}
                <br />
                <Button basic color='yellow' onClick={() => selectArticle(article.id)}>Details</Button>
                <Button basic color='red' loading={submitting} onClick={() => deleteArticle(article.id)}>Delete</Button>
              </Card.Body>
                <Card.Footer>{article.dateCreated}</Card.Footer>
            </Card>
          ))}
      </Segment>
    </>
  )
}