
const ProductDetail = ({product}) => {
    return(
        <>
            <div className="box">

                <h1>{product.name}</h1>
                <img src={product.photo} />
            </div>
        </>
    )
}

export default ProductDetail;