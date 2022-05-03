import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router"
import UserContext from "../../../../context/User.context"
import { getProducts } from "../../product.service"
import Product from "../components/product"
import './product-page.css'

const ProductPage = () => {
    const [products , setProducts] = useState([])
    const { category } = useParams()
    const { isAdmin } = useContext(UserContext)

    useEffect(() =>{
        getProducts(category).then(products =>{
            setProducts(products);
        }).catch((error)=> {
            console.log('Error: ' + error)
        })
    },[category])
    return(
        <>
            <div className="container products"> 
                { products.length >= 1 ?
                        products.map((product) => <Product product={product} key={product._id} />)
                : '<h2>Loading...</h2>'
                }
                { isAdmin && <Product />}
            </div>
        </>
    )
}

export default ProductPage;