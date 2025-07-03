import React from 'react';
import Services from '../components/Services';
import Footer from '../components/Footer';

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      <Services />
      <Footer />
    </div>
  );
};

export default ServicesPage;