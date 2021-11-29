import { useEffect, useState } from "react"
import { somethingWillhappen } from "./promises";
import { ItemList} from "./ItemList";
export const ItemListContainer = ({greeting}) => {
const [items, setItems] = useState([])  

somethingWillhappen().then(resultado => setItems(resultado)) 
 
    return  <ItemList items={items}/>

};