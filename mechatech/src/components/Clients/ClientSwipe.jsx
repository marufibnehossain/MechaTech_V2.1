import React from 'react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './swipercss.css';
import HeadName from '../Shared/HeadName';
import headinfo from '../Shared/headerInfo';
// import ClientLogo from './ClientLogo';


// function LogoImg(logo){
//     return(
//         <ClientLogo key={logo.id} img={logo.img} alt={logo.alt} />
//     ); 
// }


const ClientSwipe = () => {
  return (
    <section className='container mx-auto sm:h-96 xs:h-80 h-[300px] sm:py-16 py-12'>
      <HeadName head={headinfo[0].name} prg={headinfo[0].para} />
      <div className='w-full flex justify-center'>
        
        <Swiper
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
              200: {
                  slidesPerView: 2,
                  spaceBetween: 0,
              },
              350: {
                slidesPerView: 2,
                spaceBetween: 0,
              },
              500: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              640: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              900: {
                  slidesPerView: 5,
                  spaceBetween: 40,
                },
              1024: {
                slidesPerView: 5,
                spaceBetween: 40,
              },
              1200: {
                  slidesPerView: 6,
                  spaceBetween: 50,
              },
              1300: {
                  slidesPerView: 6,
                  spaceBetween: 60,
              },
              1400: {
                  slidesPerView: 6,
                  spaceBetween: 90,
              },
            }}
          modules={[Autoplay, Pagination, Navigation]}
          className="container lg:h-40 sm:h-36 h-32 swiper-pagination"
        >
          <SwiperSlide className='text-center text-lg bg-white flex justify-center items-center'>
              <img className='block lg:w-40 md:w-32 w-28 h-auto object-cover hover:scale-110 transtion duration-300' src="https://images.deliveryhero.io/image/talabat/restaurants/AlBaik_Logo3_(3)_(1)_637720403462343025.png?width=300" alt="" />
          </SwiperSlide>
          <SwiperSlide className='text-center text-lg bg-white flex justify-center items-center'>
              <img className='block lg:w-40 md:w-32 w-28 h-auto object-cover hover:scale-110 transtion duration-300' src="https://images.deliveryhero.io/image/talabat/restaurants/AlBaik_Logo3_(3)_(1)_637720403462343025.png?width=300" alt="" />
          </SwiperSlide>
          <SwiperSlide className='text-center text-lg bg-white flex justify-center items-center'>
              <img className='block lg:w-40 md:w-32 w-28 h-auto object-cover hover:scale-110 transtion duration-300' src="https://images.deliveryhero.io/image/talabat/restaurants/AlBaik_Logo3_(3)_(1)_637720403462343025.png?width=300" alt="" />
          </SwiperSlide>
          <SwiperSlide className='text-center text-lg bg-white flex justify-center items-center'>
              <img className='block lg:w-40 md:w-32 w-28 h-auto object-cover hover:scale-110 transtion duration-300' src="https://images.deliveryhero.io/image/talabat/restaurants/AlBaik_Logo3_(3)_(1)_637720403462343025.png?width=300" alt="" />
          </SwiperSlide>
          <SwiperSlide className='text-center text-lg bg-white flex justify-center items-center'>
              <img className='block lg:w-40 md:w-32 w-28 h-auto object-cover hover:scale-110 transtion duration-300' src="https://images.deliveryhero.io/image/talabat/restaurants/AlBaik_Logo3_(3)_(1)_637720403462343025.png?width=300" alt="" />
          </SwiperSlide>
          <SwiperSlide className='text-center text-lg bg-white flex justify-center items-center'>
              <img className='block lg:w-40 md:w-32 w-28 h-auto object-cover hover:scale-110 transtion duration-300' src="https://images.deliveryhero.io/image/talabat/restaurants/AlBaik_Logo3_(3)_(1)_637720403462343025.png?width=300" alt="" />
          </SwiperSlide>
          <SwiperSlide className='text-center text-lg bg-white flex justify-center items-center'>
              <img className='block lg:w-40 md:w-32 w-28 h-auto object-cover hover:scale-110 transtion duration-300' src="https://images.deliveryhero.io/image/talabat/restaurants/AlBaik_Logo3_(3)_(1)_637720403462343025.png?width=300" alt="" />
          </SwiperSlide>
          <SwiperSlide className='text-center text-lg bg-white flex justify-center items-center'>
              <img className='block lg:w-40 md:w-32 w-28 h-auto object-cover hover:scale-110 transtion duration-300' src="https://images.deliveryhero.io/image/talabat/restaurants/AlBaik_Logo3_(3)_(1)_637720403462343025.png?width=300" alt="" />
          </SwiperSlide>
          <SwiperSlide className='text-center text-lg bg-white flex justify-center items-center'>
              <img className='block lg:w-40 md:w-32 w-28 h-auto object-cover hover:scale-110 transtion duration-300' src="https://images.deliveryhero.io/image/talabat/restaurants/AlBaik_Logo3_(3)_(1)_637720403462343025.png?width=300" alt="" />
          </SwiperSlide>
          <SwiperSlide className='text-center text-lg bg-white flex justify-center items-center'>
              <img className='block lg:w-40 md:w-32 w-28 h-auto object-cover hover:scale-110 transtion duration-300' src="https://images.deliveryhero.io/image/talabat/restaurants/AlBaik_Logo3_(3)_(1)_637720403462343025.png?width=300" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

export default ClientSwipe;
