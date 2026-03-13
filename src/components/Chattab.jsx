import avatar from '../assets/avatar.jpeg';

const Chattab = ({ name }) => {
  return (
    <div className="bg-white p-3 d-flex flex-row align-items-center justify-content-between chattab m-3">
      <div className='d-flex flex-row align-items-center'>
        <img src={avatar} alt='Chat Avatar' className='rounded-circle chat-avatar' />
        <div className='d-flex flex-column ms-2'>
          <h6 className='fw-bold mb-0'>{name}</h6>
          <div className='text-secondary mb-0'>Hello</div>
        </div>
      </div>
      <div className=''>
        <div>02 Feb</div>
      </div>
    </div>
  );
};

export default Chattab;