import React from 'react';
import { Link } from 'react-router-dom';
import Border from '../assets/border.png';
import user2image from '../assets/profile2.png'
import user3image from '../assets/profile3.png'
import user4image from '../assets/profile4.png'
import user5image from '../assets/profile5.png'
import user6image from '../assets/profile6.png'

const ConversationList = () => {
  return (
    <main className='conversationList'>
      <h1 className='conversation-title'>Inbox</h1>
      <div className='conversations-items'>
        <section className='intro'>
          <h3 className='intro-title'>Your last messages</h3>
          <img className='border-medieval' src={Border} alt='' />
        </section>
          <div className='conversation'><img
              className='conversation1pic'
              src={user2image}
              alt='some user'
            ></img>
        <Link to='/message1'>        
          <p>Gudule de Sautemouton</p>
        </Link>
          </div>
          <div className='conversation'><img
              className='conversation1pic'
              src={user3image}
              alt='some user'
            ></img>
        <Link to='/message2'>
          <p> Diane de la Combe-aux Cerfs</p>
        </Link>
          </div>
          <div className='conversation'><img
              className='conversation1pic'
              src={user4image}
              alt='some user'
            ></img>
        <Link to='/messenger'>
          <p> Hildegarde de Mondragon</p>
        </Link>
          </div>
          <div className='conversation'><img
              className='conversation1pic'
              src={user5image}
              alt='some user'
            ></img>
        <Link to='/messenger'>
          <p> Viviane de Valvert</p>
        </Link>
          </div>
          <div className='conversation'><img
              className='conversation1pic'
              src={user6image}
              alt='some user'
            ></img>
        <Link to='/messenger'>
          <p>Mélissande d'Engoulevent</p>
        </Link>
          </div>
      </div>
    </main>
  );
};

export default ConversationList;
