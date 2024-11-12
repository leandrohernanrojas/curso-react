import { useState, useEffect } from "react"
import ItemList from "./itemList"
import { useParams } from "react-router-dom"
import Loader from "../loader"
import { getProductos, getCategoriaProductos } from "../../firebase/db"



function ItemListConteiner() {
    const [items, setItems] = useState([])
    const { categorias} = useParams()

    useEffect(() => {
        if(!categorias){
            getProductos()
            .then(res => setItems(res))
    }else{getCategoriaProductos(categorias)
        .then(res => setItems(res))
        
    }

    }, [categorias])


    return (
        <div id="ItemListConteiner">
            <h2>Productos:</h2>
            {items.length > 0 ? <ItemList item={items} /> : <Loader/>}
        </div>
    )
}
export default ItemListConteiner