import React from 'react';
import Banner from '../LargeComponents/Banner/Banner';
import ClientSwipe from '../LargeComponents/Clients/ClientSwipe';
import AboutUs from '../LargeComponents/AboutUs/AboutUs';
import Values from '../LargeComponents/AboutUs/Values';
import Counter from '../LargeComponents/Counter/Counter';
import Service from '../LargeComponents/Services/Service';
import ClientsReview from '../LargeComponents/Clients-Review/ClientsReview';
import FAQ from '../LargeComponents/FAQ/FAQ';
import Team from '../LargeComponents/Team/Team';
import Contact from '../LargeComponents/Contact/Contact';

const Home = () => {
  return (
    <div>
      <Banner />
      <ClientSwipe />
      <AboutUs />
      <Values />
      <Counter />
      <Service />
      <ClientsReview />
      <FAQ />
      <Team />
      <Contact />
    </div>
  )
}

export default Home;
