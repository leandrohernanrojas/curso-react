import CartWidget from "./cartwidget"
import { Link } from "react-router-dom"

function NavBar() {
    return (
        <header>
            <Link to="/" ><img src="../img/logo-md.png" alt="logo" id="logo" /></Link>
            <h1 id="marca">Maradiana</h1>
            <div className="link-navbar">
                <Link to="/categoria/cartera" className="link">carteras</Link>
                <Link to="/categoria/cartuchera" className="link">cartucheras</Link>
                <Link to="/categoria/llavero" className="link">llaveros</Link>
            </div>
            <CartWidget />
        </header>
    )
}

export default NavBar