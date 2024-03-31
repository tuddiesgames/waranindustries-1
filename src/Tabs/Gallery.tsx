import React from "react"
import agriRobot from '../images/agriRobot.jpeg'

const Gallery = ()=>{
    return(
        <div className="galleryBackground w-full h-full bg-cover bg-center" id="Gallery">



        <div className="h-80"></div>
        <img src={agriRobot} alt="Robotimage" className="w-1/3 ml-20" />




        <div className="p-10 float-right ml-auto rounded-2xl text-right max-w-2xl bg-gray-300 bg-opacity-90 mr-10">
    <p>Our agricultural robots offer a multitude of benefits, including harvesting, farming, and ensuring safety. They care for your plants more than you might imagine. Our intelligent system analyzes each individual plant and efficiently manages their growth. </p>
</div>



        <div className="h-60"></div>

        </div>

    )
}

export default Gallery