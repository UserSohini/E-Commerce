import React from 'react'
import './Product.css'

const Product = () => {
  return (
    <div>
       <div className="card-container">
        <h2>Recommended</h2>
        <section className="card"> 
            <img src="ts.jpg" alt="T-Shirts" />
            <div className="card-details">
                <h3 className="card-title">T-shirt</h3>
                <section className="card-reviews"></section>
            </div>
            <img src="ts.jpg" alt="T-Shirts" />
            <div className="card-details">
                <h3 className="card-title">T-shirt</h3>
                <section className="card-reviews"></section>
            </div>
            <img src="ts.jpg" alt="T-Shirts" />
            <div className="card-details">
                <h3 className="card-title">T-shirt</h3>
                <section className="card-reviews"></section>
            </div>
            <img src="ts.jpg" alt="T-Shirts" />
            <div className="card-details">
                <h3 className="card-title">T-shirt</h3>
                <section className="card-reviews"></section>
            </div>
        </section>
       </div>
    </div>
  )
}

export default Product
