import { observer } from 'mobx-react-lite';
import React from 'react';
import { Link } from 'react-router-dom';
import { Image, List } from 'semantic-ui-react';
import { Profile } from '../../../app/models/profile';

interface Props {
  contributors: Profile[];
}

export default observer(function ArticleListItemContributor({contributors}: Props) {
  return (
    <List horizontal>
      {contributors.map(contributor => (
         <List.Item key={contributor.username} as={Link} to={`/profiles/${contributor.username}`}>        
          <Image size='mini' circular src={contributor.image || '/img/user.png'} />       
        </List.Item>
      ))}
    </List>
  )
})