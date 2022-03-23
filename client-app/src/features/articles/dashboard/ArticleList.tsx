import React, { SyntheticEvent, useState } from 'react';
import { Article } from '../../../app/models/article';
import { Button, Segment } from 'semantic-ui-react';
import { Card } from 'react-bootstrap';
import { useStore } from '../../../app/stores/store';


interface Props {
  articles: Article[];
  deleteArticle: (id: string) => void;
  submitting: boolean;
}

export default function ArticleList({ articles, deleteArticle, submitting }: Props) {
  const [target, setTarget] = useState('');

  const handleArticleDelete = (e: SyntheticEvent<HTMLButtonElement>, id: string) => {
    setTarget(e.currentTarget.name);
    deleteArticle(id);
  } 

  const { articleStore } = useStore();

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
                <Button basic color='yellow' onClick={() => articleStore.selectArticle(article.id)}>Details</Button>
                <Button
                  basic
                  name={article.id}
                  color='red'
                  loading={submitting && target === article.id}
                  onClick={(e) => handleArticleDelete(e, article.id)}
                >Delete</Button>
              </Card.Body>
                <Card.Footer>{article.dateCreated}</Card.Footer>
            </Card>
          ))}
      </Segment>
    </>
  )
}