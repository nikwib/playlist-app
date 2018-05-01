import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import { List, ListItem } from 'material-ui/List';
import NavigateNext from 'material-ui/svg-icons/image/navigate-next';
import SocialPerson from 'material-ui/svg-icons/social/person';
import moment from 'moment';
import React from 'react';
import { Link } from 'react-router-dom';

const renderPlaylists = (props) => props.playlists.map(playlist => {
  const time = moment(playlist.createdAt).calendar(null, {
    sameDay: '[Today]',
    nextDay: '[Tomorrow]',
    nextWeek: 'dddd',
    lastDay: '[Yesterday]',
    lastWeek: '[Last] dddd',
    sameElse: 'DD/MM/YYYY'
  });

  return (
    <div key={playlist._id}>
      <Link to={'/list/' + playlist._id} style={{ textDecoration: 'none' }} key={playlist._id}>
        <ListItem style={{ height: 100 }}
          primaryText={
            <div style={{ display: 'flex' }}>
              <div style={{ fontSize: '30px', marginRight: '40px' }}>
                {playlist.playlist}
              </div>
              <div style={{ fontStyle: 'italic' }}>
                Created {time}
              </div>
            </div>
          }
          secondaryText={
            <div style={{ padding: 10, display: 'flex' }}>
              <SocialPerson style={{ marginRight: 10 }} />
              {playlist.creator}
            </div>
          }
          rightIcon={<NavigateNext style={{ width: 50, height: 'auto' }} />}
        />
        <Divider />
      </Link>
    </div>
  );
});


const Playlists = (props) => {
  return (
    <div>
      <List>
        {props.playlists && renderPlaylists(props)}
      </List>
    </div>
  );
};

export default Playlists;