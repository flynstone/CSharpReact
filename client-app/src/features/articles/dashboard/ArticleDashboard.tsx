import React, { useEffect } from "react";
import ArticleList from "./ArticleList";
import { Grid } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import LoadingComponent from "../../../app/layout/LoadingComponent";

export default observer(function ArticleDashboard() {
  const { articleStore } = useStore();
  const { loadArticles, articleRegistry } = articleStore;
  
  useEffect(() => {
    if (articleRegistry.size <= 1) loadArticles();
  }, [articleRegistry.size, loadArticles]);

  if (articleStore.loadingInitial) return <LoadingComponent content="Loading app" />
  return (
    <Grid>
      <Grid.Column width="10">
        <ArticleList/>
      </Grid.Column>

      <Grid.Column width="6" className="pt-3">
        <h2>Article filters</h2>
      </Grid.Column>
    </Grid>
  );
});
