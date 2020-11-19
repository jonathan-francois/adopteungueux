import React from 'react';

class Messenger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Type your message',
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
          <div id='conversation2'>Just chillin'</div>
          <div id='conversation1'>Just chillin'</div>
          <div id='conversation2'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
            consequatur quod laudantium iure soluta in, nemo eaque sed
            perspiciatis at doloremque voluptatibus delectus, doloribus
            perferendis quos blanditiis ipsa saepe ipsum!
          </div>
          <div id='conversation1'>Just chillin'</div>
          <div id='conversation2'>Ok.</div>
          <div id='conversation1'>Just chillin'</div>
        </div>
        <div className='conversation-send'>
          {/* <div className='conversation-input'>Coucou</div> */}
          <form onSubmit={handleSubmit} className='send-form'>
            <label>
              Chat with Machine:
              <textarea
                className='send-message'
                value={value}
                onChange={handleChange}
                rows='4'
                cols='150'
              />
            </label>
            <input type='submit' value='Send' className='send-btn' />
          </form>
        </div>
      </div>
    );
  }
}

export default Messenger;
