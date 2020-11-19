import React from 'react';

const SearchedProfile = () => {
  return (
    <main className='profile-container'>
      <h1>Matching Profiles</h1>
      <section className='profile-infos'>
        <div className='profile-picture'></div>
        <div className='profile-name'></div>
        <div className='profile-age'></div>
      </section>
      <section className='profile-like-and-message'>
        <div className='profile-like'>
          {/* Ici ça sera un petit coeur pour liker le profil d'un gueux. On peut réutiliser le truc qu'on a vu dans le checkpoint.  */}
        </div>
        <div className='profile-message'>
          {/* Ici ça sera juste une petit icone d'enveloppe pour faire genre on peut envoyer un msg, mais en fait on peut pas.  */}
        </div>
      </section>
      <form>
        <button type='submit'>Find another gueux</button>
      </form>
    </main>
  );
};

export default SearchedProfile;
