import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">MINY Exclusives</h3>
            <p className="text-gray-400">© 2024 All rights reserved</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="hover:text-purple-500 transition-colors">
              <Facebook size={24} />
            </a>
            <a href="#" className="hover:text-purple-500 transition-colors">
              <Twitter size={24} />
            </a>
            <a href="#" className="hover:text-purple-500 transition-colors">
              <Instagram size={24} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-sm text-gray-400">
          <nav className="space-x-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Contact Us</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;