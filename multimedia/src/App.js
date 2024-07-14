// import logo from './logo.svg';
// import './App.css';


import React from "react";
import LandingPage from "./LandingPage";
import {BrowserRouter as  Router, Route, Routes } from 'react-router-dom';
import NavBar from "./NavBar";



function App() {
  return (
    <div>
        <Router>

<Routes>
 <Route exact path= "/" element= {
   <>
       <NavBar/>
      <LandingPage/>
       </>

 }
 />

 <Route path = "/Home" element ={ <LandingPage/> } />

 <Route path="/Back" element= {<LandingPage/>}/>
 

 


 </Routes>
 </Router> 
    </div>
  );
}

export default App;
