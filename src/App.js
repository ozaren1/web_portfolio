import React from 'react';
import Container from './components/Container';
import Portfolio from './components/Portfolio';
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/Main";
import CardDetail from "./components/CardDetail";

function App() {
  return (
    <>
    <Container>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path='/portfolio' element={<Portfolio />}/>
        <Route path='/portfolio/:id' element={<CardDetail/>} />
      </Routes>
    </Container>
   </>
  );
 
}


export default App;
