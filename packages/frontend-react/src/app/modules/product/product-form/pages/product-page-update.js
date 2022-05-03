import { useParams } from "react-router";
import ProductForm from "../components/product-form";
import { getProduct } from "../../product.service";
import { useEffect, useState } from "react";

const ProductPageUpdate = () => {
    const { id } = useParams()
    const [product, setProduct] = useState(undefined)

    useEffect(() =>{
        console.log(id)
        getProduct(id).then(product =>{
            setProduct(product);
        }).catch((error)=> {
            console.log('Error: ' + error)
        })
    },[id])
    return(
        <>
            <div className="box">
                { product ? <ProductForm product={product} action={'update'}/> : <h2>Loading...</h2>}
            </div>
        </>
    )
}

export default ProductPageUpdate;