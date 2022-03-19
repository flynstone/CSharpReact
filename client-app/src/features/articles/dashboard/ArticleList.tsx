import React from 'react';
import Button from 'react-bootstrap/Button';
import { Table, Col, Row } from 'react-bootstrap';
import { Article } from '../../../app/models/article';

interface Props {
  articles: Article[];
  selectArticle: (id: string) => void;
}

export default function ArticleList({articles, selectArticle}: Props) {
  return (
    <>
      <Row>
        <Col md={2}>
          <Button variant="outline-info">New Article</Button>       
        </Col>
      </Row>
      <br />
      <Row>
        <Col md={12}>
          <Table responsive striped>
            <thead> 
              <tr>
                <th>Title</th>
                <th>Content</th>
                <th>Date</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {articles.map((article) => (
                <tr key={article.id}>
                  <td>{article.title}</td>
                  <td>{article.body}</td>
                  <td>{article.dateCreated}</td>
                  <td>
                    <Button onClick={() => selectArticle(article.id)} variant="outline-info">Details</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  )
}