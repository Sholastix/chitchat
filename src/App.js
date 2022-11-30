import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar/Navbar';

import Error from './pages/error/error';
import Login from './pages/login/login'
import Main from './pages/main/main';
import CreatePost from './pages/post/post-create';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/login' element={<Login />} />
          <Route path='/post-create' element={<CreatePost />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
    </div>
  )
};

export default App;
