export function CheckoutForm({ handelSubmit }) {
    return (

        <form onSubmit={handelSubmit} className="formcart">
            <input type="text" placeholder="nombre" required />
            <input type="email" placeholder="E-mail" required />
            <input type="text" placeholder="telefono" required />
            <button type="submit">finalizar compra{ }</button>
        </form>
    )
}