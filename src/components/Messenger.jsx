import React from 'react';
import Profile1 from '../assets/profile1.jpg';

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

  render() {
    const { handleChange, handleSubmit } = this;
    const { value, messageAdd } = this.state;
    return (
      <div className='conversation-container'>
        <h1>Conversation with {userProfile.login.username}</h1>
        <div className='conversation-content'>
          <div className='conversation1'>
            <img className='conversation1pic' src={Profile1}></img>Good evening
            Milady, what are you planning to do tonight ?
          </div>
          <div className='conversation2'>Eating some boar, what about you?</div>
          <div className='conversation1'>
            <img className='conversation1pic' src={Profile1}></img>Just chillin'
            with my 3 wives
          </div>
          <div className='conversation2'>
            Can we have some hunt tomorrow ? I need to fill up.
          </div>
          <div className='conversation1'>
            <img className='conversation1pic' src={Profile1}></img>Can i bring
            my other wives ?
          </div>
          <div className='conversation2'>Ok. But I'm not sharing my game </div>
          <div className='conversation1'>
            <img className='conversation1pic' src={Profile1}></img>But you share
            your man ?
          </div>
          {messageAdd &&
            messageAdd.map((m) => <div className='conversation2'>{m}</div>)}
        </div>
        <div className='conversation-send'>
          <form
            onSubmit={(e) => handleSubmit(e, userProfile.login.username)}
            className='send-form'
          >
            <label className='label-message'>
              Chatting with{' '}
              <img
                className='messageAvatar'
                src={userProfile.picture.thumbnail}
                alt='1'
              />{' '}
            </label>
            <textarea
              className='send-message'
              placeholder='Type your message '
              value={value}
              onChange={handleChange}
              rows='5'
              cols='200'
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
