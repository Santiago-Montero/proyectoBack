import { useContext } from 'react';
import { Link } from 'react-router-dom'
import UserContext from '../../../context/User.context';
import Cart from '../../../modules/cart/cart-icon/components/cart';
import './navbar.css'

const Navbar = () => {
    const { user } = useContext(UserContext)
    const { logout } = useContext(UserContext)

    const logOut = () => {
        localStorage.removeItem('token')
        logout();
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
                                <a className="navbar-item">
                                Profile
                                </a>
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