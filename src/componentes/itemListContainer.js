import { useEffect, useState } from "react"
import { somethingWillhappen } from "./promises";
import { ItemList} from "./ItemList";
import{useParams} from "react-router-dom";

export const ItemListContainer = ({greeting}) => {
    const [items, setItems] = useState ([])
    const {catId} = useParams ();

useEffect(() => {

somethingWillhappen().then(resultado =>
    catId ? setItems(resultado.filter(item => item.category === catId))
    :
    setItems(resultado)

)
},[catId])

    return  <ItemList items={items}/>

};