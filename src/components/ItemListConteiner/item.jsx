import { Link } from "react-router-dom"

function Item({ item }) {
    return (
        <div className="item">
            <img src={item.images} />
            <h3>{item.title}</h3>
            <h4>{item.category}</h4>
            <p>{item.description}</p>
            <Link to={`/item/${item.id}`}>ver mas</Link>
        </div>
        //   <>
        //  <p>{item.nombre}</p>
        //  <p>{item.categoria}</p>
        //  </> 
    )
}
export default Item
