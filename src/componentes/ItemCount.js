import React, { useState } from "react";


function ItemCount({ stock }) {

    const [count, setCount] = useState(1);

    const agregar = () => {
    count <stock && setCount(count + 1);
    };

const restar = () => {
    1 < count && setCount(count - 1);
};
return (
<>
    <button onClick={agregar}> + </button>
    <h1>{count} </h1>
    <button onClick={restar}> - </button>
</>
);
}
export default ItemCount; 


