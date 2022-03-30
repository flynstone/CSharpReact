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
    title: Yup.string().required('The article title is required')
  });

  useEffect(() => {
    if (id) loadArticle(id).then((article) => setArticle(article!));
  }, [id, loadArticle]);

  // const handleSubmit = () => {
  //   if (article.id.length === 0) {
  //     let newArticle = {
  //       ...article,
  //       id: uuid()
  //     }
  //     createArticle(newArticle).then(() => history.push(`/articles/${newArticle.id}`));
  //   } else {
  //     updateArticle(article).then(() => history.push(`/articles/${article.id}`));
  //   }
  // }

  // const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   const { name, value } = event.target;
  //   setArticle({ ...article, [name]: value });
  // }

  if (loadingInitial) return <LoadingComponent content="Loading article..." />;

  return (
    <>
      <br/> <br/>
      <Formik
        validationSchema={validationSchema}
        enableReinitialize
        initialValues={article}
        onSubmit={(values) => console.log(values)}>
        {({ handleSubmit }) => (
          <Form className="ui form" onSubmit={handleSubmit} autoComplete="off">
            <FormField>
              <Field name="title" placeholder="Title" />
            </FormField>
            
            <Field name="body" type="textarea" placeholder="Input content here" />
            <Field placeholder="Date" name="dateCreated" />
            <Button basic color="blue" loading={loading} type="submit" floated="right">Submit</Button>{" "}
            <Button as={Link} to="/articles" basic color="orange" type="button" floated="right">Cancel</Button>
          </Form>
        )}
      </Formik>
    </>
  );
});
