import React from "react";
import { Article } from "../../../app/models/article";
import ArticleList from "./ArticleList";
import Row from 'react-bootstrap/Row';
import ArticleDetails from "../details/ArticleDetails";
import ArticleForm from "../form/ArticleForm";

interface Props {
  articles: Article[];
  selectedArticle: Article | undefined;
  selectArticle: (id: string) => void;
  cancelSelectArticle: () => void;
  editMode: boolean;
  openForm: (id: string) => void;
  closeForm: () => void;
  createOrEdit: (article: Article) => void;
  deleteArticle: (id: string) => void;
  submitting: boolean;
}

export default function ArticleDashboard({ articles, selectedArticle, selectArticle, cancelSelectArticle,
    editMode, openForm, closeForm, createOrEdit, deleteArticle, submitting}: Props) {
  return (
    <>     
      <Row>
        <ArticleList
          articles={articles}
          selectArticle={selectArticle}
          deleteArticle={deleteArticle}
        />
      </Row>
      <Row>
        {/* Double ampersand => used to generate component on the right side of the symbole as long as the left side is not null */}
        {selectedArticle && !editMode &&
          <ArticleDetails
            article={selectedArticle}
            cancelSelectArticle={cancelSelectArticle}
            openForm={openForm}
        />}
        {editMode && 
          <ArticleForm
            closeForm={closeForm}
            article={selectedArticle}
            createOrEdit={createOrEdit}
            submitting={submitting}
        />}
      </Row>

    </>
  );
}
