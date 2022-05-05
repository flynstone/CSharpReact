import { CardHeader } from '@mui/material';
import { observer } from "mobx-react-lite";
import React from "react";
import { Article } from "../../../app/models/article";

interface Props {
  article: Article;
}

export default observer(function ActivityDetailedHeader({ article }: Props) {
  return (
    <div className="Row p-3">
      <CardHeader /><h3>{article.title}</h3>
      <h3 style={{color: 'teal'}}>{article.createdAt}</h3>
    </div>
    // <Card style={{ paddingLeft: '2rem' }}>
      
       
        
    //     <CardContent>

    //       {article.body}
    //       <br /><br />

    //       <div className="container">
    //         <Button as={Link} to={`/manage/${article.id}`} basic color="blue">Edit</Button>{' '}
    //         <Button as={Link} to={`/articles`} basic color="grey">Cancel</Button>
    //       </div>
         
    //     </CardContent>

    //     <CardActions>
    //       <small className="text-muted">{article.dateCreated}</small>
    //       <i className="fa fa-heart"></i>
    //     </CardActions>
    //   </Card>
    // <Segment.Group>
    //   <Item.Group>
    //     <Item>
    //       <Item.Content>
    //         <div className="Row">
    //         <Header
    //           size="huge"
    //           content={article.title}
    //           style={{ color: "white", justifyContent: "space-between" }}
    //         />

    //         {article.dateCreated}
    //         </div>
            
    //       </Item.Content>
    //     </Item>
    //   </Item.Group>

    //   <Button color="teal">Comment Article</Button>
    //   <Button color="orange" floated="right">
    //     Edit Article
    //   </Button>
    // </Segment.Group>
  );
});
