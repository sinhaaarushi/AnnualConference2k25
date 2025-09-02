import React from "react";

function Publication() {
    return (<section
        id="publication"
        className="mb-8 flex-col rounded-md shadow-sm lg:p-8 bg-base-200/40 text-base-content w-full flex items-center pt-36">

        <div className="max-w-[1100px]">
            <h1 className="mb-6 text-4xl font-bold text-primary font-playfair relative">
                <span className="relative">
                    Publication
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                </span>
            </h1>

            <div className="flex flex-col gap-6">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg border border-blue-200">
                    <div className="flex items-start">
                        <div className="flex-shrink-0">
                            <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="ml-4">
                            <h3 className="text-lg font-semibold text-blue-900 mb-2">Publication Opportunity</h3>
                            <p className="text-blue-800 leading-relaxed">
                                Selected peer-reviewed full-length papers will be eligible for <strong>SCOPUS indexed journal publication</strong>. 
                                Publication details will be updated soon. Please check the conference website for further updates.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                            <svg className="w-5 h-5 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            Peer Review Process
                        </h4>
                        <p className="text-gray-600 text-sm">
                            All submitted papers undergo rigorous peer review by experts in the field to ensure quality and relevance.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                            <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            SCOPUS Indexed
                        </h4>
                        <p className="text-gray-600 text-sm">
                            Selected papers will be published in prestigious SCOPUS indexed journals, ensuring wide visibility and recognition.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </section>)
}

export default Publication;