
import './App.css';
import {Navbar} from "./componentes/Navbar";
import {ItemListContainer} from "./componentes/itemListContainer"


function App() {
  return (
    <>
    <Navbar/>
    <ItemListContainer greeting ={"Hola mundo"}/> 
    </>
  );
}

export default App;
