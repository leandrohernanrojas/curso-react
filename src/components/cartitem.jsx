import { useCarrito } from "../context/cartcontext"

export function CartItem({ carrito }) {

    const { getTotal,borrarCarrito } = useCarrito()
    return (
        <div id="contenedorcartitem">
            {carrito.map(producto => (
                <div key={producto.id} className="cartitem">
                    <img src={producto.img} alt="" />
                    <p>{producto.nombre} x {producto.cantidad}: {producto.precio * producto.cantidad}  </p>
                    {/* <button type="button" oneClick={() => borrarCarrito(producto.id)}>mdknafnlkfn</button> */}
                </div>
                ))}
            <div className="total-a-pagar">
                <p>Total a pagar: {getTotal({carrito })}</p>
            </div>
            <button type="submit">mdknafnlkfn{borrarCarrito({carrito})}</button>
        </div>
    )

}