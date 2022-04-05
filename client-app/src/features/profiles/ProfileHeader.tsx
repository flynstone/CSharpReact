import { observer } from "mobx-react-lite";
import React from "react";
import { Button, Divider, Grid, Header, Item, Reveal, Segment, Statistic } from "semantic-ui-react";
import { Profile } from "../../app/models/profile";

interface Props {
  profile: Profile;
}

export default observer(function ProfileHeader({profile}: Props) {
  return (
    <>
      <br />
      <Segment style={{backgroundColor: '#343434'}}>
        <Grid>
          <Grid.Column width={12}>
            <Item.Group>
              <Item>
                <Item.Image avatar size='small' src={profile.image || '/img/user.png'} />
                <Item.Content verticalAlign="middle">
                  <Header as="h1" style={{color: 'white'}} content={profile.displayName} />
                </Item.Content>
              </Item>
            </Item.Group>
          </Grid.Column>
          <Grid.Column width={4}>
            <Statistic.Group widths={2}>
              <Statistic label='Followers' value='5' />
              <Statistic label='Following' value='42' />
            </Statistic.Group>
            <Divider />
            <Reveal animated="move">
              <Reveal.Content visible style={{ width: '100%' }}>
                <Button fluid color='teal' content='Following' />
              </Reveal.Content>
              <Reveal.Content hidden style={{ width: '100%' }}>
                <Button fluid basic color={true ? 'red' : 'green'} content={true ? 'Unfollow' : 'Follow'} />
              </Reveal.Content>
            </Reveal>
          </Grid.Column>
        </Grid>
      </Segment>  
    </>
  )
})