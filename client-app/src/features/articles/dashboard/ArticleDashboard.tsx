import React, { useEffect } from "react";
import ArticleList from "./ArticleList";
import ArticleDetails from "../details/ArticleDetails";
import ArticleForm from "../form/ArticleForm";
import { Grid } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import LoadingComponent from "../../../app/layout/LoadingComponent";

export default observer(function ArticleDashboard() {
  const { articleStore } = useStore();
  const { selectedArticle, editMode } = articleStore;
  
  useEffect(() => {
    articleStore.loadArticles();
  }, [articleStore]);

  if (articleStore.loadingInitial) return <LoadingComponent content="Loading app" />
  return (
    <Grid>
      <Grid.Column width="10">
        <ArticleList/>
      </Grid.Column>

      <Grid.Column width="6" className="pt-3">
        {/* Double ampersand => used to generate component on the right side of the symbole as long as the left side is not null */}
        {selectedArticle && !editMode && (
          <ArticleDetails />
        )}
        {editMode && (
          <ArticleForm />
        )}
      </Grid.Column>
    </Grid>
  );
});
