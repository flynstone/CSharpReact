import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";


export default function ArticleDetails() {
  const { articleStore } = useStore();
  const { selectedArticle: article, openForm, cancelSelectedArticle } = articleStore;

  if (!article) return <LoadingComponent />;

  return (
    <>
      <br/>
      <Card>
        <Card.Header>{article.title}</Card.Header>
        
        <Card.Body>

          {article.body}
          <br /><br/>

          <div className="container">
            <Button onClick={() => openForm(article.id)} type="submit" variant="outline-primary">Edit</Button>{' '}
            <Button onClick={cancelSelectedArticle} type="button" variant="outline-warning">Cancel</Button>
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