import React from "react";
import { Article } from "../../../app/models/article";
import ArticleList from "./ArticleList";
import ArticleDetails from "../details/ArticleDetails";
import ArticleForm from "../form/ArticleForm";
import { Grid } from "semantic-ui-react";

interface Props {
  articles: Article[];
  selectedArticle: Article | undefined;
  selectArticle: (id: string) => void;
  cancelSelectArticle: () => void;
  editMode: boolean;
  openForm: (id: string) => void;
  closeForm: () => void;
  createOrEdit: (article: Article) => void;
  submitting: boolean;
  deleteArticle: (id: string) => void;
}

export default function ArticleDashboard({
  articles,
  selectedArticle,
  selectArticle,
  cancelSelectArticle,
  editMode,
  openForm,
  closeForm,
  createOrEdit,
  submitting,
  deleteArticle,
}: Props) {
  return (
    <Grid>
      <Grid.Column width="10">
        <ArticleList
          articles={articles}
          selectArticle={selectArticle}
          deleteArticle={deleteArticle}
          submitting={submitting}
        />
      </Grid.Column>

      <Grid.Column width="6" className="pt-3">
        {/* Double ampersand => used to generate component on the right side of the symbole as long as the left side is not null */}
        {selectedArticle && !editMode && (
          <ArticleDetails
            article={selectedArticle}
            cancelSelectArticle={cancelSelectArticle}
            openForm={openForm}
          />
        )}
        {editMode && (
          <ArticleForm
            closeForm={closeForm}
            article={selectedArticle}
            createOrEdit={createOrEdit}
            submitting={submitting}
          />
        )}
      </Grid.Column>
    </Grid>
  );
}
