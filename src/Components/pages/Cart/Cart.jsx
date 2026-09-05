import React from 'react'
import Nav from '../../Nav/Nav'
import Product from '../../Product/Product'
import CartSec2 from '../../CartSec2/CartSec2'
import FooterSec from '../../FooterSec/FooterSec'
import Footer from '../../Footer/Footer'

const Cart = () => {
  return (
    <div>
      <Nav/> 
      <Product
      title='Cart'
      page='Cart'/>
      <CartSec2/>
      <FooterSec/>
      <Footer  marginTop="mt-4" />
    </div>
  )
}

export default Cart
