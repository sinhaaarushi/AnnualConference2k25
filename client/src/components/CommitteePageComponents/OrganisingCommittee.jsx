import React from "react";
import rsv from "../../assets/images/Organising Committee/Prof. Rama Shanker Verma.jpeg"
import pitamSingh from "../../../public/Pitam_Singh.jpeg"
import pramodKumarYadav from "../../../public/Pramod_kumar_Yadav.jpeg"
import narenBag from "../../../public/Naren_Bag.jpeg"
import abhishekKundu from "../../../public/abhishekkundu.jpeg"
import prashantMajee from "../../../public/Prashant_Majee.jpeg"
import saurabhBhardwaj from "../../../public/Saurabh_Bhardwaj.jpeg"

function OrganisingCommittee() {

    const organisingCommittee = [{
        members: [{
            name: "Prof. R. S. Verma",
            image: rsv,
            about: <><u>Director</u>, MNNIT Allahabad, India</>,
            role: "Patron",
            homepage: "https://www.mnnit.ac.in/index.php/institute/437-profile-prof-rs-verma"
        }]
    }, {
        members: [{
            name: "Prof. Pitam Singh",
            image: pitamSingh,
            about: "HOD Mathematics, MNNIT Allahabad, India",
            role: "Chairman",
            homepage: "#"
        }]
    }, {
        members: [{
            name: "Prof. Pramod Kumar Yadav",
            image: pramodKumarYadav,
            about: "Professor, Mathematics, MNNIT Allahabad, India",
            role: "Convener",
            homepage: "#"
        }]
    }, {
        members: [{
            name: "Dr. Naren Bag",
            image: narenBag,
            about: "Assistant Professor, Mathematics, MNNIT Allahabad, India",
            role: "Convener",
            homepage: "#"
        }, {
            name: "Dr. Abhishek Kundu",
            image: abhishekKundu,
            about: "Assistant Professor, Mathematics, MNNIT Allahabad, India",
            role: "Convener",
            homepage: "#"
        }]
    }, {
        members: [{
            name: "Dr. Naren Bag",
            image: narenBag,
            about: "Assistant Professor, Mathematics, MNNIT Allahabad, India",
            role: "Secretary",
            homepage: "#"
        }, {
            name: "Dr. Abhishek Kundu",
            image: abhishekKundu,
            about: "Assistant Professor, AMD, MNNIT Allahabad, India",
            role: "Secretary",
            homepage: "#"
        }, {
            name: "Dr. Prashanta Majee",
            image: prashantMajee,
            about: "Assistant Professor, Mathematics, MNNIT Allahabad, India",
            role: "Secretary",
            homepage: "#"
        }, {
            name: "Dr. Saurabh Bhardwaj",
            image: saurabhBhardwaj,
            about: "Assistant Professor, AMD, MNNIT Allahabad, India",
            role: "Secretary",
            homepage: "#"
        }]
    }];

    return (<section
        id="Organising Committee"
        className="flex-col rounded-md shadow-sm text-base-content flex items-center py-8 w-full">
        <h2 className="mb-12 text-4xl font-playfair font-bold text-primary text-center relative">
            <span className="relative">
                Organising Committee
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            </span>
        </h2>
        <div className="w-full max-w-6xl px-4 mx-auto">
            <div className="flex flex-col items-center">
                {/* Level 1 - Patron */}
                <div className="mb-16">
                    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 w-72 max-w-full mx-auto">
                        <div className="flex flex-col items-center text-center">
                            <img
                                src={rsv}
                                alt="Prof. R. S. Verma" 
                                className="w-20 h-20 rounded-full object-cover object-top mb-4 border-2 border-gray-100 shadow-md"/>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Prof. R. S. Verma</h3>
                            <div className="mb-3">
                                <span className="inline-block px-4 py-2 text-sm font-medium bg-primary text-white rounded-full">
                                    Patron
                                </span>
                            </div>
                            <p className="text-sm text-gray-600 leading-relaxed">Director, MNNIT Allahabad, India</p>
                        </div>
                    </div>
                </div>

                {/* Vertical line from Patron to Chairman */}
                <div className="w-1 h-12 bg-gray-300 mb-8"></div>

                {/* Level 2 - Chairman */}
                <div className="mb-16">
                    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 w-72 max-w-full mx-auto">
                        <div className="flex flex-col items-center text-center">
                            <img
                                src={pitamSingh}
                                alt="Prof. Pitam Singh" 
                                className="w-20 h-20 rounded-full object-cover object-top mb-4 border-2 border-gray-100 shadow-md"/>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Prof. Pitam Singh</h3>
                            <div className="mb-3">
                                <span className="inline-block px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-full">
                                    Chairman
                                </span>
                            </div>
                            <p className="text-sm text-gray-600 leading-relaxed">HOD Mathematics, MNNIT Allahabad, India</p>
                        </div>
                    </div>
                </div>

                {/* Vertical line from Chairman to Prof. Pramod Kumar Yadav */}
                <div className="w-1 h-12 bg-gray-300 mb-8"></div>

                {/* Level 3 - Prof. Pramod Kumar Yadav */}
                <div className="mb-16">
                    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 w-72 max-w-full mx-auto">
                        <div className="flex flex-col items-center text-center">
                            <img
                                src={pramodKumarYadav}
                                alt="Prof. Pramod Kumar Yadav" 
                                className="w-20 h-20 rounded-full object-cover object-top mb-4 border-2 border-gray-100 shadow-md"/>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Prof. Pramod Kumar Yadav</h3>
                            <div className="mb-3">
                                <span className="inline-block px-4 py-2 text-sm font-medium bg-orange-600 text-white rounded-full">
                                    Convener
                                </span>
                            </div>
                            <p className="text-sm text-gray-600 leading-relaxed">Professor, Mathematics, MNNIT Allahabad, India</p>
                        </div>
                    </div>
                </div>

                {/* Vertical line from Prof. Pramod Kumar Yadav to Conveners */}
                <div className="w-1 h-12 bg-gray-300 mb-8"></div>

                {/* Level 4 - Conveners */}
                <div className="mb-16">
                    <div className="flex gap-6 justify-center flex-wrap">
                        {organisingCommittee[3].members.map((member, index) => (
                            <div key={index} className="relative">
                                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 w-72 max-w-full mx-auto">
                                    <div className="flex flex-col items-center text-center">
                                        {member.image ? (
                                            <img
                                                src={member.image}
                                                alt={member.name} 
                                                className="w-20 h-20 rounded-full object-cover object-top mb-4 border-2 border-gray-100 shadow-md"/>
                                        ) : (
                                            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center mb-4 border-2 border-gray-100 shadow-md">
                                                <span className="text-gray-500 text-xs font-medium">Photo</span>
                                            </div>
                                        )}
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                                        <div className="mb-3">
                                            <span className="inline-block px-4 py-2 text-sm font-medium bg-green-600 text-white rounded-full">
                                                {member.role}
                                            </span>
                                        </div>
                                        <p className="text-sm text-gray-600 leading-relaxed">{member.about}</p>
                                    </div>
                                </div>
                                {/* Horizontal lines connecting to vertical line */}
                                {index === 0 && (
                                    <div className="absolute top-1/2 -left-8 w-8 h-1 bg-gray-300 transform -translate-y-1/2"></div>
                                )}
                                {index === 1 && (
                                    <div className="absolute top-1/2 -left-4 w-4 h-1 bg-gray-300 transform -translate-y-1/2"></div>
                                )}
                                {index === 2 && (
                                    <div className="absolute top-1/2 -right-4 w-4 h-1 bg-gray-300 transform -translate-y-1/2"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Vertical line from Conveners to Secretaries */}
                <div className="w-1 h-12 bg-gray-300 mb-8"></div>

                {/* Level 5 - Secretaries */}
                <div className="mb-8">
                    <div className="flex gap-4 justify-center flex-wrap">
                        {organisingCommittee[4].members.map((member, index) => (
                            <div key={index} className="relative">
                                <div className="bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition-all duration-300 border border-gray-100 w-64 max-w-full mx-auto">
                                    <div className="flex flex-col items-center text-center">
                                        {member.image ? (
                                            <img
                                                src={member.image}
                                                alt={member.name} 
                                                className="w-16 h-16 rounded-full object-cover object-top mb-3 border-2 border-gray-100 shadow-md"/>
                                        ) : (
                                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center mb-3 border-2 border-gray-100 shadow-md">
                                                <span className="text-gray-500 text-xs font-medium">Photo</span>
                                            </div>
                                        )}
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{member.name}</h3>
                                        <div className="mb-2">
                                            <span className="inline-block px-3 py-1 text-xs font-medium bg-purple-600 text-white rounded-full">
                                                {member.role}
                                            </span>
                                        </div>
                                        <p className="text-xs text-gray-600 leading-relaxed">{member.about}</p>
                                    </div>
                                </div>
                                {/* Horizontal lines connecting to vertical line */}
                                {index === 0 && (
                                    <div className="absolute top-1/2 -left-5 w-5 h-1 bg-gray-300 transform -translate-y-1/2"></div>
                                )}
                                {index === 1 && (
                                    <div className="absolute top-1/2 -left-2.5 w-2.5 h-1 bg-gray-300 transform -translate-y-1/2"></div>
                                )}
                                {index === 2 && (
                                    <div className="absolute top-1/2 -right-2.5 w-2.5 h-1 bg-gray-300 transform -translate-y-1/2"></div>
                                )}
                                {index === 3 && (
                                    <div className="absolute top-1/2 -right-5 w-5 h-1 bg-gray-300 transform -translate-y-1/2"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>);
}

export default OrganisingCommittee;