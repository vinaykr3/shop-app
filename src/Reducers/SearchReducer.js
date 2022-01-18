const initialState = {
    product: [],
};
const SearchReducer = (state = initialState, action)=> {
    switch(action.type){
        case "search":
            const {products, searchItems} = action.payload;
            // console.log(products, searchItems);
            const filterSearch = products.filter((products, index) => {
                const pro = products.title.toLowerCase();
                const search = searchItems.toLowerCase();
                return pro.includes(search) ; // I will use includs() method 
            });
            return {
                ...state, product: filterSearch
            }
        default:
            return state;
    }
}
export default SearchReducer;