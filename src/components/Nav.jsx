import avatar from '../assets/avatar.jpeg';

const Nav = () => {
  return (
    <div className='nav-col d-flex flex-column'>
      <div className='d-flex flex-column align-items-center m-5'>
        <div className='rounded-circle bg-white p-3'>
          <img src={avatar} alt='Avatar' className='rounded-circle border border-black avatar' />
        </div>
        <div className='d-flex flex-column dropdown mt-3'>
          <a className='border-0 dropdown-toggle text-wrap text-decoration-none text-body text-capitalized fw-bold' type='button'>
            Alexander Bane
          </a>
          <ul className='dropdown-menu'>
            <li><a className='dropdown-item' href='#'>Profile</a></li>
          </ul>
        </div>
      </div>
      <div>
        <ul>
          <li>
            <div>
              
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;