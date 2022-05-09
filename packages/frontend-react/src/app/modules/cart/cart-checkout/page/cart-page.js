import { useContext } from "react"
import CartContext from "../../../../context/Cart.context"
import UserContext from "../../../../context/User.context"
import { buyCart } from "../../cart.service"
import { generateOrder } from "../../order.service"
import CartComponent from "../components/cart-component"
import './cart-page.css'

const CartPage = () => {
    const { cart, price } = useContext(CartContext)
    const { user } = useContext(UserContext)
    const buy = () => {
        buyCart(user, cart, price)
        .then((cart) => {
            generateOrder(user.username, cart.price, cart).then().catch( err => console.log(err))
        } )
        .catch(err => console.log(err))
    }
    return(
        <>
            <div className="box">
                <div className="box-cart"> 
                    <div className="box-cart-info">
                        <p className="title"> Cart </p>
                        <p className="title"> Price : $ {price} </p>
                    </div>
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