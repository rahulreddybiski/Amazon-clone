export const initialState = {
    basket : [
        {id:"5",
        title:"Today's Deal" ,
        image:"https://m.media-amazon.com/images/G/31/img19/AMS/Houseads/Laptops-Sept2019._CB436595915_.jpg",
        rating:3,
        price : 55000
    },
        {id:"6",
        title:"Today's Deal" ,
        image:"https://m.media-amazon.com/images/G/31/img19/AMS/Houseads/Laptops-Sept2019._CB436595915_.jpg",
        rating:3,
        price : 55000
    }
    ],
    user : null,
};

export const getBasketTotal = (basket) => (
    basket?.reduce((amount, item) => item.price + amount, 0)
)

const reducer = (state, action) => {
    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user : action.user
            }
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket : [...state.basket, action.item]
            }
            
        case 'REMOVE_FROM_BASKET':

            let newBasket = state.basket;
            const index = state.basket.findIndex((basketItem) => (
                basketItem.id === action.id
            ))

            if(index >=0){
                newBasket.splice(index, 1)
            }else{
                console.warn('cant remove')
            }
            
            return {
                ...state,
                basket : newBasket
            }
            
        default:
            return state;
    }
}

export default reducer;