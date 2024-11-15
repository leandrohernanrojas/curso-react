import CartWidget from "./cartwidget"
import { Link } from "react-router-dom"

function NavBar() {
    return (
        <header>
            <Link to="/" ><img src="https://firebasestorage.googleapis.com/v0/b/maradiana-78f8a.firebasestorage.app/o/logo-md.png?alt=media&token=89fecdf1-04bb-4931-b162-f76bc635be9e" alt="logo" id="logo" /></Link>
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