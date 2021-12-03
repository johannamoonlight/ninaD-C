import { useState } from "react"
import { Link } from "react-router-dom"
import ItemCount from "./ItemCount"
import { Link } from "react-router-dom"

export const ItemDetail = ({ item }) => {


    const [compraHecha,setCompraHecha] = useState(false)

    const onAdd = (contador) => {
        console.log(contador)
        setCompraHecha(true)

    }

    return <>
        <h1> {item.product1}</h1>
        <h2> {item.color}    </h2>
        <img src={item.imagen} alt={item.product1} style={{ height: "600px", width: "800px" }} />

        {compraHecha :
        <div><Link to="/cart">Terminar compra </Link>
        </div>
        ?
        <div> 
        <ItemCount  stock ={10}   onAdd ={onAdd}/>
        </div>
        }
    </>
}