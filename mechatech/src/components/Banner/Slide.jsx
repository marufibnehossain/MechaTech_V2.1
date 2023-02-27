import React from 'react';
import { Carousel } from 'flowbite-react';
import pics from './Pictures';
import SlideImg from './SlideImg';

function Image(pic){
  return <SlideImg key={pic.id} img={pic.img} alt={pic.alt} />
}


const Slide = () => {
  return (
    <div className="h-60 w-10/12 sm:h-80 xl:h-96 2xl:h-96">
      <Carousel className='overflow-hidden'>
        {pics.map(Image)}
      </Carousel>
    </div>
  )
}

export default Slide;
