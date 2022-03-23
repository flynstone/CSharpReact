import React from "react";
import ArticleList from "./ArticleList";
import ArticleDetails from "../details/ArticleDetails";
import ArticleForm from "../form/ArticleForm";
import { Grid } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";

export default observer(function ArticleDashboard() {
  const { articleStore } = useStore();
  const { selectedArticle, editMode } = articleStore;
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
