import Item from "./item";
function ItemList ({item}){
    return(
        <>
        {item.map (item=> <Item item={item} key={item.id}/>)}
        </>
    )
}

export default ItemList