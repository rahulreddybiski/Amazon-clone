import React from 'react'
import './subtotal.css'
import CurrencyFormat from "react-currency-format"
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer'
function SubTotal() {

  const [{basket}, dispatch] = useStateValue()





  return (
    <div className='subtotal'>
      {/* price */}
      <CurrencyFormat
          renderText={(value) => (
            <>
                <p>Subtotal ({basket.length} items): <strong>{value}</strong></p>
                <small className='subtotal__gift'>
                  <input type="checkbox" />This order containes a gift card
                </small>
            </>

  )}

          decimalScale={2}
          value={getBasketTotal(basket)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
      />
      <button className='subtotal__btn'>Proceed to Checkout</button>
    </div>
  )
}

export default SubTotal
