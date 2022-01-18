import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

const Header = () => {
    const [searchItems, setSearchItems] = useState("");
    const { totalQuantities } = useSelector(state => state.CartReducer);
    const {products} = useSelector(state => state.productReducer);
    const dispatch = useDispatch();
   
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" to="/">Navbar</NavLink>
                        <NavLink to="/cart">
                            <i className="fas fa-shopping-cart shoping_cart_icon ms-2">
                                <p className="addedCartNumber">{totalQuantities}</p>
                            </i>
                        </NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto me-3 mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/home">Home</NavLink>
                                </li>
                            </ul>
                            <form className="d-flex" onSubmit={handleSubmit}>
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchItems} onChange={(e)=> setSearchItems(e.target.value)} />
                                <NavLink className="nav-link" to="/searchResult">
                                <button type="submit" className="btn btn-primary" onClick={() => dispatch({type: 'search', payload: {searchItems, products}}) }>Search</button>
                                </NavLink>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="container text-center my-4">
                <h1>Computer Peripherals</h1>
                <p>Buy your fevorite computer peripherals</p>
            </div>
        </>
    )
}
export default Header;