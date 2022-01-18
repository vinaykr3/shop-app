const initialState = {
    products: [
        {
            "id": 1,
            "price": 299,
            "title": "keybord",
            "description": "Auto-layout for flexbox grid columns also means you can set the width of one column and have the sibling columns automatically resize around it. You may use predefined grid classes as shown",
            "img": "https://vinusimages.co/wp-content/uploads/2018/10/615A9585.jpglast.jpgwebsite.jpg"
        },
        {
            "id": 2,
            "price": 399,
            "title": "Mouse",
            "description": "Auto-layout for flexbox grid columns also means you can set the width of one column and have the sibling columns automatically resize around it. You may use predefined grid classes as shown",
            "img": "https://vinusimages.co/wp-content/uploads/2018/10/615A9585.jpglast.jpgwebsite.jpg"
        },
        {
            "id": 3,
            "price": 499,
            "title": "Printer",
            "description": "Auto-layout for flexbox grid columns also means you can set the width of one column and have the sibling columns automatically resize around it. You may use predefined grid classes as shown",
            "img": "https://vinusimages.co/wp-content/uploads/2018/10/615A9585.jpglast.jpgwebsite.jpg"
        },
        {
            "id": 4,
            "price": 599,
            "title": "CPU",
            "description": "Auto-layout for flexbox grid columns also means you can set the width of one column and have the sibling columns automatically resize around it. You may use predefined grid classes as shown",
            "img": "https://vinusimages.co/wp-content/uploads/2018/10/615A9585.jpglast.jpgwebsite.jpg"
        },
        {
            "id": 5,
            "price": 699,
            "title": "Moniter",
            "description": "Auto-layout for flexbox grid columns also means you can set the width of one column and have the sibling columns automatically resize around it. You may use predefined grid classes as shown",
            "img": "https://vinusimages.co/wp-content/uploads/2018/10/615A9585.jpglast.jpgwebsite.jpg"
        },
        {
            "id": 6,
            "price": 799,
            "title": "Laser",
            "description": "Auto-layout for flexbox grid columns also means you can set the width of one column and have the sibling columns automatically resize around it. You may use predefined grid classes as shown",
            "img": "https://vinusimages.co/wp-content/uploads/2018/10/615A9585.jpglast.jpgwebsite.jpg"
        },
        {
            "id": 7,
            "price": 899,
            "title": "Inveter",
            "description": "Auto-layout for flexbox grid columns also means you can set the width of one column and have the sibling columns automatically resize around it. You may use predefined grid classes as shown",
            "img": "https://vinusimages.co/wp-content/uploads/2018/10/615A9585.jpglast.jpgwebsite.jpg"
        },
        {
            "id": 8,
            "price": 999,
            "title": "AC Air",
            "description": "Auto-layout for flexbox grid columns also means you can set the width of one column and have the sibling columns automatically resize around it. You may use predefined grid classes as shown",
            "img": "https://vinusimages.co/wp-content/uploads/2018/10/615A9585.jpglast.jpgwebsite.jpg"
        },
        {
            "id": 9,
            "price": 199,
            "title": "Cooler",
            "description": "Auto-layout for flexbox grid columns also means you can set the width of one column and have the sibling columns automatically resize around it. You may use predefined grid classes as shown",
            "img": "https://vinusimages.co/wp-content/uploads/2018/10/615A9585.jpglast.jpgwebsite.jpg"
        },
        {
            "id": 10,
            "price": 349,
            "title": "Cooler",
            "description": "Auto-layout for flexbox grid columns also means you can set the width of one column and have the sibling columns automatically resize around it. You may use predefined grid classes as shown",
            "img": "https://vinusimages.co/wp-content/uploads/2018/10/615A9585.jpglast.jpgwebsite.jpg"
        }
    ],
    product: {},
    search: {},
}

// productReducer function it tekes two paramiter (state, action)
const productReducer = (state = initialState, action) => {
    switch(action.type){
        case "PRODUCT":
            return {...state, product: state.products.find(pro => pro.id === parseInt(action.id))}
        default:
            return state;
    }
}
export default productReducer;