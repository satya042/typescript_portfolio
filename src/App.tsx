// import React from 'react';
// import { CssBaseline, ThemeProvider } from "@mui/material";
// import { ColorModeContext, useMode } from "./theme";
// import Navbar from './components/navbar';
// import Home from './components/home';
// import Footer from './components/footer';
// import './App.css';
// import {Route,Routes} from 'react-router';
// import About from './components/About';
// import TechStack from './components/TechStack';
// //import OpenSource from './components/OpenSource';
// //import {useTheme} from "@mui/material"


// function App() {
//   const [theme, colorMode] = useMode();
//   //const theme = useTheme();
//   return (
//     <ColorModeContext.Provider value={colorMode}>
//     <ThemeProvider theme={theme}>
//       <CssBaseline>
//        <div className='app'>
//         <main className='content'>
//           <div>
//           <Navbar/> 
//           </div>    
//           <div className='satya'>         
//           <Routes> 
//           <Route path='/' element={<Home/>}></Route>
//           <Route path="/About" element={<About/>}/> 
//           <Route path="/TechStack" element={<TechStack/>}/> 
//           {/* <Route path="/OpenSource" element={<OpenSource/>}/>  */}
//           </Routes>   
//           </div>
//           <Footer/> 
//         </main>
//        </div>
//       </CssBaseline>
//     </ThemeProvider>
//   </ColorModeContext.Provider>
//   );
// }

// export default App;


import React from 'react';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Navbar from './components/navbar';
import Home from './components/home';
import Footer from './components/footer';
import './App.css';
import { Route, Routes } from 'react-router';
import About from './components/About';
import TechStack from './components/TechStack';

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <div className='app'>
            <header>
              <Navbar />
            </header>
            <main className='content'>
              <div className='page-content'>
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path="/About" element={<About />} />
                  <Route path="/TechStack" element={<TechStack />} />
                </Routes>
              </div>
              <Footer />
            </main>
          </div>
        </CssBaseline>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

