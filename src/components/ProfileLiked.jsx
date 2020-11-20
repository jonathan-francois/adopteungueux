import React from 'react';

const Profile = ({ data, addLikedProfile, removeLikedProfile }) => {
  return (
    <>
      <section className='profile-infos'>
        <div className='profile-picture'>
          <img src={data.picture.large} alt={data.login.uuid} />
        </div>
        <div className='profile-info'>
          <p>Username: {data.login.username}</p>
          <p>Age: {data.dob.age} years</p>
          <button
            type='button'
            className='remove-btn'
            onClick={() => removeLikedProfile(data)}
          >
            ❌
          </button>
        </div>
      </section>
    </>
  );
};

export default Profile;
