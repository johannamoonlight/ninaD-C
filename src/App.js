

import React from "react";
import { ItemListContainer } from "./componentes/itemListContainer";
import { Navbar } from "./componentes/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {ItemDetailContainer} from './componentes/ItemDetailContainer';
import "./componentes/Diseño.css";

function App() {
   return (
      <BrowserRouter>
         <Navbar />

         <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:catId" element={<ItemListContainer />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
         </Routes>

      </BrowserRouter>
   );
}

export default App;
