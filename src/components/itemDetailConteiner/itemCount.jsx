import { useState, useContext } from "react"
import { carritoContexto } from "../../context/carritoContexto"

function ItemCount({ detail }) {
    const [contador, setContador] = useState (1)
    const { agregarAlCarrito } = useContext(carritoContexto)
    const sumar = () => setContador (contador +1)
    const restar = () => setContador (contador > 1 ? contador - 1 : 1) 
    const sumarAlCarrito = () => agregarAlCarrito({...detail, cantidad : contador})
    return (
        <div>
            <p>{contador}</p>
            <button onClick={restar}>-</button>
            <button onClick={sumarAlCarrito}>agregar al carrito</button>
            <button onClick={sumar}>+</button>
        </div>
    )
}

export default ItemCount