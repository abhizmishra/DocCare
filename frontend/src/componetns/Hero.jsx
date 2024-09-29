import React from 'react'
import { assets } from '../assets/assets';

const Hero = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 bg-primary  px-20   rounded-lg md:pt-16">
      <div className="w-full flex flex-col py-10  items-center md:items-start sm:w-3/2  md:gap-8 gap-5 ">
        <h6 className="font-semibold text-3xl  md:text-5xl text-white">
          Book Appointment With Trusted Doctors
        </h6>
        <div className="md:flex md:items-center md:justify-between gap-5">
          <img src={assets.group_profiles} className='w-auto' alt="" />
          <h1 className="text-sm font-light text-white ">
            Simply browse through our extensive list of trusted doctors,
            schedule your appointment hassle-free.
          </h1>
        </div>
        <button className="grid grid-flow-col items-center justify-center bg-white rounded-full px-6 py-3 text-sm hover:scale-105 transition-transform hover:text-green-600 ">
          Book appointment
          <img
            className="ml-3 mt-1 hover:rotate-90 transition-transform "
            src={assets.arrow_icon}
            alt=""
          />
        </button>
      </div>
      <div className="flex flex-col ">
        <img className="bottom-0 w-auto " src={assets.header_img} alt="" />
      </div>
    </div>
  );
}

export default Hero
