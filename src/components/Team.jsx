import React from 'react';
import Border from '../assets/border.png';

const Team = () => {
  return (
    <main className='homepage-container'>
      <div className='homepage-content'>
        <section className='intro'>
          <h3 className='intro-title'>Introducing our fellows Gueux</h3>
          <img className='border-medieval' src={Border} alt='' />
        </section>
        <h3 className='team-title'>Team CCJJ</h3>
        <section className='team'>
          <div className='team-details'>
            <div className='img-social'>
            <div className='container-img'>
            <div className='img-user'>
              <img src='https://avatars0.githubusercontent.com/u/43884584?s=460&u=bbba901f0fa0cd299a051b09a9a416d1ae28622c&v=4' alt='Cédric' />
            </div>
            <div className="overlay-profile-img">
              <div className="name-profile-img">Cédric</div>
              </div>
            </div>
            <div class="social-icons">
                                <li><a href="https://github.com/CedricPriouret"><i class="fab fa-github"></i></a></li>
                                <li><a href="https://www.linkedin.com/in/cedric-priouret-40889718b/"><i
                                            class="fab fa-linkedin"></i></a></li>
            </div>
            </div>
            <blockquote>
              Lorem ipsum, dolor sit amet consectetur adipisicing.Lorem ipsum,
              dolor sit amet consectetur adipisicing.Lorem ipsum, dolor sit amet
              consectetur adipisicing.
            </blockquote>
          </div>
          <div className='team-details'>
          <div className='img-social'>
              <div className='img-user'>
            <img src='https://avatars2.githubusercontent.com/u/58628260?s=460&u=ea2cb5d04c2270fd17b2181d1e701f77749df75d&v=4' alt='Cyrille' />
            </div>
            <div class="social-icons">
                                <li><a href="https://github.com/Cissou13"><i class="fab fa-github"></i></a></li>
                                <li><a href="https://www.linkedin.com/in/cyrille-fabre-bbb46b78/"><i
                                            class="fab fa-linkedin"></i></a></li>
                            </div>
            </div>
            <blockquote>
              Lorem ipsum, dolor sit amet consectetur adipisicing.Lorem ipsum,
              dolor sit amet consectetur adipisicing.Lorem ipsum, dolor sit amet
              consectetur adipisicing.
            </blockquote>
          </div>
          <div className='team-details'>
          <div className='img-social'>
              <div className='img-user'>
            <img src='https://avatars1.githubusercontent.com/u/65537750?s=460&v=4' alt='Jonathan' />
            </div>
            <div class="social-icons">
                                <li><a href="https://github.com/john32313"><i class="fab fa-github"></i></a></li>
                                <li><a href="https://www.linkedin.com/in/jonathan-fran%C3%A7ois-9510671aa/"><i
                                            class="fab fa-linkedin"></i></a></li>
                            </div>
            </div>
            <blockquote>
              Lorem ipsum, dolor sit amet consectetur adipisicing.Lorem ipsum,
              dolor sit amet consectetur adipisicing.Lorem ipsum, dolor sit amet
              consectetur adipisicing.
            </blockquote>
          </div>
          <div className='team-details'>
          <div className='img-social'>
              <div className='img-user'>
            <img src='https://avatars2.githubusercontent.com/u/69692885?s=460&u=7f5e98284216b04b474f5bb82b16db8060d71ca9&v=4' alt='Justine' />
            </div>
            <div class="social-icons">
                                <li><a href="https://github.com/PainJustine"><i class="fab fa-github"></i></a></li>
                                <li><a href="https://www.linkedin.com/in/painjustine/"><i
                                            class="fab fa-linkedin"></i></a></li>
                            </div>
            </div>
            <blockquote>
              Lorem ipsum, dolor sit amet consectetur adipisicing.Lorem ipsum,
              dolor sit amet consectetur adipisicing.Lorem ipsum, dolor sit amet
              consectetur adipisicing.
            </blockquote>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Team;
