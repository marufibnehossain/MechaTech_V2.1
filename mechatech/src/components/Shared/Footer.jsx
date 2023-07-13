import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { AiOutlineRight } from 'react-icons/ai';
import './footer.css';

const Footer = () => {
  return (
    <footer id="footer" class="footer">
    
        <div class="footer-top">
          <div class="container mx-auto">
            <div class="grid grid-cols-12 gap-4 lg:mx-0 mx-4">
              <div class="lg:col-span-5 col-span-12 footer-info lg:text-left text-center">
                <Link class="logo flex items-center lg:justify-start justify-center">
                  <img src="./logo.png" alt="" />
                  <span>Mechatech</span>
                </Link>
                <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
                <div class="social-links mt-3">
                  <Link class="twitter"><FaTwitter /></Link>
                  <Link class="facebook"><FaFacebook /></Link>
                  <Link class="instagram"><FaInstagram /></Link>
                  <Link class="linkedin"><FaLinkedin /></Link>
                </div>
              </div>
    
              <div class="lg:col-span-2 md:col-span-6 col-span-12 footer-links lg:text-left text-center">
                <h4>Useful Links</h4>
                <ul className='flex flex-col lg:items-start items-center'>
                  <li><AiOutlineRight /><Link>Home</Link></li>
                  <li><AiOutlineRight /><Link>About us</Link></li>
                  <li><AiOutlineRight /><Link>Services</Link></li>
                  <li><AiOutlineRight /><Link>Terms of service</Link></li>
                  <li><AiOutlineRight /><Link>Privacy policy</Link></li>
                </ul>
              </div>
    
              <div class="lg:col-span-2 md:col-span-6 col-span-12 footer-links lg:text-left text-center">
                <h4>Our Services</h4>
                <ul className='flex flex-col lg:items-start items-center'>
                  <li><AiOutlineRight /><Link>Web Design</Link></li>
                  <li><AiOutlineRight /><Link>Web Development</Link></li>
                  <li><AiOutlineRight /><Link>Product Management</Link></li>
                  <li><AiOutlineRight /><Link>Marketing</Link></li>
                  <li><AiOutlineRight /><Link>Graphic Design</Link></li>
                </ul>
              </div>
    
              <div class="lg:col-span-3 col-span-12 footer-contact text-center text-md-start">
                <h4>Contact Us</h4>
                <p>
                  Road:05, Chandgaon R/A<br/>Chittagong, 4202<br/>
                  Bangladesh. <br/><br/>
                  <strong>Phone:</strong> +880 1954-183456<br/>
                  <strong>Email:</strong> info@example.com<br/>
                </p>
    
              </div>
    
            </div>
          </div>
        </div>
    
        <div class="container">
          <div class="copyright">
            &copy; Copyright <strong><span>Maruf</span></strong>. All Rights Reserved
          </div>
        </div>
    </footer>
  )
}

export default Footer;
