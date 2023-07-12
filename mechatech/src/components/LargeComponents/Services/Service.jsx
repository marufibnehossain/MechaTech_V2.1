import React from 'react';
import './Service.css';
import HeadName from '../../Shared/HeadName';
import headinfo from '../../Data/headerInfo';
import { Link } from 'react-router-dom';
import { RiDiscussLine } from 'react-icons/ri';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';


const Service = () => {
  return (
    <section className='services py-20 bg-[#f0f5ff] shadow-[0_0_25px_0_rgba(0,0,0,0.1)]'>
      <div className='container mx-auto'>
        <HeadName head={headinfo[2].name} prg={headinfo[2].para} />
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-7 sm:mx-0 mx-2'>
          <div className="group" data-aos="fade-up" data-aos-delay="200">
            <div className="shadow-[0_0_30px_0_rgba(1,41,1120,0.08)] group-hover:bg-[#2db6fa] py-[60px] px-[30px] transition duration-[0.3s] rounded-md border-b-[3px] border-[#2db6fa] blue text-center">
              <div className='text-4xl py-6 px-5 text-[#2db6fa] bg-[#dbf3fe] group-hover:bg-white rounded relative mb-6 inline-block transition duration-[0.3s]'><RiDiscussLine /></div>
              <h3 className='text-[#444444] group-hover:text-white text-[28px] mb-6 font-bold'>Lorem, ipsum.</h3>
              <p className='text-base leading-6 group-hover:text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa omnis perferendis tenetur corporis sapiente? Itaque explicabo consequatur saepe!</p>
              <Link to="/" className="text-[#2db6fa] group-hover:text-white inline-flex items-center justify-center font-semibold text-base py-2 px-5"><span>Read More</span><HiOutlineArrowNarrowRight className='ml-[5px] text-xl' /></Link>
            </div>
          </div>
          <div className="group" data-aos="fade-up" data-aos-delay="200">
            <div className="shadow-[0_0_30px_0_rgba(1,41,1120,0.08)] group-hover:bg-[#f68c09] py-[60px] px-[30px] transition duration-[0.3s] rounded-md border-b-[3px] border-[#f68c09] blue text-center">
              <div className='text-4xl py-6 px-5 text-[#f68c09] bg-[#dbf3fe] group-hover:bg-white rounded relative mb-6 inline-block transition duration-[0.3s]'><RiDiscussLine /></div>
              <h3 className='text-[#444444] group-hover:text-white text-[28px] mb-6 font-bold'>Lorem, ipsum.</h3>
              <p className='text-base leading-6 group-hover:text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa omnis perferendis tenetur corporis sapiente? Itaque explicabo consequatur saepe!</p>
              <Link to="/" className="text-[#f68c09] group-hover:text-white inline-flex items-center justify-center font-semibold text-base py-2 px-5"><span>Read More</span><HiOutlineArrowNarrowRight className='ml-[5px] text-xl' /></Link>
            </div>
          </div>
          <div className="group" data-aos="fade-up" data-aos-delay="200">
            <div className="shadow-[0_0_30px_0_rgba(1,41,1120,0.08)] group-hover:bg-[#08da4e] py-[60px] px-[30px] transition duration-[0.3s] rounded-md border-b-[3px] border-[#08da4e] blue text-center">
              <div className='text-4xl py-6 px-5 text-[#08da4e] bg-[#dbf3fe] group-hover:bg-white rounded relative mb-6 inline-block transition duration-[0.3s]'><RiDiscussLine /></div>
              <h3 className='text-[#444444] group-hover:text-white text-[28px] mb-6 font-bold'>Lorem, ipsum.</h3>
              <p className='text-base leading-6 group-hover:text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa omnis perferendis tenetur corporis sapiente? Itaque explicabo consequatur saepe!</p>
              <Link to="/" className="text-[#08da4e] group-hover:text-white inline-flex items-center justify-center font-semibold text-base py-2 px-5"><span>Read More</span><HiOutlineArrowNarrowRight className='ml-[5px] text-xl' /></Link>
            </div>
          </div>
          <div className="group" data-aos="fade-up" data-aos-delay="200">
            <div className="shadow-[0_0_30px_0_rgba(1,41,1120,0.08)] group-hover:bg-[#e9222c] py-[60px] px-[30px] transition duration-[0.3s] rounded-md border-b-[3px] border-[#e9222c] blue text-center">
              <div className='text-4xl py-6 px-5 text-[#e9222c] bg-[#dbf3fe] group-hover:bg-white rounded relative mb-6 inline-block transition duration-[0.3s]'><RiDiscussLine /></div>
              <h3 className='text-[#444444] group-hover:text-white text-[28px] mb-6 font-bold'>Lorem, ipsum.</h3>
              <p className='text-base leading-6 group-hover:text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa omnis perferendis tenetur corporis sapiente? Itaque explicabo consequatur saepe!</p>
              <Link to="/" className="text-[#e9222c] group-hover:text-white inline-flex items-center justify-center font-semibold text-base py-2 px-5"><span>Read More</span><HiOutlineArrowNarrowRight className='ml-[5px] text-xl' /></Link>
            </div>
          </div>
          <div className="group" data-aos="fade-up" data-aos-delay="200">
            <div className="shadow-[0_0_30px_0_rgba(1,41,1120,0.08)] group-hover:bg-[#b50edf] py-[60px] px-[30px] transition duration-[0.3s] rounded-md border-b-[3px] border-[#b50edf] blue text-center">
              <div className='text-4xl py-6 px-5 text-[#b50edf] bg-[#dbf3fe] group-hover:bg-white rounded relative mb-6 inline-block transition duration-[0.3s]'><RiDiscussLine /></div>
              <h3 className='text-[#444444] group-hover:text-white text-[28px] mb-6 font-bold'>Lorem, ipsum.</h3>
              <p className='text-base leading-6 group-hover:text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa omnis perferendis tenetur corporis sapiente? Itaque explicabo consequatur saepe!</p>
              <Link to="/" className="text-[#b50edf] group-hover:text-white inline-flex items-center justify-center font-semibold text-base py-2 px-5"><span>Read More</span><HiOutlineArrowNarrowRight className='ml-[5px] text-xl' /></Link>
            </div>
          </div>
          <div className="group" data-aos="fade-up" data-aos-delay="200">
            <div className="shadow-[0_0_30px_0_rgba(1,41,1120,0.08)] group-hover:bg-[#f51f9c] py-[60px] px-[30px] transition duration-[0.3s] rounded-md border-b-[3px] border-[#f51f9c] blue text-center">
              <div className='text-4xl py-6 px-5 text-[#f51f9c] bg-[#dbf3fe] group-hover:bg-white rounded relative mb-6 inline-block transition duration-[0.3s]'><RiDiscussLine /></div>
              <h3 className='text-[#444444] group-hover:text-white text-[28px] mb-6 font-bold'>Lorem, ipsum.</h3>
              <p className='text-base leading-6 group-hover:text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa omnis perferendis tenetur corporis sapiente? Itaque explicabo consequatur saepe!</p>
              <Link to="/" className="text-[#f51f9c] group-hover:text-white inline-flex items-center justify-center font-semibold text-base py-2 px-5"><span>Read More</span><HiOutlineArrowNarrowRight className='ml-[5px] text-xl' /></Link>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Service;
