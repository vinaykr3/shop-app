import React, { useState } from 'react'
import { useSelector } from 'react-redux';

const FilterBtn = () => {
    const { products } = useSelector(state => state.productReducer);
    const uniqueValue = [...new Set(products.map((Items, index) => Items.title))];
    // console.log(uniqueValue);
    // const [Items, setItems] = useState(products);
    return (
        <>
            <p>
                <a className="btn btn-primary w-100" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Filter Items
                </a>
            </p>
            <div className="collapse" id="collapseExample">
                <div className="card card-body">
                    <div className="row">
                        {
                            uniqueValue && uniqueValue.map((curElem, index) => {
                                return (
                                        <div className="col-lg-2 col-md-3 col-12 filterItem" key={index}>
                                            <p className='text-center'>{curElem}</p>
                                        </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default FilterBtn