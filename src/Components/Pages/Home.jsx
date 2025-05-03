import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import './Home.css'
import Product from '../Products/Product'

const Home = () => {
  return (
    <div>
      <Sidebar/>
      <div style={{ marginLeft: '260px', padding: '20px' }}/>
      <div className="content">
       <h1>Print your <span><i>Insignia</i></span> here...</h1>
       <br />
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet id cum adipisci aperiam eos odio quod quam esse amet necessitatibus quas, explicabo similique numquam est alias neque nisi possimus assumenda.</p>
       </div>
       <Product/>
    </div>
  )
}

export default Home
