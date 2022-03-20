import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Article } from "../../../app/models/article";

interface Props {
  article: Article;
  cancelSelectArticle: () => void;
  openForm: (id: string) => void;
}

export default function ArticleDetails({article, cancelSelectArticle, openForm}: Props) {
  return (
    <>
      <Card>
        <Card.Header>{article.title}</Card.Header>
        
        <Card.Body>

          {article.body}
          <br /><br/>

          <div className="container">
            <Button onClick={() => openForm(article.id)} type="submit" variant="outline-primary">Edit</Button>{' '}
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