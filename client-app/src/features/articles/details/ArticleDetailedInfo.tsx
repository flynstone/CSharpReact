import { CardContent } from "@mui/material";
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
      {article.body}
           
      <br /><br />
           
      <div className="container">
        <Button as={Link} to={`/manage/${article.id}`} basic color="blue">Edit</Button>{' '}
        <Button as={Link} to={`/articles`} basic color="grey">Cancel</Button>
      </div>   
    </CardContent>
  )
}