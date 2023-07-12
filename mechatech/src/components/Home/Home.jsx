import React from 'react';
import Banner from '../LargeComponents/Banner/Banner';
import ClientSwipe from '../LargeComponents/Clients/ClientSwipe';
import AboutUs from '../LargeComponents/AboutUs/AboutUs';
import Values from '../LargeComponents/AboutUs/Values';
import Counter from '../LargeComponents/Counter/Counter';
import Service from '../LargeComponents/Services/Service';

const Home = () => {
  return (
    <div>
      <Banner />
      <ClientSwipe />
      <AboutUs />
      <Values />
      <Counter />
      <Service />
    </div>
  )
}

export default Home;
