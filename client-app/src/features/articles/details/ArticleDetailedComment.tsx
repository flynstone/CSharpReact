import { Formik, Form } from "formik";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Comment, Header, Segment } from "semantic-ui-react";
import MyTextArea from "../../../app/common/form/MyTextArea";
import { useStore } from "../../../app/stores/store";

interface Props {
  articleId: string;
}

export default function ArticleDetailedComment({ articleId }: Props) {
  const { commentStore } = useStore();

  useEffect(() => {
    if (articleId) {
      commentStore.createHubConnection(articleId);
    }
    return () => {
      commentStore.clearComments();
    }
  }, [commentStore, articleId]);


  return (
    <>
      <Segment
        textAlign="center"
        attached="top"
        inverted
        color="teal"
        style={{border: 'none'}}
      >
        <Header><h2>Comment on this article</h2></Header>
      </Segment>
      <Segment attached clearing style={{ backgroundColor: '#121212', paddingLeft: '2rem' }}>
        <Comment.Group>
          {commentStore.comments.map(comment => (         
          <Comment key={comment.id}>
              <Comment.Avatar src={comment.image || '/img/user.png'} />
            <Comment.Content>
              <Comment.Author style={{color: 'teal'}} as={Link} to={`/profiles/${comment.username}`}>{comment.displayName}</Comment.Author>
              <Comment.Metadata>
                  <div style={{color: 'beige'}}>{ comment.createdAt }</div>
              </Comment.Metadata>
              <Comment.Text style={{color: 'white'}}>{comment.message}</Comment.Text>
            </Comment.Content>
          </Comment>   
          ))}

          <Formik
            onSubmit={(values, { resetForm }) => commentStore.addComment(values).then(() => resetForm())}
            initialValues={{body: ''}}
          >
            {({ isSubmitting, isValid }) => (
              <Form className="ui form">
                <div className="Fill">
                  <MyTextArea placeholder="Add comment" name="message" rows={2} />
                </div>
                <Button
                    loading={isSubmitting}
                    disabled={isSubmitting || !isValid}
                    content='Add Reply'
                    labelPosition='left'
                    icon='edit'
                    primary
                    type='submit'
                    floated='right'
                  />
              </Form>
            )}
          </Formik>
          
        </Comment.Group>
      </Segment>
    </>
  )
}