import Sidebar from '../Sidebar/Sidebar';
import './Home.css'
import Product from '../Products/Product'
import Footer from './Footer/Footer';


const Home = () => {

  return (
     <div>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ marginLeft: '250px', padding: '20px', flexGrow: 1 }}>
        </div>
      </div>
      <div className="content">
       <h1>Print your <span><i>Insignia</i></span> here...</h1>
       <br />
       <p>Let your creativity and passion get known throughout the world. Gift your business a signature exclusive to your brand.  </p>
      </div>
      <Product />
      <div style={{padding: '50px'}}></div>
      <Footer/>
    </div>
  )
}

export default Home
