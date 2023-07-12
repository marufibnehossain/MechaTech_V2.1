import React from 'react'
import { Link } from 'react-router-dom';
import Slide from './Slide';
import { AiOutlineRight } from 'react-icons/ai'

const Banner = () => {
  return (
    <div className='bg-gray-300'>
      <div className="container mx-auto bg-transparent h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7" id="start" data-aos="zoom-out" data-aos-delay="100">
        <div className="flex flex-col md:justify-center justify-end p-5 lg:col-span-4">
          <h1 className="lg:text-4xl lg:text-left sm:text-2xl text-xl text-blue-500 font-bold leading-relaxed mb-5">Mechatech Engineers offers Ultimate Ulility Support.</h1>
          <h2 className="text-black lg:text-left lg:text-2xl md:text-xl text-lg font-bold leading-8 mb-5">ELEVATOR, ESCALATOR, GENERATOR, SUBSTATION SALES & SERVICES.</h2>
          <Link href="#about" className="flex items-center justify-center bg-transparent border-2 border-white text-white sm:px-5 px-3 sm:py-3 py-2 xl:w-3/12 lg:w-5/12 2xs:w-5/12 w-10/12  4xs:max-lg:mx-auto rounded-full uppercase font-semibold text-sm hover:bg-white hover:text-black">
            <p>Get Started</p>
            <AiOutlineRight className='text-lg mx-1' />
          </Link>
        </div>
        <div className="flex items-center justify-center lg:col-span-3">
          <Slide />
        </div>
      </div>

    </div>
  )
}

export default Banner;
