import { CardContent } from '@mui/material';
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import { Article } from "../../../app/models/article";

interface Props {
  article: Article
}

export default function ArticleDetailedInfo({article}: Props) {
  return (
    <CardContent>     
      <div className='Container'>
        {article.content}
      </div>  
    </CardContent>
  )
}