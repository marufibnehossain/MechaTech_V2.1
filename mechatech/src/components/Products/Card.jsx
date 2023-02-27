import React from 'react';
import { Link } from 'react-router-dom';
import { BiPlus, BiLink } from 'react-icons/bi';

const Card = (props) => {
  return (
    <div className={'{props.filter} {props.className}'}>
        <div className="product-wrap group">
        <img src={props.img} className="object-cover transition duration-1000 group-hover:scale-110" alt={props.alt} />
        <div className="product-info before:content[''] after:content[''] group-hover:opacity-100 group-hover:before:top-4 group-hover:before:left-4 group-hover:after:bottom-4 group-hover:after:right-4">
            <h4 className='text-xl text-[#012970] font-bold'>{props.name}</h4>
            <p className='text-[#012970] font-semibold text-sm uppercase p-0 m-0'>{props.ptag}</p>
            <div className="product-links text-center z-40">
            <Link to={props.img} data-glightbox="type: image;" data-gallery="gallery1" className="text-white bg-[#4154f1] my-2.5 mx-0.5 w-9 h-9 inline-flex items-center justify-center rounded-full transition duration-300 hover:bg-[#5969f3] glightbox1 product-lightbox" title="App 1"><BiPlus className='text-2xl leading-[0]' /></Link>
            <Link to={props.details} className='text-white bg-[#4154f1] my-2.5 mx-0.5 w-9 h-9 inline-flex items-center justify-center rounded-full transition duration-300 hover:bg-[#5969f3]' title="More Details"><BiLink className='text-2xl leading-[0]' /></Link>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Card;
