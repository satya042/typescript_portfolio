import {useState} from 'react';
import React from 'react';
import { CssBaseline, ThemeProvider,useTheme } from "@mui/material";
import './App.css';
import { ColorModeContext, useMode } from "./theme";
import Navbar from './components/navbar';
import Home from './components/home';

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
        </main>
       </div>
      </CssBaseline>
    </ThemeProvider>
  </ColorModeContext.Provider>
  );
}

export default App;


// import React from 'react';

// function App() {
 
//   return (
   
//        <div className='app'>
//         hello
//        </div>
   
//   );
// }

// export default App;



