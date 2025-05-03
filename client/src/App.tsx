import { useState } from 'react';
import './App.css';

import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Media from './components/Media';
import Contact from './components/Contact';
import Headshot from './components/Headshot';
import Nav from './components/Nav';
import Info from './components/Info';

const App = () => {
  const [content, setContent] = useState('Home');

  return (
    <>
      <Header
        setContent={setContent}
      />
      <Main 
        content={content}
        setContent={setContent}
      />
    </>
  );
}

const Header = ({ setContent }) => {
  return (
    <header>
      <Headshot />
      <Info />
      <Nav setContent={setContent} />
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
