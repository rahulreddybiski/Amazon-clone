import React from 'react'
import './Product.css'
import {Link} from "react-router-dom";
import { dispatch } from './Header';
import { useStateValue } from './StateProvider';
import basket from './reducer'
function Product({id, title, image,image2, image3, image4, bottomtext, rating, addButton, price}) {
  const [{basket},dispatch] = useStateValue()

  function addToBasket(){
    //add item to baske
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id : id,
        title : title,
        image : image,
        rating : rating,
        price : price
      }
    })
  }


  return (
    <>
    <div className='product'>
      <div className='product__info'>
        <h2 className='product__title'>{title}</h2>
        <div className='product__rating'> 
            <p>rating</p>
            {
                Array(rating)
                .fill()
                .map((_) => (
                    <p>⭐</p>
                ))
            }
        </div>
      </div>
      <div className='product__imagecontainer'>
        <img className='product__image' src={image}/>
        <img className='product__image' src={image2}/>
        <img className='product__image' src={image3}/>
        <img className='product__image' src={image4}/>
      </div>
      <Link to='/amazon'>
        <small className='product__bottomtext'>{bottomtext}</small>
      </Link>
      {addButton && <small className='price'>price : {price}</small>}
      {addButton && <button onClick={addToBasket} className='btn'>Add To Cart</button>}
      
    </div>
    </>
  )
}

export default Product
