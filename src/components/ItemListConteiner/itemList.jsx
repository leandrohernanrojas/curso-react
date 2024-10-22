import Item from "./item";
function ItemList({ item }) {
    return (
        <div className="itemList">
            {item.map(item => <Item item={item} key={item.id} />)}
        </div>
    )
}

export default ItemList