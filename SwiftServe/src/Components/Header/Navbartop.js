import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../../Redux/Actions/userActions';
import { removeAllFromCart } from '../../Redux/Actions/cartActions';
// import { FaBars, FaWhatsapp, FaFacebook } from 'react-icons/fa';
// import { links, social } from '../data';

const useYScrollOffset = () => {
    const [yOffset, setYOffset] = useState(0)
    const handleScroll = () => {
        setYOffset(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return yOffset
}
const Navbar = () => {
    const cart = useSelector((state) => state.cart)
    // const { cartItems } = cart
    const userSignin = useSelector((state) => state.userSignin)
    const { userInfo } = userSignin
    const dispatch = useDispatch()
    const signoutHandler = () => {
        dispatch(signout())

    }

    var navScrollBgClass = "nan"
    var navScrollLinkClass = "nav-links"
    if (useYScrollOffset() < 20) {
        navScrollBgClass = 'navbar  fixed-top navbar-expand-lg bg-transparent navbar-dark '
    }
    else {
    }
    navScrollBgClass = 'navbar  sticky-top navbar-expand-lg bg-white navbar-light background'
    // navScrollLinkClass = 'text-black nav-links-scrolled'


    return (
        <>

            <nav className={navScrollBgClass} id="main-header" >
                <div class="container-md">
                    <div className="navbar-brand text-line fw-light fs-1" onClick={() => window.location.href = '/'} >
                        <img className="nav-logo-img d-inline-block align-text-center mx-2" width="45" height="55" src="./logo192.png" alt="logo" />
                        SwiftServe
                    </div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="offcanvas offcanvas-end " tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">A Venture by Ishaan</h5>
                            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 nav-links-ul">
                                {/* {cartItems.length > 0 && (
                                    <li class="nav-item">
                                        <Link to="/Cart" className={"position-relative nav-link"}>
                                            <AiOutlineShoppingCart class="" style={{
                                                fontSize: "1.4rem",
                                            }} />
                                            <span class="position-absolute top-5 end-1 translate-middle badge rounded-pill bg-danger">
                                                {cartItems.length}
                                            </span>
                                        </Link>
                                    </li>
                                )} */}
                                {/* <li>
                                    <a href="#section-2" className={navScrollLinkClass}>
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="/" className={navScrollLinkClass}>
                                        Contact
                                    </a>
                                </li> */}
                                <li class="nav-item">
                                    <a class="nav-link text-black fs-4" aria-current="page" href="#">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-black fs-4" href="#">Contact Us</a>
                                </li>
                                {
                                    userInfo ? (
                                        <li class="nav-item dropdown">
                                            <span class="nav-link dropdown-toggle fs-4" id="offcanvasNavbarUserDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                {userInfo.name}
                                            </span>
                                            <ul class="dropdown-menu" aria-labelledby="offcanvasNavbarUserDropdown">
                                                <li><Link class="dropdown-item" to="/user/profile">Profile</Link></li>
                                                <li><Link class="dropdown-item" to="/user/orderHistory">My Orders</Link></li>
                                                <li>
                                                    <hr class="dropdown-divider" />
                                                </li>
                                                <li><Link to="/" class="dropdown-item" onClick={signoutHandler}>Sign Out</Link></li>
                                                <li><Link to="/" class="dropdown-item">Home</Link></li>
                                            </ul>
                                        </li>
                                    ) : (
                                        <li className="nav-item">

                                            <Link to="/signin" className={"nav-link btn-primary rounded-pill text-white p-2 fs-5"}>Login | Sign Up</Link>
                                        </li>
                                    )
                                }
                                {
                                    userInfo && userInfo.isAdmin && (
                                        <li class="nav-item dropdown">
                                            <span class="nav-link dropdown-toggle" id="offcanvasNavbarAdminDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Admin
                                            </span>
                                            <ul class="dropdown-menu" aria-labelledby="offcanvasNavbarAdminDropdown">
                                                <li><Link class="dropdown-item" to="/">Dashboard</Link></li>
                                                <li><Link class="dropdown-item" to="/">Orders</Link></li>
                                                <li><Link class="dropdown-item" to="/ServicesList">Services</Link></li>
                                                <li><Link to="/" class="dropdown-item">Users</Link></li>
                                            </ul>
                                        </li>
                                    )
                                }



                            </ul>
                        </div>
                    </div>
                </div>
            </nav >
        </>
    );
};

export default Navbar;
