import React from 'react';
import { CssBaseline, ThemeProvider,useTheme } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Navbar from './components/navbar';
import Home from './components/home';
import Highlights from './components/highlights';
import Footer from './components/footer';
import './App.css';
import {Route,Routes} from 'react-router';
import About from './components/About';
import OpenSource from './components/OpenSource';
import TechStack from './components/TechStack';
import Projects from './components/projects';

function App() {
  const [theme, colorMode] = useMode();
  //const theme = useTheme();
  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline>
       <div className='app'>
        <main className='content'>
        <Navbar/> 
        <Home/>
        <Projects/> 
           {/*
          <Highlights/>
          <Footer/>   */}
          <Routes>
         
          <Route path="/About" element={<About/>}/> 
          <Route path="/OpenSource" element={<OpenSource/>}/> 
          <Route path="/TechStack" element={<TechStack/>}/> 
          </Routes>   
           
        </main>
       </div>
      </CssBaseline>
    </ThemeProvider>
  </ColorModeContext.Provider>
  );
}

export default App;
