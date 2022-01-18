import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import "./style.css";
import Header from "./Header/Header";
import Home from "./components/Home";
import ProductDetail from "./components/productDetail"
import Footer from "./Footer/Footer";
import Cart from "./components/Cart";
import FilterBtn from "./components/FilterBtn";
import SearchResult from "./components/SearchResult";


const App = () => {

    return (
        <>
        <Router>
            <Header />
            <FilterBtn />
            <Routes>
                <Route exat  path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/productDetail/:id" element={<ProductDetail/>}/>
                <Route path="/searchResult" element={<SearchResult/>} />
            </Routes>
            <Footer />
        </Router>
        
        </>
    )
}

export default App;