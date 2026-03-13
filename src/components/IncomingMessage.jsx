import avatar from '../assets/avatar.jpeg';

const IncomingMessage = () => {
  return (
    <div className="d-flex flex-row align-items-start msg-wrapper mb-5">
      <div className="d-flex flex-column align-items-center msg-info">
        <img src={avatar} alt="Chat Avatar" className='chat-avatar rounded-circle' />
        <div className='small text-secondary mt-1'>1:00</div>
      </div>
      <div className='rounded-5 in-msg py-2 px-3 ms-2'>
        aaaaaaaaaa aaaaaaaaa aaaaaaaaaaaa aaaa aaaa aaaaaa aaaaaaaaaa aaaaaaaaaaaaa
      </div>
    </div>
  );
};

export default IncomingMessage;