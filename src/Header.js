import React from 'react'
import logo from './logo.png'
import './Header.css'
import {Link} from "react-router-dom"
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"

import { useStateValue } from './StateProvider'
import {basket} from './reducer'
import { auth } from './firebase'
function Header() {

  const [{basket, user}] = useStateValue();
 
  const login = () => {
    if(user){
      auth.signOut()
    }
  }
  
  // console.log(basket);
  return (
    <nav className='header'>
    <Link to="/">
        <img className='header__logo' 
             src={logo} alt="logo" 
        /> 
    </Link>

    <div className='header__search'>
      <input className='header__searchbox'/>
      <SearchIcon className='header__searchIcon' />
    </div>

   
    <div className='header__nav'>
     
      

      <Link className='header__link' to={!user && "/login"}>
      <div onClick={login} className='header__option'>
        <span className='header__option1'>Hello {user?.email} </span>
        
        <span className='header__option2'>{user? 'Sign Out' : 'Sign In'}</span>
      </div>
      </Link>

     
      <Link className='header__link' to="/">
      <div className='header__option'>
        <span className='header__option1'>Returns</span>
        <span className='header__option2'>& Orders</span>
      </div>
      </Link>


      <Link className='header__link' to="/">
      <div className='header__option'>
        <span className='header__option1'>Your</span>
        <span className='header__option2'>Prime</span>
      </div>
      </Link>

      
      <Link className='header__link' to={user? "/checkout" : "/login"}>
        <div className='header__optionbasket'>
         
          <ShoppingBasketIcon className='' />
         
          <span className='header__option2 header__basketcount'>{basket?.length}</span>
        </div>
      </Link>
    </div>


    </nav>
  )
}

export default Header
