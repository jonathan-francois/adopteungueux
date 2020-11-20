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
            <img src='https://via.placeholder.com/150' alt='Cédric' />
            <blockquote>
              Lorem ipsum, dolor sit amet consectetur adipisicing.Lorem ipsum,
              dolor sit amet consectetur adipisicing.Lorem ipsum, dolor sit amet
              consectetur adipisicing.
            </blockquote>
          </div>
          <div className='team-details'>
            <img src='https://via.placeholder.com/150' alt='Cyrille' />
            <blockquote>
              Lorem ipsum, dolor sit amet consectetur adipisicing.Lorem ipsum,
              dolor sit amet consectetur adipisicing.Lorem ipsum, dolor sit amet
              consectetur adipisicing.
            </blockquote>
          </div>
          <div className='team-details'>
            <img src='https://via.placeholder.com/150' alt='Jonathan' />
            <blockquote>
              Lorem ipsum, dolor sit amet consectetur adipisicing.Lorem ipsum,
              dolor sit amet consectetur adipisicing.Lorem ipsum, dolor sit amet
              consectetur adipisicing.
            </blockquote>
          </div>
          <div className='team-details'>
            <img src='https://via.placeholder.com/150' alt='Justine' />
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
