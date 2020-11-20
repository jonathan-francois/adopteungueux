import React from 'react';
import ProfileLiked from './ProfileLiked';
import { Link } from 'react-router-dom';
import Border from '../assets/border.png';

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
        <div className='homepage-content my-profile'>
          <section className='intro'>
            <h3 className='intro-title'>My criterias</h3>
            <img className='border-medieval' src={Border} alt='' />
          </section>
          <p>I'm looking for a : {looking.gender}</p>
          <p>
            Beetween {looking.age.min} and {looking.age.max}
          </p>
          <p>I'm from {looking.city}</p>
          <p id='reset'>Profil liked : {likedProfile.length}</p>
          <Link to='/'>Change your research preferences</Link>
          <div className='likedProfile'>
            {likedProfile.map((pro) => (
              <ProfileLiked
                key={pro.login.uuid}
                data={pro}
                removeLikedProfile={removeLikedProfile}
              />
            ))}
          </div>
        </div>
      </main>
    );
  }
}
