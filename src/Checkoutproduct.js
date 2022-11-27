import React from 'react'
import './checkoutproduct.css'
import { useStateValue } from './StateProvider'

function Checkoutproduct({id, title, image, rating , price}) {
    const [{basket}, dispatch] = useStateValue()
    // console.log(id, title, image, rating , price)
    const removeFromBasket =() => {
        // remove item from basket
        dispatch({
            type : "REMOVE_FROM_BASKET",
            id : id
        })
    }
  
    return (
    <div className='chcekout__product'>
       <div>
      <img className='checkoutproduct__image' src={image} alt='' />

       </div>
      <div className='chcekoutproduct__info'>
           <p className='checkoutproduct__title'>{title}</p> 
           <div className='checkoutproduct__rating'>
           <p>rating</p>
            {
                Array(rating)
                .fill()
                .map((_) => (
                    <p>⭐</p>
                ))
            }
           </div>
            <div className='checkoutproduct__price'><small>💲{price}</small></div>
            
           <button onClick={removeFromBasket} className='chcekoutproduct__remove'>Remove from basket</button>
      </div>
    </div>
  )
}

export default Checkoutproduct
