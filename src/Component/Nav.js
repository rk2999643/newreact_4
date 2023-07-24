import React from "react";
import Student from "./Student";
import Home from "./Home";
import Contactus from "./Contactus";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LinkT from "./LinkT";

function Nav(){
    return(
        <>
           <BrowserRouter>
               <LinkT/>
               <Routes>
                   <Route path="/" element={<Home/>}/>
                   <Route path='/student' element={<Student/>}/>
                   <Route path='/contact' element={<Contactus/>}/>
               </Routes>
           </BrowserRouter>

        </>
    )
}
export default Nav