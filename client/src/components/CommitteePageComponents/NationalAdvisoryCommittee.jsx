import React from "react";
import sumanChakraborty from "../../../public/Suman_Chakraborty.jpeg";
import somnathBhattacharyya from "../../../public/Somnath_Bhattacharyya.jpeg";
import ameeyaKumarNayak from "../../../public/Ameeya Kumar Nayak.jpeg";
import parthaGopmandal from "../../../public/Dr. Partha P. Gopmandal.jpeg";
import muruganThangadurai from "../../../public/Murugan Thangadurai.jpeg";
import pinakiPal from "../../../public/Pinaki Pal.jpeg";

function NationalAdvisoryCommittee() {

    const boardMembers = [
        {
            name: "Prof. Suman Chakraborty",
            designation: "Director",
            university: "IIT Kharagpur",
            image: sumanChakraborty
        },
        {
            name: "Prof. Somnath Bhattacharyya",
            designation: "",
            university: "IIT Kharagpur",
            image: somnathBhattacharyya
        },
        {
            name: "Prof. S Sundar",
            designation: "Director of NIT Mizoram",
            university: "IIT Madras",
            image: "/Random.jpeg"
        },
        {
            name: "Prof. Satyajit Roy",
            designation: "",
            university: "IIT Madras",
            image: "/Random.jpeg"
        },
        {
            name: "Prof. S. Dhinakaran",
            designation: "",
            university: "IIT Indore",
            image: "/Random.jpeg"
        },
        {
            name: "Prof. A. K. Nayak",
            designation: "",
            university: "IIT Roorkee",
            image: ameeyaKumarNayak
        },
        {
            name: "Dr. Partha Pratim Gopmandal",
            designation: "",
            university: "NIT Durgapur",
            image: parthaGopmandal
        },
        {
            name: "Dr. Subrata Bera",
            designation: "",
            university: "NIT Silchar",
            image: "/Random.jpeg"
        },
        {
            name: "Dr. Sankar Sarkar",
            designation: "",
            university: "ISI Kolkata",
            image: "/Random.jpeg"
        },
        {
            name: "Dr. Murugan Thangadurai",
            designation: "",
            university: "CSIR-CMERI Durgapur",
            image: muruganThangadurai
        },
        {
            name: "Dr. Pranab Kumar Kundu",
            designation: "",
            university: "NIT Jamshedpur",
            image: "/Random.jpeg"
        },
        {
            name: "Dr. Pinaki Pal",
            designation: "",
            university: "NIT Durgapur",
            image: pinakiPal
        }
    ];

    return (<section
        id="National Advisory Committee"
        className="mb-8 flex-col shadow-sm text-base-content w-full flex items-center bg-base-200/40 py-6">
        <div className="max-w-[1100px] flex flex-col items-center">
            <h2 className="mb-8 text-4xl font-bold text-primary font-playfair text-center relative">
                <span className="relative">
                    National Advisory Committee
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                </span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
                {boardMembers.map((member, index) => <div
                    key={index}
                    className="relative bg-white p-6 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col items-center text-center min-h-[200px]">
                    <div className="mb-4">
                        {member.image ? (
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-20 h-20 rounded-full object-cover object-top border-2 border-gray-100 shadow-md"
                            />
                        ) : (
                            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center border-2 border-gray-100 shadow-md">
                                <span className="text-gray-500 text-xs font-medium">Photo</span>
                            </div>
                        )}
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                        <p className="font-semibold text-lg mb-2 text-gray-900">{member.name}</p>
                        {member.designation && <p className="text-sm text-primary mb-2 font-medium">{member.designation}</p>}
                        <p className="text-sm text-gray-600">{member.university}</p>
                    </div>
                </div>)}
            </div>
        </div>
    </section>)
}

export default NationalAdvisoryCommittee;