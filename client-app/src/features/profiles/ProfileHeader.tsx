import { observer } from "mobx-react-lite";
import React from "react";
import { Divider, Grid, Header, Item, Segment, Statistic } from "semantic-ui-react";
import { Profile } from "../../app/models/profile";
import FollowButton from "./FollowButton";

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
            <Statistic.Group  widths={2}>
              <Statistic label='Followers' color='teal' value={profile.followersCount} />     
              <Statistic label='Following' color='teal' value={profile.followingCount} />
            </Statistic.Group>
            <Divider />
            <FollowButton profile={profile} />
          </Grid.Column>
        </Grid>
      </Segment>  
    </>
  )
})