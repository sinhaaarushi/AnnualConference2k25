import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGlobe, FaUniversity } from "react-icons/fa";
import logo from "../assets/images/MNNIT logo.png"

function Footer() {
    const contactCards = [
        {
            name: "Dr. Naren Bag",
            department: "Department of Mathematics, MNNITA",
            email: "narenb@mnnit.ac.in",
            phone: "+91-9775250223",
            icon: FaUniversity
        },
        {
            name: "Dr. Abhishek Kundu",
            department: "Department of Applied Mechanics, MNNITA",
            email: "abhishekkunduamd@mnnit.ac.in",
            phone: "+91-8420247761",
            icon: FaUniversity
        }
    ];

    return (
        <footer id="footer" className="relative bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 text-gray-800 overflow-hidden w-full">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-200/20 rounded-full blur-2xl animate-pulse delay-500"></div>
            </div>

            <div className="relative z-10 p-10 pb-0 w-full pt-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8 w-full">
                    
                    {/* Institute Information */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-4"
                    >
                        <div className="flex items-center space-x-4">
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <img className="w-20 h-20 object-contain" src={logo} alt="MNNIT Logo"/>
                            </motion.div>
                            <div>
                                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                                    MNNIT Allahabad
                                </h3>
                                <p className="text-sm text-gray-600">Department of Mathematics</p>
                            </div>
                        </div>
                        
                        <div className="space-y-2">
                            <div className="flex items-center space-x-3 text-sm">
                                <FaMapMarkerAlt className="text-blue-500" />
                                <span className="text-gray-700">Prayagraj - 211004, UP, India</span>
                            </div>
                            <div className="flex items-center space-x-3 text-sm">
                                <FaUniversity className="text-blue-500" />
                                <span className="text-gray-700">Motilal Nehru National Institute of Technology</span>
                            </div>
                            <div className="flex items-center space-x-3 text-sm">
                                <FaGlobe className="text-blue-500" />
                                <span className="text-gray-700">Teliarganj, Prayagraj, Uttar Pradesh</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Points */}
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-2"
                    >
                        <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                            Contact Points
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {contactCards.map((contact, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ 
                                        scale: 1.05, 
                                        y: -5,
                                        boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                                    }}
                                    className="group relative bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:bg-white/90 transition-all duration-300 shadow-lg"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="relative z-10">
                                        <div className="flex items-center space-x-3 mb-3">
                                            <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                                                <contact.icon className="w-5 h-5 text-white" />
                                            </div>
                                            <h4 className="font-bold text-lg text-gray-800">{contact.name}</h4>
                                        </div>
                                        <p className="text-sm text-gray-600 mb-3">{contact.department}</p>
                                        <div className="space-y-2">
                                            <a 
                                                href={`mailto:${contact.email}`}
                                                className="flex items-center space-x-2 text-sm text-blue-600 hover:text-blue-700 transition-colors duration-200"
                                            >
                                                <FaEnvelope className="w-4 h-4" />
                                                <span>{contact.email}</span>
                                            </a>
                                            <div className="flex items-center space-x-2 text-sm text-gray-600">
                                                <FaPhone className="w-4 h-4 text-green-500" />
                                                <span>{contact.phone}</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Map Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mb-8 w-full"
                >
                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                        Find Us
                    </h3>
                    <div className="relative overflow-hidden rounded-2xl border border-gray-200 w-full shadow-lg">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 to-purple-100/50 z-10"></div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d18233.673598652527!2d81.86635449510112!3d25.49373607879461!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399aca78818ddc51%3A0x6690dd2de3a1415b!2sMotilal%20Nehru%20National%20Institute%20of%20Technology%2C%20Allahabad!5e0!3m2!1sen!2sin!4v1728329701277!5m2!1sen!2sin"
                            className="w-full h-80 relative z-20"
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </motion.div>

                {/* Bottom Bar */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-gray-300 pt-6 pb-4 w-full"
                >
                    <div className="flex items-center space-x-4">
                        <motion.a 
                            href="https://info.flagcounter.com/ghnE"
                            whileHover={{ scale: 1.05 }}
                            className="transition-transform duration-200"
                        >
                            <img 
                                className="h-12 opacity-80 hover:opacity-100 transition-opacity duration-200"
                                src="https://s11.flagcounter.com/count2/ghnE/bg_FFFFFF/txt_000000/border_CCCCCC/columns_2/maxflags_10/viewers_0/labels_0/pageviews_0/flags_0/percent_0/"
                                alt="Flag Counter" 
                            />
                        </motion.a>
                    </div>
                    
                    <motion.p 
                        className="text-sm text-gray-500"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        Copyright © {new Date().getFullYear()} - All rights reserved
                    </motion.p>
                </motion.div>
            </div>
        </footer>
    );
}

export default Footer;