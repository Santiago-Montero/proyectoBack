import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import UserContext from '../../../context/User.context';
import { useNavigate } from 'react-router-dom';
import Cart from '../../../modules/cart/cart-icon/components/cart';
import { getProducts } from '../../../modules/product/product.service'
import './navbar.css'
import { useJwt } from "react-jwt"; 

const Navbar = () => {
    const { user } = useContext(UserContext)
    const { logout, login } = useContext(UserContext)
    const [ categories, setCategories] = useState([])
    let navigate = useNavigate();
    const token = localStorage.getItem('token')
    const { decodedToken } = useJwt(token);
    
    useEffect(() => {
        if(decodedToken){
            login(decodedToken)
        }
    }, [decodedToken])

    useEffect(() => {
        getProducts().then((res) => {
            res.forEach( products => {
               if(!categories.includes(products.category)){
                    setCategories([...categories, products.category ])
               }
            })
        }).catch((err) => {
            console.log(err)
        })
    }, [categories])

    const logOut = () => {
        localStorage.removeItem('token')
        navigate('/login');
        logout();
    }
    const upperFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);  
    }
    return(
        <>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="">
                    <h1 className='title'> Your Box</h1>
                    </a>

                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbar" className="navbar-menu">
                    <div className="navbar-start">
                        <Link to={'/'} className="navbar-item">
                            Home
                        </Link>
                    
                        <Link to={'/products'} className="navbar-item">
                            Products
                        </Link>
                        <div className="navbar-item has-dropdown is-hoverable  menu-des">
                            <a className="navbar-link">
                                Categories
                            </a>
                            <div className="navbar-dropdown">
                                {
                                    categories.length > 1 &&
                                        categories.map( (category, i) => 
                                            <Link to={`products/${category}`} key={i} className="navbar-item">
                                                { upperFirstLetter(category) }
                                            </Link>
                                        ) 
                                }
                            </div>
                        </div>
                        <Link to={'/cart'} className="navbar-item">
                            <Cart />
                        </Link>
                        
                    </div>
                    <div className="navbar-end">
                        {user ? 
                        <div className="navbar-item has-dropdown is-hoverable  menu-des">
                            <a className="navbar-link">
                                <h1> { user.username } </h1>
                            </a>
                            <div className="navbar-dropdown">
                                <Link to={`/user`} className="navbar-item"> 
                                    Profile
                                </Link>
                                <a className="navbar-item" onClick={() =>logOut()}>
                                    Logout
                                </a>
                            </div>
                        </div>
                        :
                        <div className="navbar-item">
                            <div className="buttons">
                                <Link to={`/signup`} className="button is-primary"> 
                                    Sign up
                                </Link>
                                <Link to={`/login`} className="button is-light"> 
                                    Log in
                                </Link>
                            </div>
                        </div>
                        }
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar; 