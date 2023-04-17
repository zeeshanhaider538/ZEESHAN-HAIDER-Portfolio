import React from 'react'
import "./Portfolio.css"
import {Swiper, SwiperSlide} from "swiper/react"
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import Fitnfit from "../../img/Fitnfit.png";
import 'swiper/css';
const Portfolio = () => {
  return (
    <div className="portfolio">
        {/* Heading  */}
        <span>Recent Projects</span>
        <span>Portfolio</span>

        {/*  Slider  */}
        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider">
<SwiperSlide>
    <img src={Sidebar} alt='Sidebar'></img>
</SwiperSlide>
<SwiperSlide>
    <img src={Ecommerce} alt='Ecommercer'></img>
</SwiperSlide>
<SwiperSlide>
    <img src={HOC} alt='HOC'></img>
</SwiperSlide>
<SwiperSlide>
    <img src={Fitnfit} alt='{Fitnfit'></img>
</SwiperSlide>
        </Swiper>
        </div>
  )
}

export default Portfolio