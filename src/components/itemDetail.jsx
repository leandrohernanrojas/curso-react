import ItemCount from "./itemCount"

function ItemDetail({ detail }) {
    return (
        <div className="item">
            <img src={detail?.img} />
            <h3>{detail?.nombre}</h3>
            <h4>{detail?.descripcion}</h4>
            <p>stock:{detail?.stock}</p>
            <p>${detail?.precio}</p>
            <ItemCount detail={detail} />
        </div>

    )
}
export default ItemDetail