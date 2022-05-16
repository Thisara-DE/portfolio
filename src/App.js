import React, { useState, useEffect } from 'react';
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio'
import Resume from './components/Resume';
import { capitalizeFirstLetter } from './utils/helpers';



function App() {
  // eslint-disable-next-line no-unused-vars
  const [tabs] = useState(['about','portfolio','resume','contact']);

  const [currentTab, setCurrentTab] = useState(tabs[0]);

  useEffect(() => {
    // updating the document title to match the current tab
    document.title = `Thisara-DE - ${capitalizeFirstLetter(currentTab)}`
  })

  return (
    <div>
      <header>
        <Header />
        <Nav tabs={tabs} currentTab={currentTab} setCurrentTab={setCurrentTab}/>
      </header>
      <main>        
        {currentTab === 'about' && <About />}
        {currentTab === 'contact' && <Contact />}
        {currentTab === 'portfolio' && <Portfolio />}
        {currentTab === 'resume' && <Resume />}
        
      </main>
      <Footer />
    </div>
  );
}

export default App;
