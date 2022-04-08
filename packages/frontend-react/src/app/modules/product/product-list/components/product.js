import './product.css'
import { Link } from 'react-location'

const Product = ({product}) => {
    
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
                        <button className='button is-link'> Buy</button>
                    </div>
                </div>
                <Link to={`/products/${product._id}`}> 
                    <button className='button is-ghost'> More Info...</button>
                </Link>
                {/* Fijarme lo del route de react 18 nashe */}
            </div>
        </>
    )
}

export default Product;