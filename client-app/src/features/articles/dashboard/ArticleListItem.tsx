import { Card, CardActions, CardContent } from '@mui/material';
import { format } from 'date-fns';
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import { Article } from "../../../app/models/article";
import ArticleListItemContributor from './ArticleListItemContributor';

interface Props {
  article: Article
}

export default function ArticleListItem({ article }: Props) {

  return (
    <>
      <Card key={article.id} style={{ paddingBottom: "2rem" }}>
        <div className="card-header">
          <h3 className='pt-3 px-3'>{article.title}</h3>
          <small className='px-3'>{article.createdAt}</small>
        </div>

        <CardContent>
          <div className="Container">{article.content}</div>
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
          </CardActions>
        </div>
      </Card>
      <br/>
    </>
  );
}