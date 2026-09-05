 import React from 'react'
 import Nav from '../../Nav/Nav'

 import Product from '../../Product/Product'
 import AboutStory from '../../AboutStory/AboutStory'
 import AboutFeatures from '../../AboutFeatures/AboutFeatures'
 import AboutTimeline from '../../AboutTimeline/AboutTimeline'
 import AboutStats from '../../AboutStats/AboutStats'
 import AboutTeam from '../../AboutTeam/AboutTeam'
 import AboutReviews from '../../AboutReviews/AboutReviews'
 import AboutCTA from '../../AboutCTA/AboutCTA'

 import AboutHero from '../../AboutHero/AboutHero'
 import AsgaardSofa from '../../AsgaardSofa/AsgaardSofa'
 import DescripSec from '../../DescripSec/DescripSec'
 import RelatedProducts from '../../RelatedProducts/RelatedProducts'

 import FooterSec from '../../FooterSec/FooterSec'
 import Footer from '../../Footer/Footer'

 const About = () => {
   return (
     <div>
       <Nav/>

       <Product
      title='About'
      page='About'/>
      <AboutStory/>
      <AboutFeatures/>
      <AboutTimeline/>
      <AboutStats/>
      <AboutTeam/>
      <AboutReviews/>
      <AboutCTA/> 
      <FooterSec/>
      <Footer marginTop="mt-1"/>

     </div>
  )
 }

 export default About