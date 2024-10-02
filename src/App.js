import React from 'react';
import Container from './components/Container';
import Portfolio from './pages/Portfolio';
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/Main";
import CardDetail from "./components/CardDetail";
import Header from './components/Header';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path='/portfolio' element={<Portfolio />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/portfolio/:id' element={<CardDetail/>} />
      </Routes>
      <Footer/>
   </>
  );
 
}


export default App;
