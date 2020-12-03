import React from 'react';
import user1image from '../assets/profile1.png';
import user3image from '../assets/profile3.png';


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

class Messenger2 extends React.Component {
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
          <img className='messageAvatar' src={user3image} alt='1' />
          <h1>Conversation with Diane</h1>
        </div>
        <div className='conversation-content'>
          <div className='conversation2'>
            <p>Heyyy ladyyyy</p>
            <img
              className='conversation1pic'
              src={user1image}
              alt='some user'
            ></img>
          </div>
          <div className='conversation2'>
            <p>???????</p>
            <img
              className='conversation1pic'
              src={user1image}
              alt='some user'
            ></img>
          </div>
          <div className='conversation2'>
            <p>🍆🍆🍆🍆</p>
            <img
              className='conversation1pic'
              src={user1image}
              alt='some user'
            ></img>
          </div>
          <div className='conversation2'>
            <p>Why ....</p>
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

export default Messenger2;
