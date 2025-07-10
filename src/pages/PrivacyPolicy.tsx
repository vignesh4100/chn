import React from 'react';
import Footer from '../components/Footer';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <section className="pt-32 pb-20 px-4 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600">
            Last Updated: July 5, 2025
          </p>
        </div>

        <div className="space-y-8 text-lg leading-relaxed">
          <p>
            At CHN Technologies, your privacy is important to us. This Privacy Policy explains how we collect,
            use, and protect your personal information when you use our website or services.
          </p>

          <div>
            <h2 className="text-2xl font-semibold mb-2">1. Information We Collect</h2>
            <p className="mb-2">We may collect the following types of information:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Personal details like name, email, phone number, and company name</li>
              <li>Non-personal data such as device info, IP address, and pages visited</li>
              <li>Communications you send to us via forms, email, or chat</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">2. How We Use Your Information</h2>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>To provide and improve our services</li>
              <li>To respond to your queries</li>
              <li>To send updates and newsletters (you can opt out anytime)</li>
              <li>To analyze website performance and user behavior</li>
              <li>To comply with legal requirements</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">3. How We Share Information</h2>
            <p>
              We never sell your personal data. We only share it with trusted vendors, legal authorities if required,
              or third-party tools like CRM or WhatsApp integration strictly for service delivery.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">4. Data Security</h2>
            <p>
              We implement measures like SSL encryption and restricted access to keep your data safe. However,
              please note that no system is 100% secure.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">5. Cookies</h2>
            <p>
              Our website uses cookies for a better experience. You may disable cookies via your browser,
              but some features may not work correctly.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">6. Your Rights</h2>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Access or correct your data</li>
              <li>Request deletion</li>
              <li>Opt out of communications</li>
            </ul>
            <p className="mt-2">Contact us at <a href="mailto:info@chnindia.com" className="text-blue-600 underline">info@chnindia.com</a> to exercise your rights.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">7. External Links</h2>
            <p>
              We may link to third-party sites. We are not responsible for their privacy practices. Please review their policies.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">8. Children’s Privacy</h2>
            <p>
              Our services are not intended for children under 16. We do not knowingly collect their information.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">9. Policy Updates</h2>
            <p>
              We may update this policy from time to time. Check this page for changes. Continued use of our services means you accept the updates.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">10. Contact Us</h2>
            <p>CHN Technologies</p>
            <p>Email: info@chnindia.com</p>
            <p>Phone: +91 7010203031</p>
            <p>Website: www.chnindia.com</p>
            <p>Address: No. 28, Fourth Main Road, CIT Nagar, Chennai - 600035</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
