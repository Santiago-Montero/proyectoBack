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
        const newPrice = Number(product.price) * product.quantity
        setPrice(Number(price) + Number(newPrice))
    }

    const emptyCart = () => {
        setCart([])
        setPrice(0)
    }
    return (
        <CartContext.Provider 
            value={{
                addToCart,
                emptyCart,
                cart,
                price
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartContext