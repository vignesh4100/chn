import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Facebook, 
  Instagram, 
  Youtube,
  ExternalLink 
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">CHN Technologies</h3>
              <p className="text-cyan-400 text-sm font-medium mb-4">
                Empowering Businesses Through Technology & Expertise
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                CHN Technologies is a leading provider of technology and consulting solutions 
                delivering IT, HR, and business services with innovation and trust.
              </p>
            </div>
            
            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/company/chntechnologies/" className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://www.facebook.com/people/CHN-Technologies/100068692698660/" className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/chntech_india/" className="w-10 h-10 bg-pink-600 hover:bg-pink-700 rounded-lg flex items-center justify-center transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.youtube.com/channel/UCX3GW4PtNMIOogEMdyhB_mw" className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded-lg flex items-center justify-center transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <div className="space-y-3">
              <a href="/technology" className="block text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                <ExternalLink className="w-4 h-4" />
                Technology
              </a>
              <a href="/consulting" className="block text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                <ExternalLink className="w-4 h-4" />
                Consulting
              </a>
              <a href="/contact" className="block text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                <ExternalLink className="w-4 h-4" />
                Contacts
              </a>
              <a href="/careers" className="block text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                <ExternalLink className="w-4 h-4" />
                Careers
              </a>
            </div>
          </div>
          
          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-400">
                  <p>Chennai (Head Office)</p>
                  <p>Coimbatore</p>
                  <p>Bangalore (Branch Office)</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-400">
                  <p>+91-7010203031</p>
                  <p>+91-9384817323</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-400">
                  <p>sales@chnindia.com</p>
                  <p>info@chnindia.com</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Legal & Compliance */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Legal & Compliance</h4>
            <div className="space-y-3">
              <a href="/privacy-policy" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="/terms-and-conditions" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Terms & Conditions
              </a>
              {/* <a href="/careers" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Careers
              </a> */}
              {/* <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Sitemap
              </a> */}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} CHN Technologies. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Designed & Developed with ❤️ by CHN Technologies
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;