import React from "react"
import tuddies from '../images/tuddies.png'

const Softwares = ()=>{
    return(
        <div className="softwares w-full h-full bg-cover bg-center" id="Softwares">

        <div className="h-80"></div>
        <img src={tuddies} alt="Robotimage" className="w-1/3 ml-20" />

        <div className="p-10 float-right ml-auto rounded-2xl text-right max-w-2xl bg-gray-700 bg-opacity-90 mr-10">
        <p>Tuddies is a gaming company, yeah! We create games that encompass elements like horror, puzzle-solving, action, adventure, etc. Our company was founded on February 21st, 2022, by Dhurgesh Waran and Dhinesh. Moreover,
            we specialize in developing software applications with enhanced user interfaces and graphics. </p>
         <p className="text-yellow-500 mr-60">Know more</p>
        </div>

        <div className="h-60"></div>

        </div>

    )
}

export default Softwares