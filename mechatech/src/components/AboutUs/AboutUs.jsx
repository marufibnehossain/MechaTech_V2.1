import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import { BiReceipt, BiCubeAlt, BiImages, BiShield } from 'react-icons/bi';
import './Polygon.css';

const AboutUs = () => {
  return (
    <section className='about py-20 bg-[#f0f5ff] shadow-[0_0_25px_0_rgba(0, 0, 0, 0.1)]'>
      <div className='container mx-auto grid grid-cols-1 lg:grid-cols-7'>
        <div className='md:col-span-3 py-6 lg:text-left md:pr-3'>
            <header className="sm:pb-5 pb-6">
                <h2 className='text-sm font-bold m-0 text-[#4154f1] uppercase tracking-[1px]'>about us</h2>
            </header>
            <h3 className='font-bold text-4xl text-[#012970] mb-7'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <p className='text-base mb-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias aut ducimus praesentium eaque, fugit corrupti maiores natus. Minus provident placeat modi? Quisquam dolorum animi quia!</p>
            <Link to={'/'} className="btn scrollto py-2 px-7 text-black rounded-full transition duration-300 uppercase font-semibold text-sm inline-flex items-center hover:text-white hover:bg-[#4154f1]" style={{border:"2px solid #4154f1"}}><span>About us</span><FaChevronRight className='ml-2' /></Link>
        </div>
        <div className='md:col-span-4 py-6'>
            <div className='grid md:grid-cols-2 grid-cols-1 sm:gap-7 gap-8'>
                <div className='lg:text-left flex flex-col lg:items-start items-center' data-aos="fade-up" data-aos-delay="100">
                    <BiReceipt className='text-[#4154f1] text-[40px]' />
                    <h4 className='text-xl font-bold text-[#012970] py-2'>Corporis voluptates sit</h4>
                    <p className='text-base'>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                </div>
                <div className='lg:text-left flex flex-col lg:items-start items-center' data-aos="fade-up" data-aos-delay="100">
                    <BiCubeAlt className='text-[#ee6c20] text-[40px]' />
                    <h4 className='text-xl font-bold text-[#012970] py-2'>Ullamco laboris nisi</h4>
                    <p className='text-base'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                </div>
                <div className='lg:text-left flex flex-col lg:items-start items-center' data-aos="fade-up" data-aos-delay="100">
                    <BiImages className='text-[#15be56] text-[40px]' />
                    <h4 className='text-xl font-bold text-[#012970] py-2'>Labore consequatur</h4>
                    <p className='text-base'>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                </div>
                <div className='lg:text-left flex flex-col lg:items-start items-center' data-aos="fade-up" data-aos-delay="100">
                    <BiShield className='text-[#bb0852] text-[40px]' />
                    <h4 className='text-xl font-bold text-[#012970] py-2'>Beatae veritatis</h4>
                    <p className='text-base'>Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs;
