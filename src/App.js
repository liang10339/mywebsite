import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { About, Resume, Portfolio } from './pages';
import { Navbar } from './components';

class App extends React.Component {
  render() {
    return (
      <div className="container">

        <Navbar />

        <Switch>

          <Route path="/" exact component={About} />
          <Route path={`${process.env.PUBLIC_URL}/`} component={About} />
          <Route path="/about" component={About} />
          <Route path="/resume" component={Resume} />
          <Route path="/portfolio" component={Portfolio} />

        </Switch>

      </div>
    );
  }
}

export default App;
