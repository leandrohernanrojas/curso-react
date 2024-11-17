import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import ItemDetail from "./itemDetail"

import { getProductoId } from "../firebase/db"


function ItemDetailConteiner() {
    const [details, setDetail] = useState([])
    const { id } = useParams()

    useEffect(() => {
        getProductoId(id)
            .then(res => setDetail(res))
    }, [id])

    return (
        <div>
            <ItemDetail detail={details} />
        </div>


    )
}
export default ItemDetailConteiner