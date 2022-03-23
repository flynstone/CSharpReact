import React, { SyntheticEvent, useState } from 'react';
import { Button, Segment } from 'semantic-ui-react';
import { Card } from 'react-bootstrap';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';


export default observer(function ArticleList() {
  const { articleStore } = useStore();
  const { deleteArticle, articles, loading } = articleStore;
  
  const [target, setTarget] = useState('');

  const handleArticleDelete = (e: SyntheticEvent<HTMLButtonElement>, id: string) => {
    setTarget(e.currentTarget.name);
    deleteArticle(id);
  }

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
                loading={loading && target === article.id}
                onClick={(e) => handleArticleDelete(e, article.id)}
              >Delete</Button>
            </Card.Body>
            <Card.Footer>{article.dateCreated}</Card.Footer>
          </Card>
        ))}
      </Segment>
    </>
  )
});