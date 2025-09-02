import React from "react";

function AbstractSubmission() {
    return (
        <section id="abstract submission" className="mb-8 flex-col rounded-md text-base-content w-full flex items-center pt-28">
            <div className="max-w-[1100px]">
                <h2 className="text-center text-primary text-4xl font-bold leading-normal mb-6 lg:text-start font-playfair relative">
                    <span className="relative">
                        Abstract Submission
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                    </span>
                </h2>
                
                <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-xl border border-orange-200 shadow-lg">
                    <div className="grid w-full grid-cols-1 items-center justify-start gap-8 lg:grid-cols-[1.5fr_1fr]">
                        
                        {/* Content Section */}
                        <div className="space-y-6">
                            <div className="flex items-center mb-6">
                                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-4">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold text-orange-900">Submit Your Abstract</h3>
                                    <p className="text-orange-700">ICAMCFD 2026 Conference</p>
                                </div>
                            </div>
                            
                            <div className="space-y-4">
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    We invite researchers, academicians, and industry professionals to submit their abstracts for the International Conference on Applied Mathematics and Computational Fluid Dynamics (ICAMCFD 2026).
                                </p>
                                
                                <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-orange-100">
                                    <h4 className="font-semibold text-orange-800 mb-3 text-lg">Submission Guidelines:</h4>
                                    <div className="flex items-center justify-center h-20">
                                        <p className="text-gray-500 text-lg">Guidelines to be added later</p>
                                    </div>
                                </div>
                                
                                <div className="bg-gradient-to-r from-orange-100 to-red-100 p-4 rounded-lg border border-orange-200">
                                    <h4 className="font-semibold text-orange-800 mb-2">Important Dates:</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                                        <div className="flex justify-between">
                                            <span className="text-gray-700">Abstract Submission Start:</span>
                                            <span className="font-semibold text-orange-800">September 15, 2025</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-700">Abstract Submission Deadline:</span>
                                            <span className="font-semibold text-orange-800">November 30, 2025</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-700">Acceptance Notification:</span>
                                            <span className="font-semibold text-orange-800">December 15, 2025</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Submission Section */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-orange-200 shadow-lg">
                            <div className="text-center space-y-6">
                                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto">
                                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-2">Ready to Submit?</h4>
                                    <p className="text-gray-600 mb-4">
                                        Use our Microsoft CMT submission portal for a seamless experience
                                    </p>
                                </div>
                                
                                <div className="space-y-3">
                                    <a 
                                        href="#" 
                                        className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                    >
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                        Submit Abstract via CMT
                                    </a>
                                    
                                    <a 
                                        href="#" 
                                        className="w-full inline-flex items-center justify-center px-6 py-3 border-2 border-orange-500 text-orange-600 font-semibold rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-200"
                                    >
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>
                                        Download Template
                                    </a>
                                </div>
                                
                                <div className="text-xs text-gray-500">
                                    <p>Need help? Contact our technical support team</p>
                                    <a href="/#footer" className="text-orange-600 hover:text-orange-700 underline">Get Support</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AbstractSubmission;
