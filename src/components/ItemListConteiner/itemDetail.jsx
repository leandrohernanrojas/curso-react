import ItemCount from "./itemCount"

function ItemDetail({ detail }) {
    return (
        <div>
            <img src={detail?.images} />
            <p>{detail?.description}</p>
            <p>stock:{detail?.stock}</p>
            <p>${detail?.price}</p>
            <ItemCount/>
        </div>

    )
}
export default ItemDetail