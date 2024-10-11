import { useState, useEffect } from "react"
import {productos} from "../../data/productos"
import ItemList from "./itemList"


function ItemListConteiner( ) {
const [items, setItems] = useState([])
const getProducts = () => new Promise((resolve) => {
    setTimeout ( () => {
        resolve (productos)
    },3000)
})
useEffect( () => {
    getProducts().then(resolve=> setItems(resolve))
},[])


    return (
        <div id="ItemListConteiner">
            <ItemList item={items}/>
        </div>
    )
}
export default ItemListConteiner