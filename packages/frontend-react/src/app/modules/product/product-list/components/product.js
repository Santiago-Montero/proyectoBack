import './product.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import CartContext from '../../../../context/Cart.context'
import UserContext from '../../../../context/User.context'

const Product = ({product}) => {
    const { addToCart } = useContext(CartContext)
    const { isAdmin } = useContext(UserContext)
    const add = (product) => {
        addToCart(product)
        console.log('Se agrego al carrito')
    }
    return(
        <>
            {
                product ? 
            <div className='box'>
                { isAdmin && 
                    <Link to={`/product/update/${product._id}`} className="button-more-info"> 
                        <button> Edit </button>
                    </Link> 
                }
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
                <Link to={`/product/${product._id}`} className="button-more-info"> 
                    <button className='button is-ghost'> More Info...</button>
                </Link>
            </div>
            :
            <div className='box box-new'>
                <Link to={`/product/create`} className="button-more-info"> 
                    <button className='button is-ghost'> + </button>
                </Link>
            </div>
            }
        </>
    )
}

export default Product;