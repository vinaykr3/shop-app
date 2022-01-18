import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Cart = () => {
    const { products,totalPrice,totalQuantities } = useSelector(state => state.CartReducer);
    const dispatch = useDispatch();
    console.log(products);
    return (
        <>
            <div className="cart mt-2">
                <div className="container">
                    <h3>your cart</h3>
                    {products.length > 0 ? <>
                        <div className="row">
                            <div className="col-9">
                                <div className="cart_heading">
                                    <div className="row">
                                        <div className="col-2">picture</div>
                                        <div className="col-2">Name</div>
                                        <div className="col-2">Price</div>
                                        <div className="col-2">Inc/Dec</div>
                                        <div className="col-2">Total</div>
                                        <div className="col-2">Remove</div>
                                    </div>
                                </div>
                                {products.map(product => (
                                    <div className="row vaerticalAlign" key={product.id}>
                                        <div className="col-2">
                                            <div className="cart_image">
                                                <img src={product.img} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <div className="cart_name">
                                                {product.title}
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <div className="cart_price">
                                                Rs {product.price}
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <div className="inc_dec_quantity">
                                                <span className="dec btn" onClick={() => dispatch({type: 'DEC', payload: product.id})}>-</span>
                                                <span className="quantity_num">{product.quantity}</span>
                                                <span className="inc btn" onClick={() => dispatch({type: 'INC', payload: product.id})}>+</span>
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <div className="cart_total text_center">
                                                Rs {product.price * product.quantity}
                                            </div>
                                        </div>
                                        <div className="col-2">
                                        <i class="fas fa-trash-alt remove_cart" onClick={() => dispatch({type: 'REMOVE', payload: product.id})}></i>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="col-3 summary-col">
                                <div className="summary">
                                    <div className="summary_heading">
                                        summary
                                    </div>
                                    <div className="summary_details">
                                        <div className="row">
                                            <div className="col-6">
                                                Total Items:
                                            </div>
                                            <div className="col-6">
                                                {totalQuantities}
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                Total Price:
                                            </div>
                                            <div className="col-6">
                                                Rs {totalPrice}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </> : 'your cart is empty'}
                </div>
            </div>
        </>
    )
}

export default Cart
