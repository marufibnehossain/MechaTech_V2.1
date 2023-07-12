import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Nav from './components/Shared/Nav';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Nav />}>
            <Route index element={<Home />} />
            
          </Route>
        </Routes>
      </BrowserRouter>   
    </div>
  );
}

export default App;
