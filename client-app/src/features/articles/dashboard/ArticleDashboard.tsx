import React from "react";
import { Article } from "../../../app/models/article";
import ArticleList from "./ArticleList";
import ArticleDetails from "../details/ArticleDetails";
import ArticleForm from "../form/ArticleForm";
import { Grid } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";

interface Props {
  articles: Article[];
  createOrEdit: (article: Article) => void;
  submitting: boolean;
  deleteArticle: (id: string) => void;
}

export default observer(function ArticleDashboard({ articles, createOrEdit, submitting, deleteArticle }: Props) {
  const { articleStore } = useStore();
  const { selectedArticle, editMode } = articleStore;
  return (
    <Grid>
      <Grid.Column width="10">
        <ArticleList
          articles={articles}
          deleteArticle={deleteArticle}
          submitting={submitting}
        />
      </Grid.Column>

      <Grid.Column width="6" className="pt-3">
        {/* Double ampersand => used to generate component on the right side of the symbole as long as the left side is not null */}
        {selectedArticle && !editMode && (
          <ArticleDetails />
        )}
        {editMode && (
          <ArticleForm
            createOrEdit={createOrEdit}
            submitting={submitting}
          />
        )}
      </Grid.Column>
    </Grid>
  );
});
