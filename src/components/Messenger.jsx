import React from 'react';
import user1image from '../assets/profile1.png';
import user2image from '../assets/profile2.png';

const userProfile = {
  gender: 'male',
  name: {
    title: 'Mr',
    first: 'Tomas',
    last: 'Hidalgo',
  },
  login: {
    uuid: 'f60e736b-78f7-47db-aae9-95c3ebb16e0d',
    username: 'tinymeercat630',
    password: 'night',
    salt: 'BG0BEZR4',
    md5: '069b6ff84b484dca3c92cac602b17db7',
    sha1: '0ec185ad5607c4c393adaa0dc2b4e3799e39260a',
    sha256: '392fd3559e196f138b4bfeb600142bcde780bb2425ce2bc71d34f214207aed94',
  },
  key: {
    id: {
      name: 'DNI',
      value: '68662625-I',
    },
  },
  picture: {
    large: 'https://randomuser.me/api/portraits/men/75.jpg',
    medium: 'https://randomuser.me/api/portraits/med/men/75.jpg',
    thumbnail: 'https://randomuser.me/api/portraits/thumb/men/75.jpg',
  },
};

class Messenger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      messageAdd: [],
    };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      messageAdd: [...this.state.messageAdd, this.state.value],
      value: '',
    });
  };

  onEnterPress = (e) => {
    if(e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      this.handleSubmit(e)
    }
  }

  render() {
    const { handleChange, handleSubmit } = this;
    const { value, messageAdd } = this.state;
    return (
      <div className='conversation-container'>
        <div className="conv-header">
          <img className='messageAvatar' src={user2image} alt='1' />
          <h1>Conversation with {userProfile.login.username}</h1>
        </div>
        <div className='conversation-content'>
          <div className='conversation2'>
            <p>Good evening Milady, what're you planning to do tonight ?</p>
            <img
              className='conversation1pic'
              src={user1image}
              alt='some user'
            ></img>
          </div>
          <div className='conversation1'>
            <img
              className='conversation2pic'
              src={user2image}
              alt='some user'
            ></img>
            <p>Eating some boar, what about you?</p>
          </div>
          <div className='conversation2'>
            <p>Just chillin' with my 3 wives</p>
            <img
              className='conversation1pic'
              src={user1image}
              alt='some user'
            ></img>
          </div>
          <div className='conversation1'>
            <img
              className='conversation2pic'
              src={user2image}
              alt='some user'
            ></img>
            <p>Can we have some hunt tomorrow ? I need to fill up.</p>
          </div>
          <div className='conversation2'>
            <p>Can i bring my other wives ?</p>
            <img
              className='conversation1pic'
              src={user1image}
              alt='some user'
            ></img>
          </div>
          <div className='conversation1'>
            <img
              className='conversation2pic'
              src={user2image}
              alt='some user'
            ></img>
            <p>Ok. But I'm not sharing my game</p>
          </div>
          <div className='conversation2'>
            <p>But you share your man ? 🤍</p>
            <img
              className='conversation1pic'
              src={user1image}
              alt='some user'
            ></img>
          </div>
          {messageAdd &&
            messageAdd.map((m,itt) => <div key={itt} className='conversation2'><p>{m}</p><img
            className='conversation1pic'
            src={user1image}
            alt='some user'
          ></img></div>)}
        </div>
        <div className='conversation-send'>
          <form
            onSubmit={(e) => handleSubmit(e, userProfile.login.username)}
            className='send-form'
          >
            <p id='camera'>📷 </p>
            <p id='camera'> 📎</p>
            <p id='smiley'>😀</p>
            <textarea
              className='send-message'
              placeholder='Type your message   '
              value={value}
              onChange={handleChange}
              rows='5'
              cols='200'
              onKeyDown={this.onEnterPress}
            />
            <input
              type='submit'
              value='Send'
              className='send-btn'
              wrap='hard'
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Messenger;
