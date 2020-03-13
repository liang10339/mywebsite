import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { About, Resume, Portfolio } from './pages';
import { Navbar } from './components';

class App extends React.Component {
  render() {
    return (
      <div className="container">

        <Navbar />

        <Route path="/" exact component={About} />
        <Route path="/about" exact component={About} />
        <Route path="/resume" exact component={Resume} />
        <Route path="/portfolio" exact component={Portfolio} />

      </div>
    );
  }
}

export default App;
