import React from 'react';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Todos from './components/Todos';
import Header from './components/Header';

function App(props) {
  return (
    <div>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/:userId" element={<Todos/>} />
      </Routes>
    </div>
  );
}

export default App;
