import { useCarrito } from "../context/carritoContexto"
import { serverTimestamp } from "firebase/firestore"
import { crearOrden } from "../firebase/db"
import { Link } from "react-router-dom"


function Carrito() {
    const l = () =>{
        <Link to="/"></Link>
    }
    const {carrito,getTotal} = useCarrito()
    const handelSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const [nombre, email, telefono] = form
        const ordenDeCompra ={
            buyer: {nombre:nombre.value, email:email.value, telefono:telefono.value},
            producto: carrito,
            date: serverTimestamp(),
            total:getTotal(),
            
        }
        crearOrden(ordenDeCompra)
    }
    return(
        <div >
            {carrito.map(producto =>(
                <div key={producto.id}>
                    <p>{producto.nombre} x {producto.cantidad}</p>
                </div>
            ))}
            <div>
                <form onSubmit={handelSubmit} >
                    <input type="text" placeholder="nombre" required/>
                    <input type="email" placeholder="E-mail" required/>
                    <input type="text" placeholder="telefono" required/>
                    <button type="submit">finalizar compra{}</button>
                </form>
            </div>
        </div>
    )
}
export default Carrito