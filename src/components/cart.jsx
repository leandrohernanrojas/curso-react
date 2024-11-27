import { useCarrito } from "../context/cartcontext"
import { serverTimestamp } from "firebase/firestore"
import { crearOrden } from "../firebase/db"
import Swal from 'sweetalert2'
import { CartItem } from "./cartitem"
import { CheckoutForm } from "./checkoutForm"
import { useNavigate } from "react-router-dom"




function Carrito() {
    const  link =  useNavigate()
    const {carrito,getTotal,borrar} = useCarrito()
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
        confirmButtonText: "Save",
        }).then((result) => {
            if (result.isConfirmed) {
            link("/")
            borrar()
            } 
          });
    }
    
    return(
        <div>
        <CartItem carrito={carrito}></CartItem>
        <CheckoutForm handelSubmit={handelSubmit}/>
        </div>
    )
}
export default Carrito