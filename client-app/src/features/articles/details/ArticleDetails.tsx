import React, { useEffect } from "react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Grid } from "semantic-ui-react";
import ArticleDetailedHeader from "./ArticleDetailedHeader";
import ArticleDetailedInfo from "./ArticleDetailedInfo";
import ArticleDetailedComment from "./ArticleDetailedComment";
import ArticleDetailedSidebar from "./ArticleDetailedSidebar";
import { Card } from '@mui/material';


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
      <Grid className="pt-3">
        <Grid.Column width={10}>
          <Card>
            <ArticleDetailedHeader article={article} />
            <ArticleDetailedInfo article={article} />
            <ArticleDetailedComment />
          </Card>         
        </Grid.Column>
        <Grid.Column width={6}>
          <Card>
            <ArticleDetailedSidebar />
          </Card>   
        </Grid.Column>
      </Grid>

      {/* <Card style={{paddingLeft: '2rem'}}>
        <CardHeader />{article.title}
        
        <CardContent>

          {article.body}
          <br /><br />

          <div className="container">
            <Button as={Link} to={`/manage/${article.id}`} basic color="blue">Edit</Button>{' '}
            <Button as={Link} to={`/articles`} basic color="grey">Cancel</Button>
          </div>
         
        </CardContent>

        <CardActions>
          <small className="text-muted">{article.dateCreated}</small>
          <i className="fa fa-heart"></i>
        </CardActions>
      </Card> */}
    </>
  );
});