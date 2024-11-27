import "./Nav.css";
import { useNavigate } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { GoHeart } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { FaTruckDroplet } from "react-icons/fa6";

const Nav =()=>{
const navigate =useNavigate();

const gotoProfile=()=>{
    navigate('/profile');
}

const gotoCart=()=>{
    navigate('/cart');
}

const gotoWish=()=>{
    navigate('/wish');
}

const gotoTrack=()=>{
    navigate('/track');
}

const gotoHome=()=>{
    navigate('/')
}

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-pink">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={`${process.env.PUBLIC_URL}/assets/icon.png`} className="navbar-logo" alt="Logo" onClick={gotoHome}/>
                </a>
                  {/* Hamburger Toggle Button */}
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            {/* <img src={`${process.env.PUBLIC_URL}/assets/track.png`} className="navbar-track" alt="Track" onClick={gotoTrack}/> */}
                            <FaTruckDroplet onClick={gotoTrack} size={30}/>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            {/* <img src={`${process.env.PUBLIC_URL}/assets/user.png`} className="navbar-profile" alt="Profile" onClick={gotoProfile}/> */}
                            <CgProfile  onClick={gotoProfile} size={30} />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            {/* <img src={`${process.env.PUBLIC_URL}/assets/wishlist.png`} className="navbar-track" alt="Wishlist" onClick={gotoWish}/> */}
                            <GoHeart  onClick={gotoWish} size={30}/>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            {/* <img src={`${process.env.PUBLIC_URL}/assets/cart.png`} className="navbar-track" alt="Cart" onClick={gotoCart}/> */}
                            <FiShoppingCart onClick={gotoCart} size={30}/>
                        </a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;