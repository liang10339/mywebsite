import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import { About, Resume, Porrtfolio } from './pages';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Route path="/about" exact component={About} />

      </div>
    );
  }
}

export default App;
