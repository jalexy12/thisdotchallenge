import React from 'react';
import logo from './logo.svg';
import GithubSearch from './containers/github-search';
import basicCache from './basic-cache';
import './App.css';

function App() {
  return (
    <div className="App">
      <GithubSearch cache={basicCache} />
    </div>
  );
}

export default App;
