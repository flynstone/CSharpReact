import React from "react";
import { Article } from "../../../app/models/article";
import ArticleList from "./ArticleList";
import { Row } from 'react-bootstrap';
import ArticleDetails from "../details/ArticleDetails";
import ArticleForm from "../form/ArticleForm";

interface Props {
  articles: Article[];
  selectedArticle: Article | undefined;
  selectArticle: (id: string) => void;
  cancelSelectArticle: () => void;
}

export default function ArticleDashboard({articles, selectedArticle, selectArticle, cancelSelectArticle}: Props) {
  return (
    <>
      <Row>
        {/* Double ampersand => used to generate component on the right side of the symbole as long as the left side is not null */}
        {selectedArticle &&
          <ArticleDetails article={selectedArticle} cancelSelectArticle={cancelSelectArticle} />}
        <ArticleForm />
      </Row>
      <Row>
        <ArticleList articles={articles} selectArticle={selectArticle}/>
      </Row>
    </>
  );
}
