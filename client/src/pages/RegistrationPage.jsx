function RegistrationPage() {
    return (<section
        id="publication"
        className="mb-16 flex-col rounded-md shadow-sm lg:p-16 bg-base-200/20 w-full text-base-content">

        <h1 className="mb-8 text-4xl font-bold text-primary font-playfair relative">
            <span className="relative">
                Registration
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            </span>
        </h1>
        
        <div className="mb-6">
            <h3 className="text-xl font-medium underline mb-4">Registration Details</h3>
            <p className="text-base mb-4">
                Academicians, Research Scholars, Postdoctoral Fellows, Industry Professionals, and Scientists from AICTE/UGC/MoE-approved academic and research institutions are eligible to register for the conference.
            </p>
        </div>

        <div className="flex flex-col gap-4">
            <div className="overflow-x-auto">
                <table className="min-w-full table-auto border border-gray-300 shadow-lg rounded-lg overflow-hidden">
                    <thead className="bg-gradient-to-r from-primary to-secondary text-white">
                    <tr className="border-b border-gray-300">
                        <th className="px-6 py-4 border-r border-white/20 text-left text-sm font-semibold">Participants Category</th>
                        <th className="px-6 py-4 border-r border-white/20 text-center text-sm font-semibold">Offline (Base)</th>
                        <th className="px-6 py-4 border-r border-white/20 text-center text-sm font-semibold">Offline (Total with 18% GST)</th>
                        <th className="px-6 py-4 border-r border-white/20 text-center text-sm font-semibold">Online (Base)</th>
                        <th className="px-6 py-4 text-center text-sm font-semibold">Online (Total with 18% GST)</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="border-b border-gray-200 hover:bg-blue-50 transition-colors duration-200">
                        <td className="px-6 py-4 border-r border-gray-200 font-medium text-gray-900">Research scholars</td>
                        <td className="px-6 py-4 border-r border-gray-200 text-center font-semibold text-blue-600">Rs. 3000/-</td>
                        <td className="px-6 py-4 border-r border-gray-200 text-center font-semibold text-green-600">Rs. 3540/-</td>
                        <td className="px-6 py-4 border-r border-gray-200 text-center font-semibold text-blue-600">Rs. 2000/-</td>
                        <td className="px-6 py-4 text-center font-semibold text-green-600">Rs. 2360/-</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-blue-50 transition-colors duration-200">
                        <td className="px-6 py-4 border-r border-gray-200 font-medium text-gray-900">Faculty/Academicians</td>
                        <td className="px-6 py-4 border-r border-gray-200 text-center font-semibold text-blue-600">Rs. 5000/-</td>
                        <td className="px-6 py-4 border-r border-gray-200 text-center font-semibold text-green-600">Rs. 5900/-</td>
                        <td className="px-6 py-4 border-r border-gray-200 text-center font-semibold text-blue-600">Rs. 3000/-</td>
                        <td className="px-6 py-4 text-center font-semibold text-green-600">Rs. 3540/-</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-blue-50 transition-colors duration-200">
                        <td className="px-6 py-4 border-r border-gray-200 font-medium text-gray-900">Industrial Participants</td>
                        <td className="px-6 py-4 border-r border-gray-200 text-center font-semibold text-blue-600">Rs. 6000/-</td>
                        <td className="px-6 py-4 border-r border-gray-200 text-center font-semibold text-green-600">Rs. 7080/-</td>
                        <td className="px-6 py-4 border-r border-gray-200 text-center font-semibold text-blue-600">Rs. 4000/-</td>
                        <td className="px-6 py-4 text-center font-semibold text-green-600">Rs. 4720/-</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-blue-50 transition-colors duration-200">
                        <td className="px-6 py-4 border-r border-gray-200 font-medium text-gray-900">Foreign Participants</td>
                        <td className="px-6 py-4 border-r border-gray-200 text-center font-semibold text-blue-600">USD 150</td>
                        <td className="px-6 py-4 border-r border-gray-200 text-center font-semibold text-green-600">USD 177</td>
                        <td className="px-6 py-4 border-r border-gray-200 text-center font-semibold text-blue-600">USD 100</td>
                        <td className="px-6 py-4 text-center font-semibold text-green-600">USD 118</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-blue-50 transition-colors duration-200">
                        <td className="px-6 py-4 border-r border-gray-200 font-medium text-gray-900">Attendees</td>
                        <td className="px-6 py-4 border-r border-gray-200 text-center font-semibold text-blue-600">Rs. 2500/-</td>
                        <td className="px-6 py-4 border-r border-gray-200 text-center font-semibold text-green-600">Rs. 2950/-</td>
                        <td className="px-6 py-4 border-r border-gray-200 text-center font-semibold text-blue-600">Rs. 1500/-</td>
                        <td className="px-6 py-4 text-center font-semibold text-green-600">Rs. 1770/-</td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <div className="mt-8">
                <h3 className="text-xl font-medium underline mb-4">Registration Link</h3>
                <p className="text-lg font-semibold text-gray-700 mb-6">TBD</p>
                
                <h3 className="text-xl font-medium underline mb-4">Payment Link</h3>
                <div className="text-center mb-6">
                    <p className="text-lg font-semibold text-gray-700 mb-4">
                        <a href="https://www.onlinesbi.sbi/sbicollect/icollecthome.htm?corpID=5483621" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="text-blue-600 hover:text-blue-800 underline">
                            SBI Collect Payment Portal
                        </a>
                    </p>
                    <p className="text-sm text-gray-600 mb-6">Click the link above or scan the QR code below to make payment</p>
                    <div className="flex justify-center">
                        <img 
                            src="/QR.jpg" 
                            alt="QR Code for SBI Collect Payment" 
                            className="w-48 h-48 border border-gray-300 rounded-lg shadow-sm"
                        />
                    </div>
                </div>
                
                <h3 className="text-xl font-medium underline mb-4">Bank A/C Details</h3>
                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto border border-gray-200 shadow-lg rounded-lg overflow-hidden">
                        <tbody>
                        <tr className="hover:bg-gray-50 transition-colors duration-200">
                            <td className="px-4 py-3 border font-semibold bg-gray-50">Account Name</td>
                            <td className="px-4 py-3 border font-mono">SNFCE MNNIT Allahabad</td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition-colors duration-200">
                            <td className="px-4 py-3 border font-semibold bg-gray-50">Account Number</td>
                            <td className="px-4 py-3 border font-mono">10424975574</td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition-colors duration-200">
                            <td className="px-4 py-3 border font-semibold bg-gray-50">IFSC Code</td>
                            <td className="px-4 py-3 border font-mono">SBIN0002580</td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition-colors duration-200">
                            <td className="px-4 py-3 border font-semibold bg-gray-50">Bank and Branch</td>
                            <td className="px-4 py-3 border font-mono">SBI, MNNIT Allahabad</td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition-colors duration-200">
                            <td className="px-4 py-3 border font-semibold bg-gray-50">Swift Code</td>
                            <td className="px-4 py-3 border font-mono">SBININBB828</td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition-colors duration-200">
                            <td className="px-4 py-3 border font-semibold bg-gray-50">GST Number</td>
                            <td className="px-4 py-3 border font-mono">09AAAJM1116B2ZR</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                <h3 className="text-xl font-semibold mb-4 text-blue-900 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    Important Notes
                </h3>
                <ul className="space-y-3 text-base text-gray-700">
                    <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>The registration fee is <strong>Non-refundable</strong>.</span>
                    </li>
                    <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Registration Fee includes <strong>18% GST</strong>.</span>
                    </li>
                    <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Depending on availability, accommodation for the Physical Mode Participants will be made in the Hostels, MNNITA. Charges will be applied as per the Institute rules.</span>
                    </li>
                </ul>
            </div>
        </div>
    </section>)
}

export default RegistrationPage;