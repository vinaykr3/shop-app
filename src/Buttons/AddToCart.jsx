import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../Hooks/UseContext";

const AddToCart = (props) => {
    const {data, } = useContext(CartContext)
    return (
            <NavLink to="/single_cart" className="btn btn-secondary" onClick={() => addToCart(index)}>{props.BtnText}</NavLink>
    )
}

// Add to cart function here (redirect single_page)
 const addToCart = (index) => {
    const FilterContext = data.filter((curElem, ind) => {
        return index === ind;
    });
}