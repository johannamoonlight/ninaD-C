import React from { UseContext } "react"
import {CartContext } from "../context/CartContext"

export const CartView = () => {
    const {cart } = useContext (CartContext)
    console.log ("En el carrito", cart)

    /*
    cantidad : 7

    item:
    category:"red"
    id: "1"
    imagen: "/imagenes/correas.jpg"
    product1: "accesorios"
    precio: 500
    */

    return <>
    {cart.map(i => {

        return <> 
        <h1>{i.item.product1}</h1>
        <h2>Precio indivudual : ${i.item.precio}</h2>
        <h2>Cantidad: {i.cantidad}</h2>
        <h2>SubTotal:{i.cantidad = i.item.precio} </h2>
        <img src ={i.item.imagen} alt = {i.item.product1} style ={{height: "50px", width:"50px"}}/>
    
    </>
    }
    )}
    </>
}

