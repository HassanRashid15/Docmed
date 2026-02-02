import React from 'react';
import { motion } from 'framer-motion';
import { LiaHospitalAltSolid } from 'react-icons/lia';
import { LuStethoscope } from 'react-icons/lu';
import { IoMdNutrition } from 'react-icons/io';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      icon: LiaHospitalAltSolid,
      title: 'Hospitality',
      description: 'Clinical excellence must be the priority for any health care service provider.',
      buttonText: 'Apply For A Bed',
      iconColor: 'text-docmed-blue',
      bgColor: 'bg-docmed-light',
      borderColor: 'bg-docmed-blue',
      gradientFrom: 'from-docmed-blue',
      gradientTo: 'to-docmed-blue',
      hoverFrom: 'hover:from-docmed-blue',
      hoverTo: 'hover:to-docmed-hover',
      hoverTextColor: 'group-hover:text-docmed-blue',
      delay: 0.2
    },
    {
      id: 2,
      icon: LuStethoscope,
      title: 'Emergency Care',
      description: 'Clinical excellence must be the priority for any health care service provider.',
      buttonText: '📞 +9230-1234-4567',
      iconColor: 'text-docmed-blue',
      bgColor: 'bg-docmed-light',
      borderColor: 'bg-docmed-blue',
      gradientFrom: 'from-docmed-blue',
      gradientTo: 'to-docmed-blue',
      hoverFrom: 'hover:from-docmed-blue',
      hoverTo: 'hover:to-docmed-hover',
      hoverTextColor: 'group-hover:text-docmed-blue',
      delay: 0.4
    },
    {
      id: 3,
      icon: LuStethoscope,
      title: 'Chamber Service',
      description: 'Clinical excellence must be the priority for any health care service provider.',
      buttonText: 'Make An Appointment',
      iconColor: 'text-docmed-blue',
      bgColor: 'bg-docmed-light',
      borderColor: 'bg-docmed-blue',
      gradientFrom: 'from-docmed-blue',
      gradientTo: 'to-docmed-blue',
      hoverFrom: 'hover:from-docmed-blue',
      hoverTo: 'hover:to-docmed-hover',
      hoverTextColor: 'group-hover:text-docmed-blue',
      delay: 0.6
    },
    {
      id: 4,
      icon: IoMdNutrition,
      title: 'Nutritionist',
      description: 'Clinical excellence must be the priority for any health care service provider.',
      buttonText: 'Make An Appointment',
      iconColor: 'text-docmed-blue',
      bgColor: 'bg-docmed-light',
      borderColor: 'bg-docmed-blue',
      gradientFrom: 'from-docmed-blue',
      gradientTo: 'to-docmed-blue',
      hoverFrom: 'hover:from-docmed-blue',
      hoverTo: 'hover:to-docmed-hover',
      hoverTextColor: 'group-hover:text-docmed-blue',
      delay: 0.8
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50
    },
    visible: (delay) => ({
      opacity: 1, 
      y: 0,
      transition: {
        duration: 1.1,
        delay: delay,
        ease: [0.4, 0, 0.2, 1]
      }
    })
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Medical Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Providing comprehensive healthcare solutions with excellence and compassion
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                custom={service.delay}
                variants={cardVariants}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-3"
              >
                {/* Top Border Animation */}
                <div className={`absolute top-0 left-0 w-full h-1 ${service.borderColor} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                
                {/* Card Content */}
                <div className="p-8 flex flex-col items-center text-center h-full">
                  {/* Icon Wrapper */}
                  <div className={`relative mb-6 ${service.bgColor} rounded-full p-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    {/* Pulse Effect */}
                    <motion.div 
                      className={`absolute inset-0 ${service.bgColor} rounded-full`}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <IconComponent className={`relative z-10 w-12 h-12 ${service.iconColor}`} />
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className={`text-2xl font-bold text-gray-900 mb-3 ${service.hoverTextColor} transition-colors duration-300`}>
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  {/* Button */}
                  <motion.button
                    className={`w-full py-3 px-6 rounded-full font-semibold text-white transition-all duration-300 transform shadow-md hover:shadow-xl bg-gradient-to-r ${service.gradientFrom} ${service.gradientTo} ${service.hoverFrom} ${service.hoverTo}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {service.buttonText}
                  </motion.button>
                </div>

                {/* Decorative Element */}
                <div className={`absolute -bottom-10 -right-10 w-32 h-32 ${service.bgColor} rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700`}></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesSection;