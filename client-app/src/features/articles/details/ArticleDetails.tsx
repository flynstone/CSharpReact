import React from "react";
import { Button, Card } from 'react-bootstrap';
import { Article } from "../../../app/models/article";

interface Props {
  article: Article;
  cancelSelectArticle: () => void;
}

export default function ArticleDetails({article, cancelSelectArticle}: Props) {
  return (
    <>
      <Card>
        <Card.Header>{article.title}</Card.Header>
        
        <Card.Body>

          {article.body}
          <br /><br/>

          <div className="container">
            <Button type="submit" variant="outline-primary">Edit</Button>{' '}
            <Button onClick={cancelSelectArticle} type="button" variant="outline-warning">Cancel</Button>
          </div>
         
        </Card.Body>

        <Card.Footer>
          <small className="text-muted">{article.dateCreated}</small>
          <i className="fa fa-heart"></i>
        </Card.Footer>
      </Card>
    </>
  )
}