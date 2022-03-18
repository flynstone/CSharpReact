import React from 'react';
import { Table, Col, Row, Button } from 'react-bootstrap';
import { Article } from '../../../app/models/article';

interface Props {
  articles: Article[];
}

export default function ArticleList({articles}: Props) {
  return (
    <>
      <Row>
        <Col mdOffset={10} md={2}>
          <h2>Create Article</h2>
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
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {articles.map((article) => (
                <tr key={article.id}>
                  <td>{article.title}</td>
                  <td>{article.body}</td>
                  <td>{article.dateCreated}</td>
                  <td>
                    <Button>Details</Button>
                  </td>
                  <td>
                    <Button>Update</Button>
                  </td>
                  <td>
                    <Button>Delete</Button>
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