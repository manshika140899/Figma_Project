import React from 'react'
import Nav from '../../Nav/Nav'
// import BlogSec from '../../BlogSec/BlogSec'
import Product from '../../Product/Product'
import BlogSec2 from '../../BlogSec2/BlogSec2'
import FooterSec from '../../FooterSec/FooterSec'
import Footer from '../../Footer/Footer'


const Blog = () => {
  return (
    <div>
      <Nav/>
      <Product
      title='Blog'
      page='Blog'/>
      {/* <BlogSec/> */}
      <BlogSec2/>
      <FooterSec/>
      <Footer marginTop="mt-4"/>
    </div>
  )
}

export default Blog
