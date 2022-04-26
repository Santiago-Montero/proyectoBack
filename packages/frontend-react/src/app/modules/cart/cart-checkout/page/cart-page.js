import { useContext } from "react"
import CartContext from "../../../../context/Cart.context"
import UserContext from "../../../../context/User.context"
import { buyCart } from "../../cart.service"
import CartComponent from "../components/cart-component"
import './cart-page.css'

const CartPage = () => {
    const { cart, price } = useContext(CartContext)
    const { user } = useContext(UserContext)
    const buy = () => {
        console.log(user)
        buyCart(user, cart, price)
        .then(() => console.log('compro...'))
        .catch(err => console.log(err))
    }
    return(
        <>
            <div className="box">
                <div className="box-cart"> 
                    <h1> Cart </h1>
                    <h1> Price : $ {price} </h1>

                    <div className="box-cart-products"> 
                        { cart.length > 0 ? cart.map( (product, index) =>  <CartComponent key={index} product={product}/>) : <h1> The cart is empty... </h1>}
                    </div>
                </div>
                { cart.length > 0 && <button className="button is-link" onClick={() => buy()}> Buy </button> }
            </div>
        </>
    )
}

export default CartPage