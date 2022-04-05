import { observer } from 'mobx-react-lite';
import React from 'react';
import { Tab } from 'semantic-ui-react';
import { Profile } from '../../app/models/profile';
import ProfilePhotos from './ProfilePhotos';

interface Props {
  profile: Profile;
}

export default observer(function ProfileContent({profile}: Props) {
  const panes = [
    { menuItem: 'About', render: () => <Tab.Pane style={{ backgroundColor: '#343434', color: 'white' }}>About Content</Tab.Pane> },
    { menuItem: 'Photos', render: () => <ProfilePhotos profile={profile} /> },
    { menuItem: 'Articles', render: () => <Tab.Pane style={{ backgroundColor: '#343434', color: 'white' }}>Articles Content</Tab.Pane> },
    { menuItem: 'Followers', render: () => <Tab.Pane style={{ backgroundColor: '#343434', color: 'white' }}>Followers Content</Tab.Pane> },
    { menuItem: 'Following', render: () => <Tab.Pane style={{ backgroundColor: '#343434', color: 'white' }}>Following Content</Tab.Pane> },
  ];

  return (
    <Tab
      menu={{ fluid: true, vertical: true }}
      menuPosition='right'
      panes={panes}
    />
  )
});