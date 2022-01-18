import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SearchResult = () => {
    const state = useSelector(state => state.SearchReducer)
    return (
        <>
            <div className="container">
            {state.product.length > 0 ? 
                <div className="row">
                    {
                        state.product && state.product.map((curElem, index) => {
                            const { id, title, price, img } = curElem;
                            return (
                                <div className="col-sm-4 mb-5" key={id}>
                                    <div className="card hover_effect">
                                        <Link to={`/productDetail/${id}`}>
                                            <img src={img} alt="image not found" />
                                        
                                        <div className="card-body">
                                            <h5 className="card-title">{title}</h5>
                                            <p>{price}</p>
                                        </div>
                                        </Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div> : 'please search any items in the search box'
             }
                
            </div>
        </>
    )
}

export default SearchResult
