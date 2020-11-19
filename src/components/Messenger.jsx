import React from 'react';

const Messenger = () => {
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
      <div className='conversation-send'></div>
    </div>
  );
};

export default Messenger;
