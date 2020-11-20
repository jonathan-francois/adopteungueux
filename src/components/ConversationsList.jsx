import React from 'react';
import { Link } from 'react-router-dom';
import Border from '../assets/border.png';

const ConversationList = () => {
  return (
    <main className='conversationList'>
      <h1 className='conversation-title'>Inbox</h1>
      <div className='conversations-items'>
        <section className='intro'>
          <h3 className='intro-title'>Your last messages</h3>
          <img className='border-medieval' src={Border} alt='' />
        </section>
        <Link to='/messages'>
          <p>🗨️ Gudule de Sautemouton</p>
        </Link>
        <Link to='/messages'>
          <p>🗨️ Diane de la Combe-aux Cerfs</p>
        </Link>
        <Link to='/messenger'>
          <p>🗨️ Hildegarde de Mondragon</p>
        </Link>
        <Link to='/messenger'>
          <p>🗨️ Viviane de Valvert</p>
        </Link>
        <Link to='/messenger'>
          <p>🗨️Mélissande d'Engoulevent</p>
        </Link>
      </div>
    </main>
  );
};

export default ConversationList;
