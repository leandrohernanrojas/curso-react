import ItemCount from "./itemCount"

function ItemDetail({ detail }) {
    return (
        <div className="item">
            <img src={detail?.images} />
            <h3>{detail?.title}</h3>
            <h4>{detail?.description}</h4>
            <p>stock:{detail?.stock}</p>
            <p>${detail?.price}</p>
            <ItemCount />
        </div>

    )
}
export default ItemDetail