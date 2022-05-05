import { Formik, Form, Field, FieldProps } from "formik";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Comment, Loader } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import * as Yup from 'yup';
import { observer } from "mobx-react-lite";
import { formatDistanceToNow } from "date-fns";
import { Card, CardContent, CardHeader } from "@mui/material";

interface Props {
  articleId: string;
}

export default observer(function ArticleDetailedComment({ articleId }: Props) {
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
      <br/>
      <Card>
        <CardHeader/>
        <div className="Comment">
          <h3 style={{color: 'teal'}}>Comment on this article</h3>
        </div>

        <CardContent>
        <Comment.Group style={{minWidth: '100%'}}>
          {commentStore.comments.map(comment => (         
          <Comment key={comment.id}>
              <Comment.Avatar src={comment.image || '/img/user.png'} />
              <Comment.Content>
                <div className="Row">
                <Comment.Author style={{ color: 'teal' }} as={Link} to={`/profiles/${comment.username}`}>
                  {comment.displayName}
                </Comment.Author>
                <Comment.Metadata>
                  <div style={{color: 'beige'}}>{formatDistanceToNow(comment.createdAt)}</div>  
                </Comment.Metadata>
                </div>
              <Comment.Text style={{whiteSpace: 'pre-wrap', color: 'white'}}>{comment.message}</Comment.Text>
            </Comment.Content>
          </Comment>   
          ))}

          <Formik
            onSubmit={(values, { resetForm }) => commentStore.addComment(values).then(() => resetForm())}
            initialValues={{ message: '' }}
            validationSchema={Yup.object({
              message: Yup.string().required()
            })}
          >
            {({ isSubmitting, isValid, handleSubmit }) => (
              <Form className="ui form">
                <Field name='message'>
                  {(props: FieldProps) => (
                    <div style={{position: 'relative'}}>
                      <Loader active={isSubmitting} />
                      <br /><br />
                      <textarea
                        style={{backgroundColor: '#343434', color: 'white', width: '100%'}}
                        placeholder="Enter your comment (Enter to submit, SHIFT + enter for new line)"
                        rows={2}
                        {...props.field}
                        onKeyPress={e => {
                          if (e.key === 'Enter' && e.shiftKey) {
                            return;
                          }
                          if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault();
                            isValid && handleSubmit()
                          }
                        }}
                      />
                    </div>
                  )}
                </Field>
              </Form>
            )}
          </Formik>
          
        </Comment.Group>
        </CardContent>
      </Card>

    </>
  )
})