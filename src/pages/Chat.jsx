import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Chattab from "../components/Chattab";
import IncomingMessage from "../components/IncomingMessage";
import OutgoingMessage from "../components/OutgoingMessage";
import ChatBox from "../components/ChatBox";

const Chat = () => {
  const [chats, setChats] = useState([
    { title: 'Gold Coast', name: 'Hali' },
    { title: 'Gold Coast', name: 'Hali' },
    { title: 'Gold Coast', name: 'Hali' },
    { title: 'Gold Coast', name: 'Hali' },
    { title: 'Gold Coast', name: 'Hali' },
    { title: 'Gold Coast', name: 'Hali' },
    { title: 'Gold Coast', name: 'Hali' },
    { title: 'Gold Coast', name: 'Hali' },
    { title: 'Gold Coast', name: 'Hali' },
    { title: 'Gold Coast', name: 'Hali' },
    { title: 'Gold Coast', name: 'Hali' },
    { title: 'Gold Coast', name: 'Hali' },
    { title: 'Gold Coast', name: 'Hali' },
    { title: 'Gold Coast', name: 'Hali' },
    { title: 'Gold Coast', name: 'Hali' }
  ]);
  return (
    <>
      <div className="d-flex flex-row align-items-center justify-content-end mt-4 me-5">
        <div className='d-flex flex-column dropdown me-5'>
          <a className='border-0 dropdown-toggle text-wrap text-decoration-none text-body text-capitalized fw-semibold' type='button'>
            Status: Sale
          </a>
          <ul className='dropdown-menu'>
            <li><a className='dropdown-item' href='#'>Nonsale</a></li>
          </ul>
        </div>
        <FontAwesomeIcon icon={faBell} role="button" />
      </div>
      <h3 className="ms-5 mb-4 fw-semibold">Chat</h3>
      <div className="d-grid column-gap-4 mx-5 page-grid">
        <div className="d-flex flex-row align-items-center">
          <FontAwesomeIcon icon={faMagnifyingGlass} role="button" />
          <input type="search" className="search border-0 ms-3 w-100" placeholder="Search" />
        </div>
        <div className="col-8">
          <h5 className="fw-bold">{'title'}</h5>
          <h6 className="text-secondary">From: {'person'}</h6>
        </div>
        <hr />
        <hr />
        <div className="overflow-y-scroll">
          {chats.map((chat, index) => {
            return (<Chattab key={index} name={chat.name} />);
          })}
        </div>
        <div className="d-flex flex-column justify-content-between">
          <div className="overflow-y-scroll">
            <IncomingMessage />
            <OutgoingMessage />
            <IncomingMessage />
            <OutgoingMessage />
            <IncomingMessage />
          </div>
          <ChatBox />
        </div>
      </div>
    </>
  );
};

export default Chat;