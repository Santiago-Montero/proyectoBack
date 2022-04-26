import React, { useState } from 'react'

const CartContext = React.createContext()


export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [price, setPrice] = useState(0)

    const addToCart = (product) => {
        const isOnCart = cart.some(p => p._id == product._id)
        if(isOnCart){
            product.quantity ++
        }else{
            product.quantity = 1
            setCart([...cart, product])
        }
        setPrice(price + Number(product.price) * product.quantity)
        console.log(price)
    }
    return (
        <CartContext.Provider 
            value={{
                addToCart,
                cart,
                price
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartContext