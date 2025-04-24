import { useState } from 'react';
import './App.css';

import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Media from './components/Media';
import Contact from './components/Contact';

const App = () => {
  const [content, setContent] = useState('Home');

  return (
    <>
      <div id='page-container'>
        <Header
          setContent={setContent}
        />
        <Main 
          content={content}
        />
      </div>
    </>
  );
}

const Header = ({ setContent }) => {
  return (
    <header>
      <nav>
        <h2 onClick={() => setContent('Home')}>Derek</h2>
        <ul>
          <Tab name='Home' setContent={setContent} />
          <Tab name='About Me' setContent={setContent} />
          <Tab name='Media' setContent={setContent} />
          <Tab name='Contact' setContent={setContent} />
        </ul>
      </nav>
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

const Main = ({ content }) => {
  switch (content) {
    case 'About Me':
      return <AboutMe />
    case 'Media':
      return <Media />
    case 'Contact':
      return <Contact />
    default:
      return <Home />
  };
};

export default App;
