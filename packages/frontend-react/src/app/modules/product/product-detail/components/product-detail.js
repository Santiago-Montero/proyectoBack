import { useContext } from 'react';
import CartContext from '../../../../context/Cart.context';
import './product-detail.css'

const ProductDetail = ({product}) => {
    const { addToCart } = useContext(CartContext)

    const add = (product) => {
        addToCart(product)
    }
    return(
        <>
            <div className="box-detail">
                <div className="box-detail-img">
                    <img src={product.photo} />
                </div>
                <div className="box-detail-description">
                    <h1 className="title">{product.name}</h1>
                    <div className="subtitle box-detail-buy">
                       Price : $ {product.price}
                       <button className="button is-link" onClick={() => add(product)}> Buy </button>
                    </div>
                    <div> 
                        {product.description}
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default ProductDetail;