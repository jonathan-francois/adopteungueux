import React from 'react';

const Profile = ({ data, handleRandom }) => {
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
          <button>Like</button>
        </div>
        <div className='profile-message'>
          {/* Ici ça sera juste une petit icone d'enveloppe pour faire genre on peut envoyer un msg, mais en fait on peut pas.  */}
          <button>Message</button>
        </div>
      </section>
      <button type='button' className='btn-find' onClick={handleRandom}>
        Next gueux
      </button>
    </>
  );
};

export default Profile;
