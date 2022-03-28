import { Card, CardActions, CardContent } from "@mui/material";
import React, { SyntheticEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import { Article } from "../../../app/models/article";
import { useStore } from "../../../app/stores/store";

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
  )
}