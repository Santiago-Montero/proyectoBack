import { useContext } from "react"
import CartContext from "../../../../context/Cart.context"
import './cart.css'
const Cart = () => {
    const { cart } = useContext(CartContext)
    return(
        <>
            <div className="cart">
                <img src="https://i.imgur.com/ZCKONmJ.png" />
                <h1> { cart.length } </h1>
            </div>
        </>
    )
}

export default Cart