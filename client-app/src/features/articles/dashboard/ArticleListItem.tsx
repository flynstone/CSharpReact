import { Card, CardActions, CardContent } from '@mui/material';
import React, { SyntheticEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import { Article } from "../../../app/models/article";
import { useStore } from "../../../app/stores/store";
import ArticleListItemContributor from './ArticleListItemContributor';

interface Props {
  article: Article
}

export default function ArticleListItem({ article }: Props) {
  const { articleStore } = useStore();
  const { deleteArticle, loading } = articleStore;
  
  const [target, setTarget] = useState('');

  const handleArticleDelete = (e: SyntheticEvent<HTMLButtonElement>, id: string) => {
    setTarget(e.currentTarget.name);
    deleteArticle(id);
  }
  
  return (
    <>
      <Card key={article.id} style={{ paddingBottom: "2rem" }}>
        <div className="card-header">
          <h2 className='pt-3 px-3'>{article.title}</h2>
          <small className='px-3'>{article.dateCreated}</small>
        </div>

        <CardContent>
          <div className="Container">{article.body}</div>
        </CardContent>
        <div className="Row px-5">
          <ArticleListItemContributor contributors={article.contributors!} />
          <CardActions>
            <Button
              as={Link}
              to={`/articles/${article.id}`}
              basic
              color="yellow"
            >
              Details
            </Button>
            <Button
              basic
              name={article.id}
              color="red"
              loading={loading && target === article.id}
              onClick={(e) => handleArticleDelete(e, article.id)}
            >
              Delete
            </Button>
          </CardActions>
        </div>
      </Card>
      <br/>
    </>
  );
}