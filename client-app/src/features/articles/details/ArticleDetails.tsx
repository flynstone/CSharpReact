import { CardActions, CardContent, CardHeader } from "@mui/material";
import React, { useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from '@mui/material/Card';
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";


export default observer(function ArticleDetails() {
  const { articleStore } = useStore();
  const { selectedArticle: article, loadArticle, loadingInitial } = articleStore;
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) loadArticle(id);
  }, [id, loadArticle]);

  if (loadingInitial || !article) return <LoadingComponent />;

  return (
    <>
      <br />
      <Card>
        <CardHeader>{article.title}</CardHeader>
        
        <CardContent>

          {article.body}
          <br /><br />

          <div className="container">
            <Button type="submit" variant="outline-primary">Edit</Button>{' '}
            <Button type="button" variant="outline-warning">Cancel</Button>
          </div>
         
        </CardContent>

        <CardActions>
          <small className="text-muted">{article.dateCreated}</small>
          <i className="fa fa-heart"></i>
        </CardActions>
      </Card>
    </>
  )
});