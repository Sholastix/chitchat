import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar/Navbar';

import Error from './pages/error';
import Login from './pages/login'
import Main from './pages/main';
import Posts from './pages/posts/posts';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/login' element={<Login />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
    </div>
  )
};

export default App;
