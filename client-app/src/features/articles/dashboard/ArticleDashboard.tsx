import React from "react";
import { Article } from "../../../app/models/article";
import ArticleList from "./ArticleList";

interface Props {
  articles: Article[];
}

export default function ArticleDashboard({articles}: Props) {
  return (
    <>
      <ArticleList articles={articles}/>
    </>
  );
}
