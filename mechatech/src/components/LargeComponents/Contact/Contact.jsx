import React from 'react';
import HeadName from '../../Shared/HeadName';
import headinfo from '../../Data/headerInfo';
import './contact.css';
import { SlLocationPin, SlCallOut } from 'react-icons/sl';
import { HiOutlineMail } from 'react-icons/hi';
import { BiTimeFive } from 'react-icons/bi';

const Contact = () => {
  return (
    <section id="contact" className="contact md:my-28 my-16">

        <div className="container mx-auto" data-aos="fade-up">
  
            <HeadName head={headinfo[6].name} prg={headinfo[6].para} />
  
          <div className="grid md:grid-cols-2 gap-4 md:mx-0 mx-4">
  
            <div className="">
  
              <div className="grid lg:grid-cols-2 gap-4">
                <div className="">
                  <div className="info-box flex flex-col items-center">
                    <SlLocationPin className='text-4xl text-[#4154f1]' />
                    <h3>Address</h3>
                    <p>Road:05, Chandgaon R/A<br/>Chittagong, 4202</p>
                  </div>
                </div>
                <div className="">
                <div className="info-box flex flex-col items-center">
                    <SlCallOut className='text-4xl text-[#4154f1]' />
                    <h3>Call Us</h3>
                    <p>+880 1954-183456<br/>+880 1546-258147</p>
                  </div>
                </div>
                <div className="">
                <div className="info-box flex flex-col items-center">
                    <HiOutlineMail className='text-4xl text-[#4154f1]' />
                    <h3>Email Us</h3>
                    <p>info@example.com<br/>contact@example.com</p>
                  </div>
                </div>
                <div className="">
                <div className="info-box flex flex-col items-center">
                    <BiTimeFive className='text-4xl text-[#4154f1]' />
                    <h3>Open Hours</h3>
                    <p>saturday - Thursday<br/>9:00AM - 05:00PM</p>
                  </div>
                </div>
              </div>
  
            </div>
  
            <div className="">
              <form action="forms/contact.php" method="post" className="php-email-form">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
  
                  <div className="">
                    <input type="text" name="name" className="form-control w-full" placeholder="Your Name" required />
                  </div>
  
                  <div className="">
                    <input type="email" className="form-control w-full" name="email" placeholder="Your Email" required />
                  </div>
  
                  <div className="col-span-2">
                    <input type="text" className="form-control w-full" name="subject" placeholder="Subject" required />
                  </div>
  
                  <div className="col-span-2">
                    <textarea className="form-control w-full" name="message" rows="6" placeholder="Message" required></textarea>
                  </div>
  
                  <div className="md:col-span-2 text-center">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">Your message has been sent. Thank you!</div>
  
                    <button type="submit">Send Message</button>
                  </div>
  
                </div>
              </form>
  
            </div>
  
          </div>
  
        </div>
  
      </section>
  )
}

export default Contact;
