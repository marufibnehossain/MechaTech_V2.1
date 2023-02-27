import React from 'react';
import { BiSmile } from 'react-icons/bi'

const Counter = () => {
  return (
    <section className='counts' id='counts'>
      <div className='container mx-auto' data-aos="fade-up">
        <div className='grid lg:grid-cols-4 grid-cols-1 gap-8'>
            <div class="col-span-1">
              <div class="flex items-center p-8 w-full bg-white shadow-[0_0_30px_0_rgba(1,41,112,0.08)]">
                <BiSmile className='text-[#4154f1] text-[42px] mr-5' />
                <div>
                  <span data-purecounter-start="0" data-purecounter-end="255" data-purecounter-duration="1" class="purecounter text-4xl block font-semibold text-[#0b198f]"></span>
                  <p className='p-0 m-0 font-sans text-sm'>Happy Clients</p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Counter;
