import React from "react";

function NationalAdvisoryCommittee() {

    const boardMembers = [
        {
            name: "Prof. Suman Chakraborty",
            designation: "Director",
            university: "IIT Kharagpur"
        },
        {
            name: "Prof. Somnath Bhattacharyya",
            designation: "",
            university: "IIT Kharagpur"
        },
        {
            name: "Prof. S Sundar",
            designation: "Director of NIT Mizoram",
            university: "IIT Madras"
        },
        {
            name: "Prof. Satyajit Roy",
            designation: "",
            university: "IIT Madras"
        },
        {
            name: "Prof. S. Dhinakaran",
            designation: "",
            university: "IIT Indore"
        },
        {
            name: "Prof. A. K. Nayak",
            designation: "",
            university: "IIT Roorkee"
        },
        {
            name: "Dr. Partha Pratim Gopmandal",
            designation: "",
            university: "NIT Durgapur"
        },
        {
            name: "Dr. Subrata Bera",
            designation: "",
            university: "NIT Silchar"
        },
        {
            name: "Dr. Sankar Sarkar",
            designation: "",
            university: "ISI Kolkata"
        },
        {
            name: "Dr. Murugan Thangadurai",
            designation: "",
            university: "CSIR-CMERI Durgapur"
        },
        {
            name: "Dr. Pranab Kumar Kundu",
            designation: "",
            university: "NIT Jamshedpur"
        },
        {
            name: "Dr. Pinaki Pal",
            designation: "",
            university: "NIT Durgapur"
        }
    ];

    return (<section
        id="National Advisory Committee"
        className="mb-8 flex-col shadow-sm text-base-content w-full flex items-center bg-base-200/40  py-6">
        <div className="max-w-[1100px] flex flex-col items-center">
            <h2 className="mb-8 text-4xl font-bold text-primary font-playfair text-center relative">
                <span className="relative">
                    National Advisory Committee
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                </span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
                {boardMembers.map((member, index) => <div
                    key={index}
                    className="relative bg-base-200 p-4 rounded-lg hover:shadow-md hover:scale-105 transition-all duration-300 flex flex-col justify-between min-h-[120px]">
                    <div>
                        <p className="font-semibold text-lg mb-1">{member.name}</p>
                        {member.designation && <p className="text-sm text-primary mb-2">{member.designation}</p>}
                    </div>
                    <p className="text-sm text-gray-600 mt-auto">{member.university}</p>
                </div>)}
            </div>
        </div>
    </section>)
}

export default NationalAdvisoryCommittee;