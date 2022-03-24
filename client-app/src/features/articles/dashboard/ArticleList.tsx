import React, { SyntheticEvent, useState } from 'react';
import { Button } from 'semantic-ui-react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';
import { CardActions } from '@mui/material';
import { Link } from 'react-router-dom';


export default observer(function ArticleList() {
  const { articleStore } = useStore();
  const { deleteArticle, articlesByDate, loading } = articleStore;
  
  const [target, setTarget] = useState('');

  const handleArticleDelete = (e: SyntheticEvent<HTMLButtonElement>, id: string) => {
    setTarget(e.currentTarget.name);
    deleteArticle(id);
  }

  return (
    <>
      <br />
        {articlesByDate.map((article) => (
          <Card key={article.id}>
            <div className='card-header'>
              <h3>{article.title}</h3>
              <small>{article.dateCreated}</small>
            </div>

            <CardContent>
              {article.body}
              <br />        
            </CardContent>
            <CardActions>
              <Button as={Link} to={`/articles/${article.id}`} basic color='yellow'>Details</Button>
              <Button
                basic
                name={article.id}
                color='red'
                loading={loading && target === article.id}
                onClick={(e) => handleArticleDelete(e, article.id)}
              >Delete</Button>
            </CardActions>           
          </Card>
        ))}
    </>
  )
});