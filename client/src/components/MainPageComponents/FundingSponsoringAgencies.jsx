import React from "react";

function FundingSponsoringAgencies() {
    return (
        <section id="funding sponsoring agencies" className="mb-8 flex-col rounded-md text-base-content w-full flex items-center pt-28">
            <div className="max-w-[1100px]">
                <h2 className="text-center text-primary text-4xl font-bold leading-normal mb-6 lg:text-start font-playfair relative">
                    <span className="relative">
                        Funding & Sponsoring Agencies
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                    </span>
                </h2>
                
                <div className="grid w-full grid-cols-1 items-stretch justify-start gap-8 lg:grid-cols-2">
                    
                    {/* Funding Agency Section */}
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-200 shadow-lg flex flex-col justify-center min-h-[300px]">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mr-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-blue-900">Funding Agency</h3>
                        </div>
                        
                        <div className="flex-1 flex items-center justify-center">
                            <p className="text-gray-500 text-lg">Content to be added later</p>
                        </div>
                    </div>

                    {/* Sponsoring Agency Section */}
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl border border-green-200 shadow-lg flex flex-col justify-center min-h-[300px]">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center mr-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-green-900">Sponsoring Agency</h3>
                        </div>
                        
                        <div className="flex-1 flex items-center justify-center">
                            <p className="text-gray-500 text-lg">Content to be added later</p>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
}

export default FundingSponsoringAgencies;
