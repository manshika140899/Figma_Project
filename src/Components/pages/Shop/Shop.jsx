import React from 'react'
import Nav from '../../Nav/Nav'
import ShopimgSec from '../../ShopimgSec/ShopimgSec'
import ShopSec from '../../ShopSec/ShopSec'
import Footer from '../../Footer/Footer'
import Product from '../../Product/Product'

const Shop = () => {
  return (
    <div>
      <Nav/>
      <Product
      title='Shop'
      page='Shop'/>
      <ShopimgSec/>
      <ShopSec/>
      <Footer/>
    </div>
  )
}

export default Shop;
