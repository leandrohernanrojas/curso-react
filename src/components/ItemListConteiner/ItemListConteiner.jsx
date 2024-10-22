import { useState, useEffect } from "react"
import ItemList from "./itemList"
import { useParams } from "react-router-dom"



function ItemListConteiner(h2) {
    const [items, setItems] = useState([])
    const { id } = useParams()

    // const getProducts = () => new Promise((resolve) => {
    //     setTimeout(() => {
    //         resolve(productos)
    //     }, 1000)
    // })
    useEffect(() => {
        const url = 'https://dummyjson.com/products'
        const urlCategory = `https://dummyjson.com/products/category/${id}`

        fetch(id ? urlCategory : url)
            .then(res => res.json())
            .then(res => setItems(res.products))

        // const c = `/items/${Item.id})`
        // getProducts(id ? c : getProducts)
        //     .then(resolve => setItems(resolve))

    }, [id])


    return (
        <div id="ItemListConteiner">
            <h2>Productos:</h2>
            <ItemList item={items} />
        </div>
    )
}
export default ItemListConteiner