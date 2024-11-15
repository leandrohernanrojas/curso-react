import { useCarrito } from "../context/cartcontext"
import { serverTimestamp } from "firebase/firestore"
import { crearOrden } from "../firebase/db"
import Swal from 'sweetalert2'
import { CartItem } from "./cartitem"
import { CheckoutForm } from "./checkoutForm"
import { Link } from "react-router-dom"




function Carrito() {
    const {carrito,getTotal,borrarCarrito} = useCarrito()
    const handelSubmit = async (e) => {
        e.preventDefault()
        const form = e.target
        const [nombre, email, telefono] = form
        const ordenDeCompra ={
            buyer: {nombre:nombre.value, email:email.value, telefono:telefono.value},
            producto: carrito,
            date: serverTimestamp(),
            total:getTotal(),
            
        }
        const idUsuario = await crearOrden(ordenDeCompra)
        Swal.fire({
            text: "Tu ID de compra es:" + idUsuario,
            title: 'GRACIAS  PRO TU COMPRA',
        })
    }
    
    return(
        <div>
        <CartItem carrito={carrito}></CartItem>
        
        <CheckoutForm handelSubmit={handelSubmit}/>
            {/* <div>
                <form onSubmit={handelSubmit} >
                    <input type="text" placeholder="nombre" required/>
                    <input type="email" placeholder="E-mail" required/>
                    <input type="text" placeholder="telefono" required/>
                    <button type="submit">finalizar compra{}</button>
                </form>
            </div> */}
        </div>
    )
}
export default Carrito