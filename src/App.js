import React from 'react';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import { About, Resume, Portfolio } from './pages';
import { Navbar } from './components';

class App extends React.Component {
  render() {
    return (
      <div className="container">

        <Navbar />

        <Routes>

          <Route path="/" exact element={<About />} />
          <Route path={`${process.env.PUBLIC_URL}/`} element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />

        </Routes>

      </div>
    );
  }
}

export default App;
