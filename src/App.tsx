import React from 'react';
import './App.css';
import { PureInboxScreen } from './components/InboxScreen';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <PureInboxScreen />
    </div>
  );
}

export default App;
