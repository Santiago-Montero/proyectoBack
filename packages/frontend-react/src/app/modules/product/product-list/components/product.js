import './product.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import CartContext from '../../../../context/Cart.context'

const Product = ({product}) => {
    const { addToCart } = useContext(CartContext)

    const add = (product) => {
        addToCart(product)
        console.log('Se agrego al carrito')
    }
    return(
        <>
            <div className='box'>
                <h1>{product.name}</h1>
                <img className="box-img" src={product.photo}/>
                <div className='box-buy'>
                    <div className='box-price'>
                        <p> $ {product.price} </p>
                    </div>
                    <div className='box-button'>
                        <button className='button is-link' onClick={() => add(product)}> Buy</button>
                    </div>
                </div>
                <Link to={`/products/${product._id}`} className="button-more-info"> 
                    <button className='button is-ghost'> More Info...</button>
                </Link>
            </div>
        </>
    )
}

export default Product;