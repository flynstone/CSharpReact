import { observer } from 'mobx-react-lite';
import React from 'react';
import { Link } from 'react-router-dom';
import { Image, List } from 'semantic-ui-react';
import { Profile } from '../../../app/models/profile';

interface Props {
  contributors: Profile[];
}

export default observer(function ArticleListItemContributor({ contributors }: Props) {
  const styles = {
    borderColor: 'orange',
    borderWidth: 2
  }


  return (
    <List horizontal>
      {contributors.map(contributor => (
         <List.Item key={contributor.username} as={Link} to={`/profiles/${contributor.username}`}>        
          <Image
            size='mini'
            circular
            src={contributor.image || '/img/user.png'}
            bordered
            style={contributor.following ? styles : null}
          />       
        </List.Item>
      ))}
    </List>
  )
})