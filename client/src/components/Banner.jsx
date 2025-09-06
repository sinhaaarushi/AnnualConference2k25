import React from "react";
import mnnitImage from "../assets/images/MNNIT3.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Banner() {
    return (
        <div className="relative w-full bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-200/10 rounded-full blur-2xl"></div>
            </div>
            

            <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
                <div className="flex flex-col items-center justify-center text-center w-full">
                    
                    {/* Content Section */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8 text-center w-full flex flex-col items-center"
                    >
                        {/* Conference Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-medium shadow-lg mx-auto"
                        >
                            <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                            International Conference
                        </motion.div>

                        {/* Main Title */}
                        <motion.h1 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight max-w-6xl text-center mx-auto"
                        >
                            An International Conference
                            <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-gray-700 mt-2">on</span>
                            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                                Applied Mathematics and Computational Fluid Dynamics
                            </span>
                            <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 mt-4">
                                [ICAMCFD 2026]
                            </span>
                        </motion.h1>

                        {/* Conference Details */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="space-y-4 max-w-4xl"
                        >
                            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 text-gray-600">
                                <div className="flex items-center space-x-2">
                                    <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span className="text-sm sm:text-base">January 30 – February 01, 2026</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                                    </svg>
                                    <span className="text-sm sm:text-base">[HYBRID MODE]</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Image Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            className="max-w-2xl mx-auto"
                        >
                            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                                <img 
                                    src={mnnitImage}
                                    alt="MNNIT Allahabad Campus"
                                    className="w-full h-80 object-cover hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-6">
                                    <p className="text-white font-bold text-lg text-center">MNNIT Allahabad Campus</p>
                                    <p className="text-white/80 text-sm text-center">Prayagraj, Uttar Pradesh</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Organizer Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="space-y-3 max-w-2xl"
                        >
                            <p className="text-gray-600 font-medium text-center">Organized by</p>
                            <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-4 shadow-lg">
                                <p className="text-base sm:text-lg font-semibold text-gray-800 text-center">Department of Mathematics, MNNITA</p>
                                <p className="text-xs sm:text-sm text-gray-600 text-center">Motilal Nehru National Institute of Technology Allahabad</p>
                            </div>
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.9 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    to="/registration"
                                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center inline-block"
                                >
                                    Register Now
                                </Link>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
