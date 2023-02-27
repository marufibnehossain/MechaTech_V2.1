import React from 'react';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const ClientLogo = (props) => {
  return (
    <div>
        <SwiperSlide className='text-center text-lg bg-white flex justify-center items-center'>
            <img className='block w-full h-full object-cover' src={props.img} alt={props.alt} />
        </SwiperSlide>
    </div>
  )
}

export default ClientLogo;
