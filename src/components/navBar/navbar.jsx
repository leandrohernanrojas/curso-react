import CartWidget from "./cartwidget"
import { Link } from "react-router-dom"

function NavBar({}) {
    return (
        <header>
            <img src="../img/logo-md.png" alt="logo" id="logo" />
            <h1 id="marca">Maradiana</h1>
            <div className="link-navbar">
                <Link to="/category/beauty" className="link">beauty</Link>
                <Link to="/category/groceries" className="link">groceries</Link>
                <Link to="/category/fragrances" className="link">fragrances</Link>
            </div>
            <CartWidget />
        </header>
    )
}

export default NavBar