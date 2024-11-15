import { Link } from "react-router-dom"
import { useCarrito } from "../context/cartcontext"

function CartWidget({}) {
    const {cantidadTotal} = useCarrito()
    return (
        <div >
            <Link to={"/carrito"}className="suma-carrito">
            <img src="https://firebasestorage.googleapis.com/v0/b/maradiana-78f8a.firebasestorage.app/o/carrito.png?alt=media&token=301629e5-d76d-4884-9e08-a9de8bbc8f05" />{cantidadTotal()}
            </Link>
        </div>
    )
}
export default CartWidget