import React from 'react'
import './Product.css'
import Carousel from './Carousel';

const images = [
    { url: 'custom shirts.jpg', title: 'customized apparels' },
    { url: 'custom hoodies.png', title: 'couple hoodies' },
    { url: 'custom sweatshirts.png', title: 'Stylish sweatshirts' },
    { url: 'sportswear.jpg', title: 'Sportswear' },
    { url: 'corporate.png', title: 'Corporate Life' },
  ];

const Product = () => {

  return (
  
    <div>
       <div className="card-container">
        <h2>Recommended</h2>
        <Carousel images={images}/>
       </div>
    </div>
  )
}

export default Product
