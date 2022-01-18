
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const Home = () => {
    const state = useSelector((state) => state.productReducer);
    return (
        <>
            <div className="container">
                <div className="row">
                    {
                        state.products && state.products.map((curElem, index) => {
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
                </div>
            </div>
        </>
    );
}

export default Home;