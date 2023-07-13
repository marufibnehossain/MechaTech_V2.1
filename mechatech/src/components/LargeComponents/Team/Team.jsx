import React from 'react';
import HeadName from '../../Shared/HeadName';
import headinfo from '../../Data/headerInfo';
import { Link } from 'react-router-dom';
import './Team.css';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Team = () => {
  return (
    <section id="team" className="team py-16 bg-[#f0f5ff]">
        <div className="container mx-auto" data-aos="fade-up">
            <HeadName head={headinfo[5].name} prg={headinfo[5].para} />

            <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-7 lg:mx-0 mx-4">

                <div className="flex items-stretch" data-aos="fade-up" data-aos-delay="100">
                    <div className="member group bg-white overflow-hidden text-center rounded-md shadow[0px_-px_30px_0px_rgba(1,41,112,0.08)] hover:shadow[0px_-px_30px_0px_rgba(1,41,112,0.01)] transition hover:scale-100 duration-300">
                        <div className="member-img relative overflow-hidden">
                        <img src="https://cdn.vox-cdn.com/thumbor/c3UJimJomy8etq4qcD8eUmvaSyk=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13644126/aquaman_hero_image_0.jpg" className="img-fluid" alt="" />
                        <div className="social group-hover:right-2 group-hover:opacity-100 absolute -right-full top-8 opacity-0 rounded-[4px] bg-[rgba(255,255,255,0.75)] z-20">
                            <Link className='transition-color duration-300 text-[rgba(1,41,112,0.5)] my-4 mx-3 block leading-none text-center hover:text-[rgba(1,41,112,0.8)]' to=""><FaTwitter className="text-lg" /></Link>
                            <Link className='transition-color duration-300 text-[rgba(1,41,112,0.5)] my-4 mx-3 block leading-none text-center hover:text-[rgba(1,41,112,0.8)]' to=""><FaFacebook className="text-lg" /></Link>
                            <Link className='transition-color duration-300 text-[rgba(1,41,112,0.5)] my-4 mx-3 block leading-none text-center hover:text-[rgba(1,41,112,0.8)]' to=""><FaInstagram className="text-lg" /></Link>
                            <Link className='transition-color duration-300 text-[rgba(1,41,112,0.5)] my-4 mx-3 block leading-none text-center hover:text-[rgba(1,41,112,0.8)]' to=""><FaLinkedin className="text-lg" /></Link>
                        </div>
                        </div>
                        <div className="member-info pt-[10px] px-[15px] pb-5">
                        <h4 className='font-bold mb-[5px] text-xl text-[#012970]'>King Arther</h4>
                        <span className='block text-sm font-normal text-[#aaaaaa]'>Justice League - Aquaman</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-stretch" data-aos="fade-up" data-aos-delay="100">
                    <div className="member group bg-white overflow-hidden text-center rounded-md shadow[0px_-px_30px_0px_rgba(1,41,112,0.08)] hover:shadow[0px_-px_30px_0px_rgba(1,41,112,0.01)] transition hover:scale-100 duration-300">
                        <div className="member-img relative overflow-hidden">
                        <img src="https://cdn.vox-cdn.com/thumbor/c3UJimJomy8etq4qcD8eUmvaSyk=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13644126/aquaman_hero_image_0.jpg" className="img-fluid" alt="" />
                        <div className="social group-hover:right-2 group-hover:opacity-100 absolute -right-full top-8 opacity-0 rounded-[4px] bg-[rgba(255,255,255,0.75)] z-20">
                            <Link className='transition-color duration-300 text-[rgba(1,41,112,0.5)] my-4 mx-3 block leading-none text-center hover:text-[rgba(1,41,112,0.8)]' to=""><FaTwitter className="text-lg" /></Link>
                            <Link className='transition-color duration-300 text-[rgba(1,41,112,0.5)] my-4 mx-3 block leading-none text-center hover:text-[rgba(1,41,112,0.8)]' to=""><FaFacebook className="text-lg" /></Link>
                            <Link className='transition-color duration-300 text-[rgba(1,41,112,0.5)] my-4 mx-3 block leading-none text-center hover:text-[rgba(1,41,112,0.8)]' to=""><FaInstagram className="text-lg" /></Link>
                            <Link className='transition-color duration-300 text-[rgba(1,41,112,0.5)] my-4 mx-3 block leading-none text-center hover:text-[rgba(1,41,112,0.8)]' to=""><FaLinkedin className="text-lg" /></Link>
                        </div>
                        </div>
                        <div className="member-info pt-[10px] px-[15px] pb-5">
                        <h4 className='font-bold mb-[5px] text-xl text-[#012970]'>King Arther</h4>
                        <span className='block text-sm font-normal text-[#aaaaaa]'>Justice League - Aquaman</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-stretch" data-aos="fade-up" data-aos-delay="100">
                    <div className="member group bg-white overflow-hidden text-center rounded-md shadow[0px_-px_30px_0px_rgba(1,41,112,0.08)] hover:shadow[0px_-px_30px_0px_rgba(1,41,112,0.01)] transition hover:scale-100 duration-300">
                        <div className="member-img relative overflow-hidden">
                        <img src="https://cdn.vox-cdn.com/thumbor/c3UJimJomy8etq4qcD8eUmvaSyk=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13644126/aquaman_hero_image_0.jpg" className="img-fluid" alt="" />
                        <div className="social group-hover:right-2 group-hover:opacity-100 absolute -right-full top-8 opacity-0 rounded-[4px] bg-[rgba(255,255,255,0.75)] z-20">
                            <Link className='transition-color duration-300 text-[rgba(1,41,112,0.5)] my-4 mx-3 block leading-none text-center hover:text-[rgba(1,41,112,0.8)]' to=""><FaTwitter className="text-lg" /></Link>
                            <Link className='transition-color duration-300 text-[rgba(1,41,112,0.5)] my-4 mx-3 block leading-none text-center hover:text-[rgba(1,41,112,0.8)]' to=""><FaFacebook className="text-lg" /></Link>
                            <Link className='transition-color duration-300 text-[rgba(1,41,112,0.5)] my-4 mx-3 block leading-none text-center hover:text-[rgba(1,41,112,0.8)]' to=""><FaInstagram className="text-lg" /></Link>
                            <Link className='transition-color duration-300 text-[rgba(1,41,112,0.5)] my-4 mx-3 block leading-none text-center hover:text-[rgba(1,41,112,0.8)]' to=""><FaLinkedin className="text-lg" /></Link>
                        </div>
                        </div>
                        <div className="member-info pt-[10px] px-[15px] pb-5">
                        <h4 className='font-bold mb-[5px] text-xl text-[#012970]'>King Arther</h4>
                        <span className='block text-sm font-normal text-[#aaaaaa]'>Justice League - Aquaman</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-stretch" data-aos="fade-up" data-aos-delay="100">
                    <div className="member group bg-white overflow-hidden text-center rounded-md shadow[0px_-px_30px_0px_rgba(1,41,112,0.08)] hover:shadow[0px_-px_30px_0px_rgba(1,41,112,0.01)] transition hover:scale-100 duration-300">
                        <div className="member-img relative overflow-hidden">
                        <img src="https://cdn.vox-cdn.com/thumbor/c3UJimJomy8etq4qcD8eUmvaSyk=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13644126/aquaman_hero_image_0.jpg" className="img-fluid" alt="" />
                        <div className="social group-hover:right-2 group-hover:opacity-100 absolute -right-full top-8 opacity-0 rounded-[4px] bg-[rgba(255,255,255,0.75)] z-20">
                            <Link className='transition-color duration-300 text-[rgba(1,41,112,0.5)] my-4 mx-3 block leading-none text-center hover:text-[rgba(1,41,112,0.8)]' to=""><FaTwitter className="text-lg" /></Link>
                            <Link className='transition-color duration-300 text-[rgba(1,41,112,0.5)] my-4 mx-3 block leading-none text-center hover:text-[rgba(1,41,112,0.8)]' to=""><FaFacebook className="text-lg" /></Link>
                            <Link className='transition-color duration-300 text-[rgba(1,41,112,0.5)] my-4 mx-3 block leading-none text-center hover:text-[rgba(1,41,112,0.8)]' to=""><FaInstagram className="text-lg" /></Link>
                            <Link className='transition-color duration-300 text-[rgba(1,41,112,0.5)] my-4 mx-3 block leading-none text-center hover:text-[rgba(1,41,112,0.8)]' to=""><FaLinkedin className="text-lg" /></Link>
                        </div>
                        </div>
                        <div className="member-info pt-[10px] px-[15px] pb-5">
                        <h4 className='font-bold mb-[5px] text-xl text-[#012970]'>King Arther</h4>
                        <span className='block text-sm font-normal text-[#aaaaaa]'>Justice League - Aquaman</span>
                        </div>
                    </div>
                </div>

                

            </div>

        </div>
    </section>
  )
}

export default Team;
