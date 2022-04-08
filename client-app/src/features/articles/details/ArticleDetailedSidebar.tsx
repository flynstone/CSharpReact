import { observer } from 'mobx-react-lite';
import React from "react";
import { Link } from 'react-router-dom';
import { Image, Item, Label, List, Segment } from 'semantic-ui-react';
import { Article } from '../../../app/models/article';

interface Props {
  article: Article
}

export default observer(function ArticleDetailedSidebar({ article: { contributors, creator } }: Props) {
  if (!contributors) return null;
  return (
    <>
      <Segment
        textAlign='center'
        style={{ border: 'none' }}
        attached='top'
        secondary
        inverted
        color='teal'
      >
        {contributors.length} {contributors?.length === 1 ? 'Person' : 'People'} contributed
      </Segment>
      <Segment attached style={{backgroundColor: '#121212'}}>
        <List relaxed divided>
          {contributors.map(contributor => (
            <Item style={{ position: 'relative' }} key={contributor.username}>
              {contributor.username === creator?.username && 
                <Label
                  style={{ position: 'absolute' }}
                  color='orange'
                  ribbon='right'
                >
                  Creator
                </Label>
              }
              <Image size='tiny' src={contributor.image || '/img/user.png'} />
              <Item.Content verticalAlign='middle'>
                <Item.Header as='h3'>
                  <Link to={`/profiles/${contributor.username}`}>{contributor.displayName}</Link>
                </Item.Header>
                {contributor.following && 
                  <Item.Extra style={{color: 'orange'}}>Following</Item.Extra>
                }
              </Item.Content>
            </Item>
          ))}
        </List>
      </Segment>
    </>
  )
})