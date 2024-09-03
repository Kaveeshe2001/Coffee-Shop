import React from 'react'
import { motion } from 'framer-motion';
import coffee1 from '../../assets/coffee/coffee1.png';
import coffee3 from '../../assets/coffee/coffee3.png';

const servicesData = [
    {
       id: 1,
       image: coffee1,
       title: "Black Coffee",
       subtitle: "This is the world best coffee flavour..",
    },
    {
        id: 2,
        image: coffee3,
        title: "Hot Coffee",
        subtitle: "This is the world best coffee flavour..",
    },
    {
        id: 3,
        image: coffee1,
        title: "Cold Coffee",
        subtitle: "This is the world best coffee flavour..",
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 150,
            damping: 10,
            ease: "easeInOut",
        },
    },
};

const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.6,
            staggerChildren: 0.4,
        },
    },
};

const Services = () => {
  return (
    <div className='container mx-auto px-4 my-16 space-y-8'>
      {/* header section */}
      <div className='text-center max-w-lg mx-auto space-y-4'>
        <motion.h1 
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y: 0}}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.2,
        }}
        className='text-2xl md:text-3xl font-bold text-lightGray'>
            fresh and <span className='text-primary'>Tasty coffee</span>
        </motion.h1>
        <motion.p 
        initial={{opacity: 0, scale: 0.5}}
        animate={{opacity: 1, scale: 1}}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.6,
        }}
        className='text-sm md:text-base opacity-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sunt perspiciatis explicabo!</motion.p>
      </div>
      {/* card section */}
      <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView={"visible"}
      viewport={{once: true, amount: 0.8}}
      className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {servicesData.map((service) => (
            <motion.div 
            key={service.id}
            variants={cardVariants} 
            className='text-center p-4 space-y-6 bg-white rounded-lg shadow-md'>
                <img src={service.image} alt={service.title} className='img-shadow2 max-w-[200px] w-full h-auto mx-auto hover:scale-110 transition-transform duration-300 cursor-pointer' />
                <div className='space-y-2'>
                    <h2 className='text-xl md:text-2xl font-bold text-primary'>{service.title}</h2>
                    <p className='text-sm md:text-base text-darkGray'>{service.subtitle}</p>
                </div>
            </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Services