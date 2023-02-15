import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Header from './app/Components/Header';

function App() {
  return (
    <div className="app">
       <Router>
        <>
          <Routes>
            <Route path="/" element={
            <Header />
            }>
            </Route>
          </Routes>
        </>
       </Router>
    </div>
  );
}

export default App;
