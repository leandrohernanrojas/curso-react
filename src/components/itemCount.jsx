import { useState, useContext } from "react"
import { carritoContexto } from "../context/cartcontext"

function ItemCount({ detail }) {
    const [contador, setContador] = useState(1)
    const { sumarAlCarrito } = useContext(carritoContexto)
    const sumar = () => setContador(contador + 1)
    const restar = () => setContador(contador > 1 ? contador - 1 : 1)
    const agregarAlCarrito = () => sumarAlCarrito({ ...detail, cantidad: contador })
    return (
        <div>
            <p>{contador}</p>
            <button onClick={restar}>-</button>
            <button onClick={agregarAlCarrito}>agregar al carrito</button>
            <button onClick={sumar}>+</button>
        </div>
    )
}

export default ItemCount