import React from 'react';
import HeadName from '../../Shared/HeadName';
import headinfo from '../../Data/headerInfo'; 
import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from 'react-icons/bi';
register();



const ReviewSection = () => {
    const swiperRef = useRef(null);

  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
        naviogation:true,
        pagination: true,
        speed: 600,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        slidesPerView: 3,
        breakpoints: {
            320: {
              slidesPerView: 1,
              spaceBetween: 40
            },
            768:{
                slidesPerView: 2,
                spaceBetween: 30
            },
            1200: {
              slidesPerView: 3,
            }
          },
      // These are new...
      injectStyles: [
        `
          .swiper-pagination-bullet {
            width: 12px;
            height: 12px;
            background-color: #fff;
            opacity: 1;
            border: 1px solid #4154f1;
          }
          .swiper-pagination-bullet-active {
            background-color: #4154f1;
          }
          .swiper-pagination {
            margin-top: 16px;
            position: relative;
          }
      `,
      ],
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);

  return (
    <section id="review" className="review lg:my-24 my-16">
        <div className="container mx-auto" data-aos="fade-up">
            <HeadName head={headinfo[3].name} prg={headinfo[3].para} />

            <swiper-container ref={swiperRef} init="false" className='overflow-hidden swiper-pagination'> 
                <swiper-slide className="blue-slide">
                    <div className="swiper-slide">
                        <div className="review-wrap text-left">
                            <div className="review-item box-content p-8 mx-4 my-8 min-h-[200px] bg-white relative rounded-2xl shadow-[0px_2px_12px_0_rgba(0,0,0,0.08)]">
                                <img src="https://www.sideshow.com/storage/product-images/904749/captain-america-deluxe_marvel_square.jpg" className="review-img w-24 rounded-xl border-4 border-white float-left mr-3" alt="" />
                                <h3 className="text-2xl font-bold mt-4 mb-2">Steve Rogers</h3>
                                <h4 className="text-base text-gray-600">Avenger - Captain America</h4>
                                <p className="italic mt-8 mb-4">
                                    <BiSolidQuoteAltLeft className="text-pink-100 text-2xl inline-block -left-1 relative -top-2" />
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio eos, aspernatur nihil voluptatem perspiciatis deserunt sit nulla odio qui, iusto, suscipit ipsa architecto voluptate nemo.
                                    <BiSolidQuoteAltRight className="text-pink-100 text-2xl inline-block -right-1 relative -top-2" />
                                </p>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide className="yellow-slide">
                    <div className="swiper-slide">
                        <div className="review-wrap text-left">
                            <div className="review-item box-content p-8 mx-4 my-8 min-h-[200px] bg-white relative rounded-2xl shadow-[0px_2px_12px_0_rgba(0,0,0,0.08)]">
                                <img src="https://www.sideshow.com/storage/product-images/904749/captain-america-deluxe_marvel_square.jpg" className="review-img w-24 rounded-xl border-4 border-white float-left mr-3" alt="" />
                                <h3 className="text-2xl font-bold mt-4 mb-2">Steve Rogers</h3>
                                <h4 className="text-base text-gray-600">Avenger - Captain America</h4>
                                <p className="italic mt-8 mb-4">
                                    <BiSolidQuoteAltLeft className="text-pink-100 text-2xl inline-block -left-1 relative -top-2" />
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio eos, aspernatur nihil voluptatem perspiciatis deserunt sit nulla odio qui, iusto, suscipit ipsa architecto voluptate nemo.
                                    <BiSolidQuoteAltRight className="text-pink-100 text-2xl inline-block -right-1 relative -top-2" />
                                </p>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide className="yellow-slide">
                    <div className="swiper-slide">
                        <div className="review-wrap text-left">
                            <div className="review-item box-content p-8 mx-4 my-8 min-h-[200px] bg-white relative rounded-2xl shadow-[0px_2px_12px_0_rgba(0,0,0,0.08)]">
                                <img src="https://www.sideshow.com/storage/product-images/904749/captain-america-deluxe_marvel_square.jpg" className="review-img w-24 rounded-xl border-4 border-white float-left mr-3" alt="" />
                                <h3 className="text-2xl font-bold mt-4 mb-2">Steve Rogers</h3>
                                <h4 className="text-base text-gray-600">Avenger - Captain America</h4>
                                <p className="italic mt-8 mb-4">
                                    <BiSolidQuoteAltLeft className="text-pink-100 text-2xl inline-block -left-1 relative -top-2" />
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio eos, aspernatur nihil voluptatem perspiciatis deserunt sit nulla odio qui, iusto, suscipit ipsa architecto voluptate nemo.
                                    <BiSolidQuoteAltRight className="text-pink-100 text-2xl inline-block -right-1 relative -top-2" />
                                </p>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide className="yellow-slide">
                    <div className="swiper-slide">
                        <div className="review-wrap text-left">
                            <div className="review-item box-content p-8 mx-4 my-8 min-h-[200px] bg-white relative rounded-2xl shadow-[0px_2px_12px_0_rgba(0,0,0,0.08)]">
                                <img src="https://www.sideshow.com/storage/product-images/904749/captain-america-deluxe_marvel_square.jpg" className="review-img w-24 rounded-xl border-4 border-white float-left mr-3" alt="" />
                                <h3 className="text-2xl font-bold mt-4 mb-2">Steve Rogers</h3>
                                <h4 className="text-base text-gray-600">Avenger - Captain America</h4>
                                <p className="italic mt-8 mb-4">
                                    <BiSolidQuoteAltLeft className="text-pink-100 text-2xl inline-block -left-1 relative -top-2" />
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio eos, aspernatur nihil voluptatem perspiciatis deserunt sit nulla odio qui, iusto, suscipit ipsa architecto voluptate nemo.
                                    <BiSolidQuoteAltRight className="text-pink-100 text-2xl inline-block -right-1 relative -top-2" />
                                </p>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide className="yellow-slide">
                    <div className="swiper-slide">
                        <div className="review-wrap text-left">
                            <div className="review-item box-content p-8 mx-4 my-8 min-h-[200px] bg-white relative rounded-2xl shadow-[0px_2px_12px_0_rgba(0,0,0,0.08)]">
                                <img src="https://www.sideshow.com/storage/product-images/904749/captain-america-deluxe_marvel_square.jpg" className="review-img w-24 rounded-xl border-4 border-white float-left mr-3" alt="" />
                                <h3 className="text-2xl font-bold mt-4 mb-2">Steve Rogers</h3>
                                <h4 className="text-base text-gray-600">Avenger - Captain America</h4>
                                <p className="italic mt-8 mb-4">
                                    <BiSolidQuoteAltLeft className="text-pink-100 text-2xl inline-block -left-1 relative -top-2" />
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio eos, aspernatur nihil voluptatem perspiciatis deserunt sit nulla odio qui, iusto, suscipit ipsa architecto voluptate nemo.
                                    <BiSolidQuoteAltRight className="text-pink-100 text-2xl inline-block -right-1 relative -top-2" />
                                </p>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
            </swiper-container>
        </div>
    </section>

  );
};

export default ReviewSection;
