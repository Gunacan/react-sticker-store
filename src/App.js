import React from 'react';
import './App.css';

import Header from './components/Header'
import LandingPage from './components/LandingPage';

function App() {
  return (
    <div className="App">
      <Header />  
      <main className='container'>
        <LandingPage />
      </main>
    </div>
  );
}

export default App;
