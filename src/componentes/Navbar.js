import React from "react"
import { CartWidget } from "./cartWidget";

export const Navbar = () => {
    return (
    <nav className="lasclases" style= { {background: "violet"}}>
        <a href="/">Buzito</a>
        <a href="/">Correas</a>
        <a href="/">Collares</a>
        <CartWidget/> 
        
    </nav>
    );
};