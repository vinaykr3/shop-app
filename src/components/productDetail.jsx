import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const ProductDetail = () => {
    const [quantity, setQuantity] = useState(1);
    const {id} = useParams();
    const dispatch = useDispatch();
    const {product} = useSelector(state => state.productReducer);
    useEffect(() => {
        dispatch({type: "PRODUCT", id});
    }, [id]);

    // decrise quantity
    const decQuantity = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1);
        }
    }
    return (
        <>
            <div className="container mt-5">
                <div className="card single_card mt-5">
                    <img src={product.img} alt="image not found" />
                    <div className="ms-5 mx-auto mt-5 detail_content">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.description}</p>
                        <p className="card-text">Rs {product.price}</p>
                        <p className="card-text">Size: null</p>
                        <div className="inc_dec_quantity">
                        <span className="dec btn" onClick={decQuantity}>-</span>
                        <span className="quantity_num">{quantity}</span>
                        <span className="inc btn" onClick={() => setQuantity(quantity + 1)}>+</span>
                        </div>
                        <button className="btn btn-dark ms-2" onClick={() => dispatch({type: "ADD_TO_CART", payload: {product, quantity} })}>ADD TO CART</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetail;