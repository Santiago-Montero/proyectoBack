
const ProductDetail = ({product}) => {

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
            </div>
        </>
    )
}

export default ProductDetail;