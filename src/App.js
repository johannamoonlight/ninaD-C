
import React from "react";
import { ItemListContainer } from "./componentes/ItemListContainer";
import { Navbar } from "./componentes/Navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./componentes/Diseño.css";


function App() {
   return (
   <BrowserRouter>
   <Navbar />

   <Routes>
   <Route path= "/" element ={<ItemListContainer /> } />
   <Route path= "/category/:catId" element= {<ItemListContainer /> } />
   </Routes>
</BrowserRouter>
);
}

export default App;
