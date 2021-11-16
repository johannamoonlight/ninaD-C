
import {fragment,useState} from "React";



function App () {

const  [number, setNumber]= useState (10)

const incrementar = () => { 
  setNumber(number + 1)
}

const disminuir = () => {
  setNumber(number-1)
}



  return (
    <fragment>
      <button onClick ={onClick}></button>
    </fragment>

  )
}

export default App;