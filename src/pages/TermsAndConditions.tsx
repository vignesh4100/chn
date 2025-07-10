import React from 'react';
import Footer from '../components/Footer';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <section className="pt-32 pb-20 px-4 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms and Conditions</h1>
          <p className="text-lg text-gray-600">Last Updated: July 5, 2025</p>
        </div>

        <div className="space-y-8 text-lg leading-relaxed">
          <p>
            Welcome to CHN Technologies. By using our website (www.chnindia.com) and services, you agree to comply with
            the following terms. If you do not agree, please discontinue use of our website and services.
          </p>

          <div>
            <h2 className="text-2xl font-semibold mb-2">1. Definitions</h2>
            <p>
              "Company", "We", "Us" refers to CHN Technologies. "You" refers to any user accessing our website or
              services. "Services" include all CHN offerings such as IT, software, workforce consulting, and more.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">2. Use of Website</h2>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Use only for lawful purposes</li>
              <li>Do not disrupt or interfere with site operation</li>
              <li>No unauthorized access or misuse of our systems</li>
            </ul>
            <p className="mt-2">We reserve the right to restrict or revoke access at any time.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">3. Intellectual Property</h2>
            <p>
              All content (text, graphics, code, media) is the property of CHN Technologies and protected by law. You
              may not reproduce or republish content without permission.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">4. Service Engagement</h2>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Deliverables and fees will be mutually agreed upon</li>
              <li>Clients must provide accurate information and feedback</li>
              <li>We may terminate service due to misuse, breach, or non-payment</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">5. Payments</h2>
            <p>All payments follow agreed contracts or invoices. Delays may incur interest or penalties.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">6. No Refund Policy</h2>
            <p>
              Payments are non-refundable unless otherwise stated in a signed agreement. Access to services or products
              indicates acceptance of this no-refund policy.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">7. Disclaimers</h2>
            <p>
              Website content is provided "as is" without warranties. We do not guarantee completeness, accuracy, or
              specific outcomes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">8. Limitation of Liability</h2>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>We are not liable for inability to use the site</li>
              <li>No responsibility for data loss or unauthorized access</li>
              <li>No liability for delays caused by third-party providers</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">9. Third-Party Links</h2>
            <p>
              Our website may link to external sites. We are not responsible for their content or privacy practices.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">10. Indemnification</h2>
            <p>
              You agree to indemnify CHN Technologies from any claims, damages, or expenses arising from your use of our
              services or violation of these terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">11. Termination</h2>
            <p>
              We may suspend or terminate access without notice if you violate these terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">12. Governing Law</h2>
            <p>
              These terms are governed by the laws of India. Any disputes will be resolved in courts of Chennai,
              India.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">13. Changes to Terms</h2>
            <p>
              We may update these terms at any time. Continued use of our website means you accept the revised terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">14. Contact Us</h2>
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

export default TermsAndConditions;
