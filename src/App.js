import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import { About, Resume, Porrtfolio, Portfolio } from './pages';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Route path="/about" exact component={About} />
        <Route path="/resume" exact component={Resume} />
        <Route path="/portfolio" exact component={Portfolio} />

      </div>
    );
  }
}

export default App;
