import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import ItemDetail from "./itemDetail"

function ItemDetailConteiner() {
    const [detail, setDetail] = useState()
    const { id } = useParams()
    useEffect(() => {

        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(res => setDetail(res))
    }, [id])
    return (
        <ItemDetail detail={detail} />

    )
}
export default ItemDetailConteiner