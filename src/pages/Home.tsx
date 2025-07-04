import React, { useState } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Industries from '../components/Industries';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Modal from '../components/Modal';

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Hero onOpenModal={() => setIsModalOpen(true)} />
      <About />
      <Services />
      <Industries />
      <Testimonials />
      <Contact />
      <Footer />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Home;