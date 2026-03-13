import './App.css';
import Nav from './components/Nav';
import Chat from './pages/Chat';

const App = () => {
  return (
    <div className='d-flex flex-row vh-100'>
      <Nav />
      <div className='vw-100 page'>
        <Chat />
      </div>
    </div>
  )
}

export default App
