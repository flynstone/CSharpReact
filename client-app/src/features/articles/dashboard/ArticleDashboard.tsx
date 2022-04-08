import React, { useEffect, useState } from "react";
import ArticleList from "./ArticleList";
import { Grid, Loader } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import ArticleFilters from "./ArticleFilters";
import { PagingParams } from "../../../app/models/pagination";
import InfiniteScroll from 'react-infinite-scroller';

export default observer(function ArticleDashboard() {
  const { articleStore } = useStore();
  const { loadArticles, articleRegistry, setPagingParams, pagination } = articleStore;
  const [loadingNext, setLoadingNext] = useState(false);

  const handleGetNext = () => {
    setLoadingNext(true);
    setPagingParams(new PagingParams(pagination!.currentPage + 1));
    loadArticles().then(() => setLoadingNext(false));
  }
  
  useEffect(() => {
    if (articleRegistry.size <= 1) loadArticles();
  }, [articleRegistry.size, loadArticles]);

  if (articleStore.loadingInitial && !loadingNext) return <LoadingComponent content="Loading app" />
  return (
    <Grid style={{ padding: '2rem' }}>
      <Grid.Column width="10">
        <InfiniteScroll
          pageStart={0}
          loadMore={handleGetNext}
          hasMore={!loadingNext && !!pagination && pagination.currentPage < pagination.totalPages}
          initialLoad={false}
        >
          <ArticleList />
        </InfiniteScroll>
       
        
      </Grid.Column>

      <Grid.Column width="6" style={{padding: '5rem'}}>
        <ArticleFilters />
      </Grid.Column>
      <Grid.Column width={10}>
        <Loader active={loadingNext} />
      </Grid.Column>
    </Grid>
  );
});
