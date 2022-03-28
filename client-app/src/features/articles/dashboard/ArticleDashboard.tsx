import React, { useEffect } from "react";
import ArticleList from "./ArticleList";
import { Grid } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import ArticleFilters from "./ArticleFilters";

export default observer(function ArticleDashboard() {
  const { articleStore } = useStore();
  const { loadArticles, articleRegistry } = articleStore;
  
  useEffect(() => {
    if (articleRegistry.size <= 1) loadArticles();
  }, [articleRegistry.size, loadArticles]);

  if (articleStore.loadingInitial) return <LoadingComponent content="Loading app" />
  return (
    <Grid style={{ padding: '2rem' }}>
      <Grid.Column width="10">
        <ArticleList/>
      </Grid.Column>

      <Grid.Column width="6" style={{padding: '5rem'}}>
        <ArticleFilters />
      </Grid.Column>
    </Grid>
  );
});
