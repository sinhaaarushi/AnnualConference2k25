import React from "react";
import { motion } from "framer-motion";

function CTASection() {
    return (
        <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl font-bold mb-8 text-gray-900">Ready to Join ICAMCFD 2026?</h2>
                    <p className="text-xl mb-10 text-gray-700 max-w-3xl mx-auto">
                        Don't miss this opportunity to connect with leading researchers, present your work, and contribute to the advancement of Applied Mathematics and Computational Fluid Dynamics.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <motion.a
                            href="/registration"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center text-lg"
                        >
                            Register Now
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default CTASection; 