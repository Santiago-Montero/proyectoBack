import './cart-component.css'
const CartComponent = ({product}) => {
    return(
        <>
            <div className="box-cart-product">
                <p className="subtitle"> {product.name} </p>
                <p> $ {product.price} </p>
                <p> Quantity : {product.quantity} </p>
            </div>
        </>
    )
}

export default CartComponent