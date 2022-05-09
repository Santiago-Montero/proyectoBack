
const Order = ({order}) => {

    return (
        <>
            <div className="box"> 
                <p> 
                    Number of Order : {order.cartOrder}
                </p>
                <p> 
                    Number of Products : {order.cart.products.length}
                </p>
                <p className="tag is-success"> 
                    State : {order.state}
                </p>
            </div>
        </>
    )
}

export default Order