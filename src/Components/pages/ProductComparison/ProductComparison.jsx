import React from 'react'
import Nav from '../../Nav/Nav'
import Product from '../../Product/Product'
import ProductPage1 from '../../ProductPage1/ProductPage1'
import ProductGeneral from '../../ProductGeneral/ProductGeneral'
import ProductPage2 from '../../ProductPage2/ProductPage2'
import Dimensions from '../../Dimensions/Dimensions'
import WarrantySec from '../../WarrantySec/WarrantySec'
import FooterSec from '../../FooterSec/FooterSec'
import Footer from '../../Footer/Footer'

const ProductComparison = () => {
  return (
    <div>
      <Nav/>
        <Product
        title="Product Comparison"
        page="Comparison"
      />
      <ProductPage1/>
      <ProductGeneral/>
      <ProductPage2/>
      <Dimensions/>
      <WarrantySec/>
      <FooterSec/>
      <Footer marginTop={false}/>
    </div>
  )
}

export default ProductComparison
