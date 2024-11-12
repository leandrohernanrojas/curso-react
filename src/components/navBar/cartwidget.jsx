import { Link } from "react-router-dom"
import { useCarrito } from "../../context/carritoContexto"

function CartWidget({}) {
    const {cantidadTotal} = useCarrito()
    return (
        <div >
            <Link to={"/carrito"}className="suma-carrito">
            <img src="../img/carrito.png" />{cantidadTotal()}
            </Link>
        </div>
    )
}
export default CartWidget