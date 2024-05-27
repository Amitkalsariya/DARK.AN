import React, { Component } from "react";
import Slider from "react-slick";
const Car = () => {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false
    };
    return (
      <div className="slide">
         <div className="container">
         <div className="slider-container ">
            <h1>OUR TOP STREAMERS</h1>
            <h2>TOP RATED STREAMERS</h2>
            
            <Slider {...settings}>
                <div className="a">
                    <img src="https://mykd-react.vercel.app/assets/img/team/streamers02.png" alt="" />
                </div>
                <div className="a">
                    <img src="https://mykd-react.vercel.app/assets/img/team/streamers01.png" alt="" />

                </div>
                <div className="a">
                    <img src="https://mykd-react.vercel.app/assets/img/team/streamers03.png" alt="" />

                </div>
                <div className="a">
                    <img src="https://mykd-react.vercel.app/assets/img/team/streamers04.png" alt="" />

                </div>
                <div className="a">
                    <img src="https://mykd-react.vercel.app/assets/img/team/streamers05.png" alt="" />

                </div>
                <div className="a">
                    <img src="https://mykd-react.vercel.app/assets/img/team/streamers06.png" alt="" />

                </div>
                <div className="a">
                    <img src="https://mykd-react.vercel.app/assets/img/team/streamers07.png" alt="" />

                </div>
             
            </Slider>
        </div>
       </div>
      </div>
    )
}

export default Car
