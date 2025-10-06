import { useState } from 'react';
import './App.css';

import Modal from './components/Modal';
import Header from './components/Header';
import Main from './components/Main';

const App = () => {
  const [content, setContent] = useState('Portfolio');
  const [visibility, setVisibility] = useState('hidden');

  return (
    <div id="viewport">
      <Header setContent={setContent} setVisibility={setVisibility} />
      <Main content={content} setContent={setContent} />
      <Modal visibility={visibility} setVisibility={setVisibility} />
    </div>
  );
};

export default App;
