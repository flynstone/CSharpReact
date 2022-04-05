import { Card, CardActions, CardContent } from '@mui/material';
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
          </CardActions>
        </div>
      </Card>
      <br/>
    </>
  );
}