import avatar from '../assets/avatar.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faMessage, faCalendar, faFileLines } from '@fortawesome/free-regular-svg-icons';
import { faGear, faTag } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  return (
    <div className='nav-col d-flex flex-column'>
      <div className='d-flex flex-column align-items-center mx-5 mt-4 mb-5'>
        <div className='rounded-circle bg-white p-2'>
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
      <div className='text-secondary'>
        <div className='d-flex flex-row align-items-center ps-4 py-2 nav-item'>
          <FontAwesomeIcon icon={faHouse} />
          <div className='ms-3'>PROPERTIES</div>
        </div>
        <div className='d-flex flex-row align-items-center ps-4 py-2 mt-3 nav-item nav-selected'>
          <FontAwesomeIcon icon={faMessage} />
          <div className='ms-3'>CHAT</div>
        </div>
        <div className='d-flex flex-row align-items-center ps-4 py-2 mt-3 nav-item'>
          <FontAwesomeIcon icon={faCalendar} />
          <div className='ms-3'>CALENDAR</div>
        </div>
        <div className='d-flex flex-row align-items-center ps-4 py-2 mt-3 nav-item'>
          <FontAwesomeIcon icon={faTag} />
          <div className='ms-3'>OFFERS</div>
        </div>
        <div className='d-flex flex-row align-items-center ps-4 py-2 mt-3 nav-item'>
          <FontAwesomeIcon icon={faFileLines} />
          <div className='ms-3'>DOCUMENTS</div>
        </div>
        <div className='d-flex flex-row align-items-center ps-4 py-2 mt-3 nav-item'>
          <FontAwesomeIcon icon={faGear} />
          <div className='ms-3'>SETTINGS</div>
        </div>
      </div>
    </div>
  );
};

export default Nav;