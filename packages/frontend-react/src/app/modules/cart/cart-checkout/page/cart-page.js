import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router"
import CartContext from "../../../../context/Cart.context"
import UserContext from "../../../../context/User.context"
import { buyCart } from "../../cart.service"
import { generateOrder } from "../../order.service"
import CartComponent from "../components/cart-component"
import './cart-page.css'

const CartPage = () => {
    const { cart, price, emptyCart } = useContext(CartContext)
    const { user } = useContext(UserContext)
    const [ complete, setComplete ] = useState(false)
    let navigate = useNavigate();

    const buy = () => {
        buyCart(user, cart, price)
        .then((cart) => {
            generateOrder(user.username, cart.price, cart).then().catch( err => console.log(err))
            setComplete(true)
            emptyCart()
        } )
        .catch(err => console.log(err))
    }
    return(
        <>  
            {
                complete ? 
                    <div className="box">
                        <div className="notification is-primary">
                            Thanks for your buy ! 
                        </div>
                        <button className="button is-primary" onClick={() => navigate('/')}> Go Home </button> 
                    </div>
                :
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
            }
            
        </>
    )
}

export default CartPage