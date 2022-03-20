import React from 'react';
import Button from 'react-bootstrap/Button';
import { Article } from '../../../app/models/article';
import Table from 'react-bootstrap/Table';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


interface Props {
  articles: Article[];
  selectArticle: (id: string) => void;
}

export default function ArticleList({articles, selectArticle}: Props) {
  return (
    <>
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