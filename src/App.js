import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';


function App() {
  // eslint-disable-next-line no-unused-vars
  const [tabs] = useState([
    {
      name: 'Contact',
      description: 'Please submit your information and I will get back to you as soon as possible',
    },
    { name: 'Portfolio', description: 'A showcase of some of my work. You can find more in my GitHub' },
    { name: 'Resume', description: 'Here are my technical sklills' }   
  ]);

  // const [currentTab, setCurrentTab] = useState();

  return (
    <div>
      <Header/>
      <main>
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
