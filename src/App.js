import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from './app/Components/Header';
import Sidebar from './app/Components/Sidebar';
import Chat from './app/Components/Chat';
import styled from 'styled-components';

function App() {
  return (
    <div className="app">
       <Router>
        <>
          <Header />
          <AppBody>
            <Sidebar />
            <Routes>
              <Route path="/" element={<Chat />}></Route>
            </Routes>
          </AppBody>
        </>
       </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
