import React from 'react'

const SlideImg = (props) => {
  return (
    <img
        className='h-full w-full object-cover'
        src={props.img}
        alt={props.alt}
    />
  )
}

export default SlideImg;
