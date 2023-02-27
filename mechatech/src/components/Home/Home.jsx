import React from 'react';
import Navbar from '../Shared/navbar';
import Drawer from '../Shared/Drawer';
import Banner from '../Banner/Banner';
import ClientSwipe from '../Clients/ClientSwipe';
import AboutUs from '../AboutUs/AboutUs';
import Values from '../AboutUs/Values';
import Product from '../Products/Product';

const Home = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div>
      <Navbar setIsOpen={setIsOpen} />
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
      <Banner />
      <ClientSwipe />
      
      <AboutUs />
      <Values />
      <Product />
    </div>
  )
}

export default Home;
