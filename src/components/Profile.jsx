import React from 'react';
import { Link } from 'react-router-dom';

const Profile = ({ data, handleRandom, addLikedProfile }) => {
  return (
    <>
      <section className='profile-infos'>
        <div className='profile-picture'>
          <img src={data.picture.large} alt={data.login.uuid} />
        </div>
        <div className='profile-info'>
          <p>Username: {data.login.username}</p>
          <p>Age: {data.dob.age} years</p>
        </div>
      </section>
      <section className='profile-like-and-message'>
        <div className='profile-like'>
          {/* Ici ça sera un petit coeur pour liker le profil d'un gueux. On peut réutiliser le truc qu'on a vu dans le checkpoint.  */}
          <button
            type='button'
            onClick={() => {
              addLikedProfile(data);
              handleRandom();
            }}
          >
            ❤️
          </button>
        </div>
        <div className='profile-message'>
          {/* Ici ça sera juste une petit icone d'enveloppe pour faire genre on peut envoyer un msg, mais en fait on peut pas.  */}
          <Link to='/messenger'>
            <button>🗨️</button>
          </Link>
        </div>
      </section>
      <div className='research-btn'>
        <button type='button' className='btn-find' onClick={handleRandom}>
          Another gueux
        </button>
        <Link to='/myprofile'>
          <button type='button' className='btn-find btn2'>
            Done searching
          </button>
        </Link>
      </div>
    </>
  );
};

export default Profile;
