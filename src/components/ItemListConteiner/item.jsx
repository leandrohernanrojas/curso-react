import { Link } from "react-router-dom"

function Item({ item }) {
    return (
        <div className="item">
            <img src={item.images} />
            <p>{item.title}</p>
            <p>{item.category}</p>
            <p>{item.description}</p>
            <Link to={`/item/${item.id}`}>ver mas</Link>
        </div>
        // <>
        // <p>{item.nombre}</p>
        // <p>{item.categoria}</p>
        // </>
    )
}
export default Item