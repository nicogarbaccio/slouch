import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from './firebase';
import Header from './app/Components/Header';
import Sidebar from './app/Components/Sidebar';
import Chat from './app/Components/Chat';
import Login from './app/Components/Login';
import styled from 'styled-components';
import { BeatLoader } from 'react-spinners';

function App() {
  const [user, loading] = useAuthState(auth);

  if ( loading ) {
    return (
      <AppLoading>
        <AppLoadingContents>
          <img
            src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
            alt="Loading"
          />
        <BeatLoader color="#36d7b7" />
        </AppLoadingContents>
      </AppLoading>
    )
  }

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login /> 
          ) : (
            <>
            <Header />
              <AppBody>
                <Sidebar />
                <Routes>
                  <Route path="/" element={<Chat />} />
                </Routes>
              </AppBody>
            </>
          )}
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;

const AppLoading = styled.div` 
    display: grid;
    height: 100vh;
    place-items: center;
    width: 100%;
`;  

const AppLoadingContents = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > img {
    height: 100px;
    padding: 20px;
    margin-bottom: 40px;
  }
`; 
