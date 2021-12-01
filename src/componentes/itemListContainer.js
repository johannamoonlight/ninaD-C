import { useEffect, useState } from "react"
import { somethingWillhappen } from "./promises";
import { ItemList} from "./ItemList";
import{useParams} from "react-router-dom";

export const ItemListContainer = ({greeting}) => {
    const [items, setItems] = useState ([])
    const {catId} = useParams ();

useEffect(() => {
    setLoading (true)
    somethingWillhappen().then(resultado =>
    catId ? setItems(resultado.filter(item => item.category === catId))
    :
    setItems(resultado)
    )
    .finally(() => setLoading (false))


},[catId])

    return loading ? <h1> CARGANDO...</h1>: <ItemList items={items}/>

};