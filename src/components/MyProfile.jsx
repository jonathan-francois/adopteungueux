import React from 'react';
import ProfileLiked from './ProfileLiked';

export default class MyProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { likedProfile } = this.props;
    return (
      <>
        {likedProfile.map((pro) => (
          <ProfileLiked data={pro} />
        ))}
      </>
    );
  }
}
