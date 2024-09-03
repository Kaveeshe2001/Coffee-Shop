import React from 'react';
import { FaFacebook, FaGoogle, FaInstagram, FaPhone, FaTelegram } from 'react-icons/fa';
import { FaMapLocation } from 'react-icons/fa6';
import CreaditCards from '../../assets/website/credit-cards.webp';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-primary to-primaryDark pt-12 pb-8 text-white'>
      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
            {/* company details section */}
            <div className='space-y-6'>
                <h1 className='text-3xl font-bold uppercase'>Coders Cafe</h1>
                <p className='text-sm max-w-[300px]'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus esse quis tenetur.
                </p>
                <div>
                    <p className='flex items-center gap-2'>
                    <FaPhone />
                    +94 11 456 4567
                    </p>
                    <p className='flex items-center gap-2 mt-2'>
                        {""}
                        <FaMapLocation /> Pitipana, Homagama
                    </p>
                </div>
            </div>
            {/* footer links section */}
            {/* social links section */}
        </div>
      </div>
    </div>
  )
}

export default Footer
