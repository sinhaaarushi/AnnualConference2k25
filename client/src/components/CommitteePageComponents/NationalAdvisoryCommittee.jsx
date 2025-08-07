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
            <h2 className="mb-8 text-4xl font-bold underlne text-primary font-playfair text-center">National Advisory
                Committee</h2>
            <div className="flex flex-row flex-wrap gap-4 align-middle justify-center">
                {boardMembers.map(member => <div
                    className="relative bg-base-200 p-2 w-full max-w-[90%] md:max-w-[270px] hover:rounded-lg hover:bottom-0.5 hover:shadow-sm transition-all duration-300">
                    <p className="font-medium">{member.name}</p>
                    <p className="text-sm">{member.designation}</p>
                    <p className="font-thin">{member.university}</p>
                </div>)}
            </div>
        </div>
    </section>)
}

export default NationalAdvisoryCommittee;