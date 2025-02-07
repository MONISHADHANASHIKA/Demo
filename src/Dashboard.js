import React from 'react'
import './Dashboard.scss'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import Header from './common/Header';
import Footer from './common/Footer';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function Dashboard() {


  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div>
      <Header/>
      <h1 className='dash'>This is Dashboard page</h1>
      <Link to="/settings">
      <button>go to Settings</button>
      </Link>
      <Footer/>



      <Slider {...settings}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
      


    </div>

    
  )
  
}

export default Dashboard