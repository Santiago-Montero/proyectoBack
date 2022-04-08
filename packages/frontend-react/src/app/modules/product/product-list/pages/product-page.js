import { useEffect, useState } from "react"
import { getProducts } from "../../product.service"
import Product from "../components/product"
import './product-page.css'
const ProductPage = () => {
    const [products , setProducts] = useState([])

    useEffect(() =>{
        getProducts().then(products =>{
            setProducts(products);
        }).catch((error)=> {
            console.log('Error: ' + error)
        })
    },[])
    return(
        <>
            <div className="container products"> 
                { products.length >= 1 ? products.map( product => <Product product={product} />) : '<h2>Loading...</h2>'}
            </div>
        </>
    )
}

export default ProductPage;