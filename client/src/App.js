import React from 'react'
import logo from './logo.svg';
import './App.css';
import NavMenu from "./components/navmenu"
import {getUserName,isSignedIn} from "./helpers/storagefunctions"
function App() {
  return (
    <div className="App">
      <NavMenu username={getUserName()} isSigned={isSignedIn()}/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Home page
        </p>
      </header>
    </div>
  );
}

export default App;
