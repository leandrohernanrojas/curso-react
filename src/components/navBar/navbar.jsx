import Button from "../button"
import CartWidget from "./cartwidget"

function NavBar({ logo, marca }) {
    return (
        <header>
            <img src={logo} alt="logo" id="logo" />
            <h1 id="marca">{marca}</h1>
            <div className="boton-navbar">
            <Button
                label="cartera"
                
            />
            <Button
                label="billetera"
                
            />
            <Button
                label="cartuchera"
                
            />
            </div>
            <CartWidget
                carrito={"../img/carrito.png"} />
        </header>
    )
}

export default NavBar