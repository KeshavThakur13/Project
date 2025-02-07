import React from 'react';
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className="bg-blue-100 py-8 border-t-2 border-indigo-500">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row px-10 justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h1 className=' text-[18px] font-bold'>Job<span className='text-[#3771c3]'>Sphere</span></h1>
            <p className="text-sm">© 2025 All rights reserved. </p>

          </div>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://facebook.com" className="hover:text-gray-400" aria-label="Facebook">
              <FaSquareFacebook className='text-3xl text-blue-700' />

            </a>
            <a href="https://twitter.com" className="hover:text-gray-400" aria-label="Twitter">
              <FaSquareXTwitter className='text-3xl text-blue-700' />

            </a>
            <a href="https://linkedin.com" className="hover:text-gray-400" aria-label="LinkedIn">
              <FaLinkedin className='text-3xl text-blue-700' />

            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;