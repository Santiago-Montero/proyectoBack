import { useEffect, useState } from "react"
import { getProduct } from "../../product.service"
import ProductDetail from "../components/product-detail"
import { useParams } from "react-router"


const ProductPageDetail = () => {
    const { id } = useParams()
    const [product , setProduct] = useState(undefined)
    
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
                {product ? <ProductDetail product={product}/> : <h1> Loading... </h1>}
            </div>
        </>
    )
}

export default ProductPageDetail;