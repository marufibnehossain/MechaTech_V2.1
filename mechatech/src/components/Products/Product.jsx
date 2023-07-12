import React from 'react';
import './Products.css';
import '../js/main';
import { Link } from 'react-router-dom';
import { BiPlus, BiLink } from 'react-icons/bi';
import GLightbox from 'glightbox';
// import Card from './Card';
// import cardinfo from './Cardinfo';


// function infos(info){
//   return <Card key={info.id} className={info.class} filter={info.filter} img={info.img} alt={info.alt} name={info.name} ptag={info.ptag} details={info.details} />
// }

const Product = () => {
  GLightbox({
    touchNavigation: true,
    loop: true,
    autoplayVideos: true,
    moreLength: 20,
    // element: [
    //   {
    //       'href': 'https://www.haqislam.org//wp-content/uploads/2013/09/Makkah.jpg',
    //       'type': 'image',
    //       'title': 'My Title',
    //       'description': 'Example',
    //   }
    // ]
  });
  
  return (
    <section id="product" className="product">
    <div className="container mx-auto">
        
        <div className="w-full">
            <div className="w-full flex justify-center">
              <ul id="product-flters" className='py-0.5 px-3.5 mt-0 mb-6 mx-auto bg-white rounder-full'>
                <li data-filter="*" class="filter-active">All</li>
                <li data-filter=".filter-pump">Pump</li>
                <li data-filter=".filter-tower">Tower</li>
                <li data-filter=".filter-blower">Blower</li>
                <li data-filter=".filter-ipump">Industrial Pump</li>
                <li data-filter=".filter-fpump">Fire Fighting Pump</li>
                <li data-filter=".filter-compressor">Screw Compressor</li>
                <li data-filter=".filter-ctower">Cooling Tower</li>
                <li data-filter=".filter-rblower">Roots Blower</li>
                <li data-filter=".filter-diffuser">Air Diffuser</li>
                <li data-filter=".filter-spump">Borehole Submersible Pump</li>
                <li data-filter=".filter-etpwtp">ETP & WTP Chemicals and Equipments</li>
              </ul>
            </div>
        </div>

        <div className="product-container w-full flex flex-wrap">
          {/* {cardinfo.map(infos)} */}
          <div className={`product-item lg:w-1/3 md:w-1/2 w-full p-3`}>
            <div className="product-wrap group">
            <img src="https://www.haqislam.org//wp-content/uploads/2013/09/Makkah.jpg" className="object-cover transition duration-1000 group-hover:scale-110" alt="" />
            <div className="product-info before:content[''] after:content[''] group-hover:opacity-100 group-hover:before:top-4 group-hover:before:left-4 group-hover:after:bottom-4 group-hover:after:right-4">
                <h4 className='text-xl text-[#012970] font-bold'>App</h4>
                <p className='text-[#012970] font-semibold text-sm uppercase p-0 m-0'>App1</p>
                <div className="product-links text-center z-40">
                <Link to={"https://www.haqislam.org//wp-content/uploads/2013/09/Makkah.jpg"} data-glightbox="type: image;" data-gallery="productGallery" className="glightbox-container text-white bg-[#4154f1] my-2.5 mx-0.5 w-9 h-9 inline-flex items-center justify-center rounded-full transition duration-300 hover:bg-[#5969f3] glightbox1 product-lightbox" title="App 1"><BiPlus className='text-2xl leading-[0]' /></Link>
                <Link to={'/'} className='text-white bg-[#4154f1] my-2.5 mx-0.5 w-9 h-9 inline-flex items-center justify-center rounded-full transition duration-300 hover:bg-[#5969f3]' title="More Details"><BiLink className='text-2xl leading-[0]' /></Link>
                </div>
            </div>
            </div>
          </div>

          <div className='product-item filter-tower lg:w-1/3 md:w-1/2 w-full p-3'>
            <div className="product-wrap group">
            <img src="https://www.haqislam.org//wp-content/uploads/2013/09/Makkah.jpg" className="object-cover transition duration-1000 group-hover:scale-110" alt="" />
            <div className="product-info before:content[''] after:content[''] group-hover:opacity-100 group-hover:before:top-4 group-hover:before:left-4 group-hover:after:bottom-4 group-hover:after:right-4">
                <h4 className='text-xl text-[#012970] font-bold'>App</h4>
                <p className='text-[#012970] font-semibold text-sm uppercase p-0 m-0'>App 1</p>
                <div className="product-links text-center z-40">
                <Link to={"https://www.haqislam.org//wp-content/uploads/2013/09/Makkah.jpg"} data-glightbox="type: image;" data-gallery="productGallery" className="glightbox text-white bg-[#4154f1] my-2.5 mx-0.5 w-9 h-9 inline-flex items-center justify-center rounded-full transition duration-300 hover:bg-[#5969f3] glightbox1 product-lightbox" title="App 1"><BiPlus className='text-2xl leading-[0]' /></Link>
                <Link to={'/'} className='text-white bg-[#4154f1] my-2.5 mx-0.5 w-9 h-9 inline-flex items-center justify-center rounded-full transition duration-300 hover:bg-[#5969f3]' title="More Details"><BiLink className='text-2xl leading-[0]' /></Link>
                </div>
            </div>
            </div>
          </div>

          <div className='product-item filter-pump lg:w-1/3 md:w-1/2 w-full p-3'>
            <div className="product-wrap group">
            <img src="https://www.haqislam.org//wp-content/uploads/2013/09/Makkah.jpg" className="object-cover transition duration-1000 group-hover:scale-110" alt="" />
            <div className="product-info before:content[''] after:content[''] group-hover:opacity-100 group-hover:before:top-4 group-hover:before:left-4 group-hover:after:bottom-4 group-hover:after:right-4">
                <h4 className='text-xl text-[#012970] font-bold'>App</h4>
                <p className='text-[#012970] font-semibold text-sm uppercase p-0 m-0'>App1</p>
                <div className="product-links text-center z-40">
                <Link to={"https://www.haqislam.org//wp-content/uploads/2013/09/Makkah.jpg"} data-glightbox="type: image;" data-gallery="productGallery" className="glightbox text-white bg-[#4154f1] my-2.5 mx-0.5 w-9 h-9 inline-flex items-center justify-center rounded-full transition duration-300 hover:bg-[#5969f3] glightbox1 product-lightbox" title="App 1"><BiPlus className='text-2xl leading-[0]' /></Link>
                <Link to={'/'} className='text-white bg-[#4154f1] my-2.5 mx-0.5 w-9 h-9 inline-flex items-center justify-center rounded-full transition duration-300 hover:bg-[#5969f3]' title="More Details"><BiLink className='text-2xl leading-[0]' /></Link>
                </div>
            </div>
            </div>
          </div>

          <div className='product-item filter-pump lg:w-1/3 md:w-1/2 w-full p-3'>
            <div className="product-wrap group">
            <img src="https://www.haqislam.org//wp-content/uploads/2013/09/Makkah.jpg" className="object-cover transition duration-1000 group-hover:scale-110" alt="" />
            <div className="product-info before:content[''] after:content[''] group-hover:opacity-100 group-hover:before:top-4 group-hover:before:left-4 group-hover:after:bottom-4 group-hover:after:right-4">
                <h4 className='text-xl text-[#012970] font-bold'>App</h4>
                <p className='text-[#012970] font-semibold text-sm uppercase p-0 m-0'>App1</p>
                <div className="product-links text-center z-40">
                <Link to={"https://www.haqislam.org//wp-content/uploads/2013/09/Makkah.jpg"} data-glightbox="type: image;" data-gallery="productGallery" className="glightbox text-white bg-[#4154f1] my-2.5 mx-0.5 w-9 h-9 inline-flex items-center justify-center rounded-full transition duration-300 hover:bg-[#5969f3] glightbox1 product-lightbox" title="App 1"><BiPlus className='text-2xl leading-[0]' /></Link>
                <Link to={'/'} className='text-white bg-[#4154f1] my-2.5 mx-0.5 w-9 h-9 inline-flex items-center justify-center rounded-full transition duration-300 hover:bg-[#5969f3]' title="More Details"><BiLink className='text-2xl leading-[0]' /></Link>
                </div>
            </div>
            </div>
          </div>

          <div className='product-item filter-tower lg:w-1/3 md:w-1/2 w-full p-3'>
            <div className="product-wrap group">
            <img src="https://www.haqislam.org//wp-content/uploads/2013/09/Makkah.jpg" className="object-cover transition duration-1000 group-hover:scale-110" alt="" />
            <div className="product-info before:content[''] after:content[''] group-hover:opacity-100 group-hover:before:top-4 group-hover:before:left-4 group-hover:after:bottom-4 group-hover:after:right-4">
                <h4 className='text-xl text-[#012970] font-bold'>App</h4>
                <p className='text-[#012970] font-semibold text-sm uppercase p-0 m-0'>App 1</p>
                <div className="product-links text-center z-40">
                <Link to={"https://www.haqislam.org//wp-content/uploads/2013/09/Makkah.jpg"} data-glightbox="type: image;" data-gallery="productGallery" className="glightbox text-white bg-[#4154f1] my-2.5 mx-0.5 w-9 h-9 inline-flex items-center justify-center rounded-full transition duration-300 hover:bg-[#5969f3] glightbox1 product-lightbox" title="App 1"><BiPlus className='text-2xl leading-[0]' /></Link>
                <Link to={'/'} className='text-white bg-[#4154f1] my-2.5 mx-0.5 w-9 h-9 inline-flex items-center justify-center rounded-full transition duration-300 hover:bg-[#5969f3]' title="More Details"><BiLink className='text-2xl leading-[0]' /></Link>
                </div>
            </div>
            </div>
          </div>

          <div className='product-item filter-pump lg:w-1/3 md:w-1/2 w-full p-3'>
            <div className="product-wrap group">
            <img src="https://www.haqislam.org//wp-content/uploads/2013/09/Makkah.jpg" className="object-cover transition duration-1000 group-hover:scale-110" alt="" />
            <div className="product-info before:content[''] after:content[''] group-hover:opacity-100 group-hover:before:top-4 group-hover:before:left-4 group-hover:after:bottom-4 group-hover:after:right-4">
                <h4 className='text-xl text-[#012970] font-bold'>App</h4>
                <p className='text-[#012970] font-semibold text-sm uppercase p-0 m-0'>App1</p>
                <div className="product-links text-center z-40">
                <Link to={"https://www.haqislam.org//wp-content/uploads/2013/09/Makkah.jpg"} data-glightbox="type: image;" data-gallery="productGallery" className="glightbox text-white bg-[#4154f1] my-2.5 mx-0.5 w-9 h-9 inline-flex items-center justify-center rounded-full transition duration-300 hover:bg-[#5969f3] glightbox1 product-lightbox" title="App 1"><BiPlus className='text-2xl leading-[0]' /></Link>
                <Link to={'/'} className='text-white bg-[#4154f1] my-2.5 mx-0.5 w-9 h-9 inline-flex items-center justify-center rounded-full transition duration-300 hover:bg-[#5969f3]' title="More Details"><BiLink className='text-2xl leading-[0]' /></Link>
                </div>
            </div>
            </div>
          </div>


        </div>

        
    </div>
    </section>
  )
}

export default Product;
