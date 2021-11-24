
import React from "react";

import { Navbar } from "./componentes/Navbar";

import ItemCount from "./componentes/ItemCount";


function App() {
return (
<>
   <Navbar />

{}
<ItemCount stock={10} />
</>
);
}

export default App;
