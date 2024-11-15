import { carritoContexto } from "./cartcontext"
import { useState } from "react"

function CarritoProveedor({ children }) {
    const [carrito, setCarrito] = useState([])

    const sumarAlCarrito = producto =>{
        if(carrito.some(articulo=> articulo.id === producto.id)){
            const carritoActualizado = carrito.map(articulo =>{
                if(articulo.id === producto.id){
                    articulo.cantidad = producto.cantidad +articulo.cantidad
                }return articulo
            })
            setCarrito(carritoActualizado)
        }else{
            setCarrito( [...carrito, producto] )}
        }
        
        
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

    // const borrarCarrito = (id) => {
    //     const carritoActualizado = carrito.filter(articulo => articulo.id !== id)
    //     setCarrito(carritoActualizado)
    // }
    

    return (
        <carritoContexto.Provider value={{carrito,borrarCarrito, sumarAlCarrito,cantidadTotal,getTotal }}>
            {children}
        </carritoContexto.Provider>
    )
}
export default CarritoProveedor