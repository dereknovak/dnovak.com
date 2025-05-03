import { useState } from 'react';
import './App.css';

import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Media from './components/Media';
import Headshot from './components/Headshot';
import Nav from './components/Nav';
import Info from './components/Info';
import Modal from './components/Modal';

const App = () => {
  const [content, setContent] = useState('Home');
  const [visibility, setVisibility] = useState('hidden');

  return (
    <>
      <Header
        setContent={setContent}
        setVisibility={setVisibility}
      />
      <Main 
        content={content}
        setContent={setContent}
      />
      <Modal
        visibility={visibility}
        setVisibility={setVisibility}
      />
    </>
  );
}

const Header = ({ setContent, setVisibility }) => {
  return (
    <header>
      <Headshot />
      <Info />
      <Nav
        setContent={setContent}
        setVisibility={setVisibility}
      />
    </header>
  );
};

const Tab = ({ name, setContent }) => {
  const handleTabClick = () => {
    setContent(name);
  }

  return (
    <li onClick={handleTabClick}>{name}</li>
  );
};

const Main = ({ content, setContent }) => {
  let pageContent;

  switch (content) {
    case 'About Me':
      pageContent = <AboutMe />
      break;
    case 'Media':
      pageContent = <Media />
      break;
    case 'Contact':
      pageContent = <Contact />
      break;
    default:
      pageContent = <Home />
  };

  return (
    <main>
      <div id='main-divider'>
        <nav className='tabs'>
          <ul>
            <Tab name='Home' setContent={setContent} />
            <Tab name='About Me' setContent={setContent} />
          </ul>
        </nav>
        <div id='main-content'>
          {pageContent}
        </div>
      </div>
    </main>
  );
};

export default App;
