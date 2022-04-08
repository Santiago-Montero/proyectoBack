import { useEffect, useState, useParams } from "react"
import { getProduct } from "../../product.service"
import ProductDetail from "../components/product-detail"

const ProductPageDetail = () => {
    const [product , setProduct] = useState(undefined)
    const { id } = useParams()
    useEffect(() =>{
        getProduct(id).then(product =>{
            setProduct(product);
        }).catch((error)=> {
            console.log('Error: ' + error)
        })
    },[id])
    return(
        <>
            <div className="container products"> 
                { product ? <ProductDetail product={product} /> : '<h2>Error</h2>'}
            </div>
        </>
    )
}

export default ProductPageDetail;