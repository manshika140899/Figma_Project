import React from 'react'
import Nav from '../../Nav/Nav'
// import CheckSec from '../../CheckSec/CheckSec'
import Product from '../../Product/Product'
import CheckForm from '../../CheckForm/CheckForm'
import FooterSec from '../../FooterSec/FooterSec'
import Footer from '../../Footer/Footer'

const Checkout = () => {
  return (
    <div>
      <Nav/>
      <Product
      title='Checkout'
      page='Checkout'/>
      {/* <CheckSec/> */}
      <CheckForm/>
      <FooterSec/>
      <Footer  marginTop={false}/>
    </div>
  )
}

export default Checkout
