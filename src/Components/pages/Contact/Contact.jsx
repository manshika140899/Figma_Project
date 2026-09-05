import React from 'react'
import Nav from '../../Nav/Nav'
import ContSec from '../../ContSec/ContSec'
import Product from '../../Product/Product'
import FooterSec from '../../FooterSec/FooterSec'
import Footer from '../../Footer/Footer'

const Contact = () => {
  return (
    <div>
      <Nav/>
      <Product
      title='Contact'
      page='Contact'/>
      <ContSec/>
      <FooterSec/>
      <Footer marginTop="mt-4" />
    </div>
  )
}

export default Contact
