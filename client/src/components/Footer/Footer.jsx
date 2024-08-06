import React from 'react';
import { Link } from "react-router-dom";
import facebookIcon from '../../assets/facebook.png';
import instagramIcon from '../../assets/Instagram-Logo.jpg';
import twitterIcon from '../../assets/twitter.png';

const Footer = () => {
  return (
    <footer className="bg-blue-500 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between px-4">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-2xl font-semibold mb-4">Follow To Talk</h1>
          <hr className="border-t-2 border-gray-300 mb-4" />
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={facebookIcon} alt="Facebook" width={40} height={40} className="hover:opacity-75" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={instagramIcon} alt="Instagram" width={40} height={40} className="hover:opacity-75" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={twitterIcon} alt="Twitter" width={40} height={40} className="hover:opacity-75" />
            </a>
          </div>
        </div>
        <div className="md:w-1/2">
          <h1 className="text-2xl font-semibold mb-4">Services</h1>
          <hr className="border-t-2 border-gray-300 mb-4" />
          <nav>
            <ul className="space-y-2">
                    <Link to="/about" className="text-black hover:text-amber-600">
                    About
                </Link>
            </ul>
          </nav>
          <div className="mt-4 text-gray-600">
            <p>&copy; {new Date().getFullYear()} St/john's collage. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
