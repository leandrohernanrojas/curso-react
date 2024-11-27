
import { useCarrito } from "../context/cartcontext"

export function CartItem({ carrito }) {
    const { getTotal, borrarProducto, borrar} = useCarrito()
    
    return (
        <div id="contenedorcartitem">
            {carrito.map(producto => (
                <div key={producto.id} className="cartitem">
                    <img src={producto.img} />
                    <p>{producto.nombre} x {producto.cantidad}: {producto.precio * producto.cantidad}  </p>
                    <button type="submit" onClick={() => borrarProducto(producto.id)}>eliminar producto</button>
                </div>
            ))}
            <button type="submit" onClick={() => borrar(carrito)}>Vaciar Carrito</button>
            <div className="total-a-pagar">
                <p>Total a pagar: {getTotal({ carrito })}</p>
            </div>
        </div>
    )

}