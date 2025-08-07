import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaCalendarAlt, FaGlobe, FaAward } from "react-icons/fa";

function StatsSection() {
    const stats = [
        {
            icon: FaCalendarAlt,
            number: "3",
            label: "Conference Days",
            color: "from-green-500 to-green-600"
        },
        {
            icon: FaGlobe,
            number: "3+",
            label: "Countries Represented",
            color: "from-purple-500 to-purple-600"
        },
        {
            icon: FaAward,
            number: "14",
            label: "Expert Speakers",
            color: "from-orange-500 to-orange-600"
        }
    ];

    return (
        <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Conference Highlights</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Join us for an exceptional gathering of minds in Applied Mathematics and Computational Fluid Dynamics
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="text-center group"
                        >
                            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${stat.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                <stat.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                            <p className="text-gray-600 font-medium">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default StatsSection; 