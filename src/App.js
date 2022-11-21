import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Error from './pages/error';
import Main from './pages/main';
import Registration from './pages/registration';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
    </div>
  )
};

export default App;
