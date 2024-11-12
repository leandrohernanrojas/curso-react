import { carritoContexto } from "./carritoContexto"
import { useState } from "react"

function CarritoProveedor({ children }) {
    const [carrito, setCarrito] = useState([])
    const agregarAlCarrito = producto => setCarrito([...carrito, producto])
    const cantidadTotal = () => {
        const cantidadProducto = carrito.map(producto => producto.cantidad)
        const total = cantidadProducto.reduce(
            (acc, current) => acc + current,
            0);
            return total
    }
    const getTotal = () =>{
        const precioProducto = carrito.map(producto => producto.precio*producto.cantidad)
        const total = precioProducto.reduce((acc, current) => acc + current,0);
            return total
    }

    const borrarCarrito = () => ([])

    return (
        <carritoContexto.Provider value={{carrito, agregarAlCarrito,cantidadTotal,getTotal }}>
            {children}
        </carritoContexto.Provider>
    )
}
export default CarritoProveedor