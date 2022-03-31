import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { Button, FormField } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";
import { v4 as uuid } from "uuid";
import { Formik, Form, Field } from "formik";
import { Article } from "../../../app/models/article";
import * as Yup from 'yup';
import { Card } from "@mui/material";
import MyTextInput from "../../../app/common/form/MyTextInput";
import MyTextArea from "../../../app/common/form/MyTextArea";
import { categoryOptions } from "../../../app/common/options/categoryOptions";
import MySelectInput from "../../../app/common/form/MySelectInput";

export default observer(function ArticleForm() {
  const history = useHistory();
  const { articleStore } = useStore();
  const { createArticle, updateArticle, loading, loadArticle, loadingInitial } =
    articleStore;
  const { id } = useParams<{ id: string }>();

  const [article, setArticle] = useState<Article>({
    id: "",
    title: "",
    body: "",
    dateCreated: "",
  });

  const validationSchema = Yup.object({
    title: Yup.string().required('The article title is required'),
    body: Yup.string().required('The article body is required'),
  });

  useEffect(() => {
    if (id) loadArticle(id).then((article) => setArticle(article!));
  }, [id, loadArticle]);

  const handleFormSubmit = (article: Article) => {
    if (article.id.length === 0) {
      let newArticle = {
        ...article,
        id: uuid()
      }
      createArticle(newArticle).then(() => history.push(`/articles/${newArticle.id}`));
    } else {
      updateArticle(article).then(() => history.push(`/articles/${article.id}`));
    }
  }

  if (loadingInitial) return <LoadingComponent content="Loading article..." />;

  return (
    <>
      <br/> <br/>
      <Formik
        validationSchema={validationSchema}
        enableReinitialize
        initialValues={article}
        onSubmit={(values) => handleFormSubmit(values)}>
        {({ handleSubmit, isValid, isSubmitting, dirty }) => (
          <Form onSubmit={handleSubmit} autoComplete="off">
            <Card className="Container">
              <div className="Row">
                <MyTextInput name="title" placeholder="Title" />
                
                <Field style={{backgroundColor: '#343434', color: 'beige', borderStyle: 'none'}} placeholder="Date" name="dateCreated" />
              </div>
              
              <FormField className="py-5 px-3" >
                <MyTextArea rows={3} name="body" placeholder="Input content here" />
              </FormField>

              <FormField className="py-5 px-3">
                <MySelectInput options={categoryOptions} placeholder='Category' name='category' />
              </FormField>
              
              <FormField className="px-5 Btn">
                <Button basic color="blue" disabled={isSubmitting || !dirty || !isValid} loading={loading} type="submit" floated="right">Submit</Button>{" "}
                <Button as={Link} to="/articles" basic color="orange" type="button" floated="right">Cancel</Button>
              </FormField>         
            </Card>
            
          </Form>
        )}
      </Formik>
    </>
  );
});
