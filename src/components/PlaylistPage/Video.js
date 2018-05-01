import { List, ListItem } from 'material-ui/List';
import ContentLink from 'material-ui/svg-icons/content/link';
import SocialPerson from 'material-ui/svg-icons/social/person';
import React from 'react';
import YouTube from 'react-youtube';

const styles = {
  root: {
    display: 'flex',
  },
  opts: {
    height: '195',
    width: '320',
  }
};

export const Video = ({ url, creator, description }) => {
  return (
    <div style={styles.root}>
      <YouTube
        videoId={url.split('/').pop()}
        opts={styles.opts}
      />
      <List>
        <ListItem
          disabled={true}
          disableKeyboardFocus={true}
          leftIcon={<SocialPerson />}
          primaryText={creator}
        />
        <ListItem
          disabled={true}
          disableKeyboardFocus={true}
          leftIcon={<ContentLink />}
          primaryText={url}
        />
        <ListItem
          disabled={true}
          disableKeyboardFocus={true}
          primaryText={description}
        />
      </List>
    </div>
  );
};

