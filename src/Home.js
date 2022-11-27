import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom'
import Product from './Product'



function Home() {
  return (
    <div className='home'>
      <Link to='/'>
      <img className='home__image' src='https://m.media-amazon.com/images/I/81+E+12mQyL._SX3000_.jpg'alt='bg-image'/>
      </Link>
      {/* product id, title,image*/}
      {/* product */}
     <div className='home__row'>
     
    
    
     <Product
        id="1"
        title="Car & bike essentials | Up to 60% off" 
        image="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare1X._SY116_CB410830553_.jpg"
        image2="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Rim_tyrecare1x._SY116_CB410830552_.jpg"
        image3="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vega_helmet_186x116._SY116_CB405090404_.jpg"
        image4="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum1x._SY116_CB410830552_.jpg"
        bottomtext="see more"
        rating={5}
        addButton={false}
        />
     <Product
        id="2"
        title="Up to 60% off | Styles for Men" 
        image="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-1-186-116._SY116_CB636110853_.jpg"
        image2="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-2-186-116._SY116_CB636110853_.jpg"
        image3="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-3-186-116._SY116_CB636110853_.jpg"
        image4="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-4-186-116._SY116_CB636110853_.jpg"
        bottomtext="see more"
        rating={3}
        addButton={false}
        />
     <Product
        id="3"
        title="Top rated, premium quality | Amazon Brands..." 
        image="https://images-eu.ssl-images-amazon.com/images/G/31/img22/BAU/Oct/186X116_1._SY116_CB606110532_.jpg"
        image2="https://images-eu.ssl-images-amazon.com/images/G/31/img22/BAU/Oct/186X116_5._SY116_CB606110532_.jpg"
        image3="https://images-eu.ssl-images-amazon.com/images/G/31/img22/BAU/Oct/186X116_3._SY116_CB606110532_.jpg"
        image4="https://images-eu.ssl-images-amazon.com/images/G/31/img22/BAU/Oct/186X116_8._SY116_CB606110532_.jpg"
        bottomtext="see more"
        rating={5}
        addButton={false}
        />
     <Product
        id="4"
        title="Up to 60% off | Professional tools, instruments & more " 
        image="https://images-eu.ssl-images-amazon.com/images/G/31/AUTO_2021/BAU_GW/11x._SY116_CB606088141_.jpg"
        image2="https://images-eu.ssl-images-amazon.com/images/G/31/AUTO_2021/BAU_GW/21x._SY116_CB606088141_.jpg"
        image3="https://images-eu.ssl-images-amazon.com/images/G/31/AUTO_2021/BAU_GW/31x._SY116_CB606088141_.jpg"
        image4="https://images-eu.ssl-images-amazon.com/images/G/31/AUTO_2021/BAU_GW/41x._SY116_CB606088141_.jpg"
        bottomtext="see more"
        rating={5}
        addButton={false}
        />
     <Product
        id="5"
        title="Shop by Category" 
        image="https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Fresh._SY116_CB431401553_.jpg"
        image2="https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Mobile._SY116_CB431401553_.jpg"
        image3="https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Fashion._SY116_CB431401553_.jpg"
        image4="https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Electronic._SY116_CB431401553_.jpg"
        bottomtext="see more"
        rating={4}
        addButton={false}
        />
     <Product
        id="6"
        title="Today's Deal" 
        image="https://m.media-amazon.com/images/G/31/img19/AMS/Houseads/Laptops-Sept2019._CB436595915_.jpg"
        rating={3}
        price = {55000}
        addButton={true}
        />
        </div>
    </div>
  )
}

export default Home
