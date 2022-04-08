import { useEffect, useState, useParams } from "react"
import { getProduct } from "../../product.service"
import ProductDetail from "../components/product-detail"
import { useMatch } from 'react-location'


const ProductPageDetail = () => {
    const params = useMatch().params;
    const [product , setProduct] = useState(undefined)
    
    
    useEffect(() =>{
        getProduct(params.id).then(product =>{
            setProduct(product);
        }).catch((error)=> {
            console.log('Error: ' + error)
        })
    },[params.id]) 
    return(
        <>
            <div className="container products"> 
                
                <ProductDetail product={product}/>
            </div>
        </>
    )
}

export default ProductPageDetail;