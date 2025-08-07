import React from "react";
import { motion } from "framer-motion";
import { HiOutlineCalendar, HiOutlineClock, HiOutlineCheckCircle } from "react-icons/hi";

function TimeLine() {
    const timelineData = [
        {
            date: "September 15, 2025",
            title: "Abstract Submission Start",
            status: "upcoming",
            icon: HiOutlineCalendar
        },
        {
            date: "November 30, 2025",
            title: "Deadline of Abstract Submission",
            status: "deadline",
            icon: HiOutlineClock
        },
        {
            date: "December 15, 2025",
            title: "Acceptance notification of Abstract",
            status: "notification",
            icon: HiOutlineCheckCircle
        },
        {
            date: "October 01, 2025",
            title: "Registration Start",
            status: "upcoming",
            icon: HiOutlineCalendar
        },
        {
            date: "December 31, 2025",
            title: "Last date of Early Bird Registration",
            status: "deadline",
            icon: HiOutlineClock
        },
        {
            date: "January 15, 2026",
            title: "Last Date of submission of Full-length Manuscript",
            status: "deadline",
            icon: HiOutlineCalendar
        },
        {
            date: "January 20, 2026",
            title: "Acceptance of Full-length Manuscript",
            status: "notification",
            icon: HiOutlineCheckCircle
        },
        {
            date: "January 25, 2026",
            title: "Deadline for Camera Ready Paper",
            status: "deadline",
            icon: HiOutlineClock
        },
        {
            date: "January 30, 2026",
            title: "Conference Start",
            status: "conference",
            icon: HiOutlineCalendar
        }
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case "upcoming": return "border-blue-500 bg-blue-50";
            case "deadline": return "border-red-500 bg-red-50";
            case "notification": return "border-green-500 bg-green-50";
            case "conference": return "border-purple-500 bg-purple-50";
            case "tbd": return "border-gray-400 bg-gray-50";
            default: return "border-gray-300 bg-gray-50";
        }
    };

    const getStatusText = (status) => {
        switch (status) {
            case "upcoming": return "Upcoming";
            case "deadline": return "Deadline";
            case "notification": return "Notification";
            case "conference": return "Conference";
            case "tbd": return "TBD";
            default: return "";
        }
    };

    return (
        <section id="timeline" className="mb-8 flex-col rounded-md shadow-sm lg:p-8 bg-gradient-to-br from-base-100 to-base-200/50 text-base-content w-full flex items-center">
            <div className="max-w-[1200px] w-full">
                <motion.h2 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-8 text-4xl font-bold text-primary font-playfair text-center relative"
                >
                    <span className="relative">
                        Important Dates (Tentative)
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                    </span>
                </motion.h2>
                
                <div className="relative">
                    {/* Horizontal Timeline Container */}
                    <div className="relative overflow-x-auto overflow-y-hidden pb-4">
                        {/* Timeline Line */}
                        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full transform -translate-y-1/2"></div>
                        
                        {/* Timeline Items Container */}
                        <div className="flex space-x-8 min-w-max px-8 mt-16">
                            {timelineData.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="relative flex-shrink-0"
                                >
                                    {/* Timeline Item */}
                                    <div className="relative">
                                        {/* Content Card */}
                                        <div className={`w-80 h-48 p-6 rounded-2xl shadow-lg border-2 ${getStatusColor(item.status)} hover:scale-105 transition-all duration-300 bg-white mb-8 hover:shadow-xl hover:z-10 flex flex-col justify-between`}>
                                            <div className="flex items-center justify-between mb-3">
                                                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                                    item.status === 'upcoming' ? 'bg-blue-100 text-blue-800' :
                                                    item.status === 'deadline' ? 'bg-red-100 text-red-800' :
                                                    item.status === 'notification' ? 'bg-green-100 text-green-800' :
                                                    item.status === 'conference' ? 'bg-purple-100 text-purple-800' :
                                                    'bg-gray-100 text-gray-800'
                                                }`}>
                                                    {getStatusText(item.status)}
                                                </span>
                                                <item.icon className="w-5 h-5 text-primary" />
                                            </div>
                                            <div className="flex-1 flex flex-col justify-center">
                                                <h3 className="text-lg font-bold mb-2 text-gray-800 leading-tight line-clamp-2">{item.title}</h3>
                                                <p className="text-sm font-mono text-gray-600">{item.date}</p>
                                            </div>
                                        </div>
                                        
                                        {/* Timeline Dot - Positioned below the card */}
                                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-10">
                                            <div className="w-6 h-6 bg-primary rounded-full shadow-lg border-4 border-white"></div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Scroll Indicator */}
                    <div className="text-center mt-4 text-sm text-gray-500">
                        <span className="inline-flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                            </svg>
                            Scroll horizontally to see all dates
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TimeLine;