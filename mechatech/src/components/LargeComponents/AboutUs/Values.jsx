import React from 'react';
import HeadName from '../../Shared/HeadName';
import headinfo from '../../Data/headerInfo';

const Values = () => {
  return (
    <section id='values' className='values py-20'>
      <div className='container mx-auto' data-aos="fade-up">
        <HeadName head={headinfo[1].name} prg={headinfo[1].para} />
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-8 lg:mx-0 mx-4'>
            <div className='col-span-1' data-aos="fade-up" data-aos-delay="200">
                <div class="border-0 transition duration-300 overflow-hidden h-full shadow-[0px_0_10px_0_rgba(1,41,112,0.08)] hover:shadow-[0px_0_30px_0_rgba(1,41,112,0.08)]">
                    <img src="https://raw.githubusercontent.com/marufibnehossain/MechaTech/main/assets/img/images/marketing-team-setting-up-product-advertisement.jpg" class="object-cover w-full px-[5vw] py-[3vw] transition duration-500 scale-110 hover:scale-100" alt="" />
                    <div class="card-body p-5">
                        <h3 class="text-2xl text-[#012970] font-bold mb-4">Lorem ipsum dolor sit.</h3>
                        <p class="text-gray-500 my-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis laborum recusandae voluptates.</p>
                    </div>
                </div>
            </div>
            <div className='col-span-1' data-aos="fade-up" data-aos-delay="200">
                <div class="border-0 transition duration-300 overflow-hidden h-full shadow-[0px_0_10px_0_rgba(1,41,112,0.08)] hover:shadow-[0px_0_30px_0_rgba(1,41,112,0.08)]">
                    <img src="https://raw.githubusercontent.com/marufibnehossain/MechaTech/main/assets/img/images/employees-busy-in-the-office.jpg" class="object-cover w-full px-[5vw] py-[3vw] transition duration-500 scale-110 hover:scale-100" alt="" />
                    <div class="card-body p-5">
                        <h3 class="text-2xl text-[#012970] font-bold mb-4">Lorem ipsum dolor sit.</h3>
                        <p class="text-gray-500 my-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis laborum recusandae voluptates.</p>
                    </div>
                </div>
            </div>
            <div className='col-span-1' data-aos="fade-up" data-aos-delay="200">
                <div class="border-0 transition duration-300 overflow-hidden h-full shadow-[0px_0_10px_0_rgba(1,41,112,0.08)] hover:shadow-[0px_0_30px_0_rgba(1,41,112,0.08)]">
                    <img src="https://raw.githubusercontent.com/marufibnehossain/MechaTech/main/assets/img/images/employee-discussing-strategy-in-the-office.jpg" class="object-cover w-full px-[5vw] py-[3vw] transition duration-500 scale-110 hover:scale-100" alt="" />
                    <div class="card-body p-5">
                        <h3 class="text-2xl text-[#012970] font-bold mb-4">Lorem ipsum dolor sit.</h3>
                        <p class="text-gray-500 my-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis laborum recusandae voluptates.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Values;
