import React from 'react'
import { useStateValue } from './StateProvider'
import './Checkout.css'
import { Link } from 'react-router-dom';
import Checkoutproduct from './Checkoutproduct';
import SubTotal from './SubTotal'
function Checkout() {

  const [{basket}] = useStateValue();


  return (
    <div className='checkout'>
        <div className='checkout__left'>
        <Link to='/'>
            <img className='checkout_ad' src="
            https://m.media-amazon.com/images/I/61aURrton0L._SX3000_.jpg" />
        </Link>

        {basket?.length === 0 ? (
            <div className='checkout__emptytitle'>
                <h2>Your shopping basket is empty</h2>
                <p>You have no items in your basket.
                    To buy one or more items click on "Add to basket" next to te item </p>
            </div>
        ) : (
            <div className='checkout__baskettitle'>
                <h2>Your shopping basket</h2>
                
                {/* list of products */}
                {
                    basket.map(item => (
                        <Checkoutproduct
                            id = {item.id}
                            title = {item.title}
                            image = {item.image}
                            rating = {item.rating}
                            price = {item.price}
                        />

                    ))
                }
            </div>
        )}
        </div>


        {/* checkout right */}
       {basket.length > 0 && (
        <div className='checkout__right'>
            <SubTotal />
        </div>
       )}
    </div>
  )
}

export default Checkout
