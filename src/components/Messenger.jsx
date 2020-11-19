import React from 'react';

class Messenger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Type your message ',
    };
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const { handleChange, handleSubmit } = this;
    const { value } = this.state;
    return (
      <div className='conversation-container'>
        <h1>Conversation with Machine</h1>
        <div className='conversation-content'>
          <div id='conversation1'>
            Good evening Milady, what are you planning to do tonight ?
          </div>
          <div id='conversation2'>Eating some boar, what about you?</div>
          <div id='conversation1'>Just chillin' with my 3 wives</div>
          <div id='conversation2'>
            Can we have some hunt tomorrow ? I need to fill back my lair
          </div>
          <div id='conversation1'>Can i bring my other wives ?</div>
          <div id='conversation2'>Ok. But i'm not sharing my game </div>
          <div id='conversation1'>But you share your man ?</div>
        </div>
        <div className='conversation-send'>
          {/* <div className='conversation-input'>Coucou</div> */}
          <form onSubmit={handleSubmit} className='send-form'>
            <label className='label-message'>Chat with Machine:</label>
            <textarea
              className='send-message'
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
