import { Link } from "react-router-dom"

function Item({ item }) {
    return (
        item.stock === 0 ? "" : <div className="item">
            <img src={item?.img} />
            <h3>{item?.nombre}</h3>
            <h4>{item?.categoria}</h4>
            <p>{item?.descripcion}</p>
            <Link to={`/productos/${item?.id}`}>ver mas</Link>
        </div>
    )
}
export default Item
