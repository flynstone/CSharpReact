import React, { Fragment } from 'react';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';
import { Header, Item } from 'semantic-ui-react';
import ArticleListItem from './ArticleListItem';

export default observer(function ArticleList() {
  const { articleStore } = useStore();
  const { groupedArticles } = articleStore;

  return (
    <>
      <br />
      {groupedArticles.map(([group, articles]) => (
        <Fragment key={group}>
          <Header sub color='teal'>
            {group}
          </Header>
          <Item.Group>
            {articles.map(article => (
              <ArticleListItem key={article.id} article={article} />
            ))}
          </Item.Group>
        </Fragment>
      ))}

    </>
  )
});