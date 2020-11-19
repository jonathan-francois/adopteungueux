import React from 'react';
import ProfileLiked from './ProfileLiked';
import { Link } from 'react-router-dom';

export default class MyProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { likedProfile, looking, removeLikedProfile } = this.props;
    return (
      <main className='homepage-container'>
        <h1>My Profile</h1>
        <div>
          <p>I'm looking for : {looking.gender}</p>
          <p>
            Beetween {looking.age.min} and {looking.age.max}
          </p>
          <p>I'm from {looking.city}</p>
          <Link to='/'>Click Here to Change</Link>
        </div>
        <p>Profil liked : {likedProfile.length}</p>
        <div className='likedProfile'>
          {likedProfile.map((pro) => (
            <ProfileLiked
              key={pro.login.uuid}
              data={pro}
              removeLikedProfile={removeLikedProfile}
            />
          ))}
        </div>
      </main>
    );
  }
}
