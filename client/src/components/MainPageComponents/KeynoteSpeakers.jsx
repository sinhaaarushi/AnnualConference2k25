import React from "react";

function KeynoteSpeakers() {

    const keynoteSpeakers = [
        {
            name: "Prof. H. Ohshima",
            image: "/Hiroyuki Ohshima.jpeg",
            about: "Tokyo University of Science, Japan",
            homepage: "#"
        },
        {
            name: "Prof. Stephen Herdt",
            image: "/Random.jpeg",
            about: "TU Darmstadt, Germany",
            homepage: "#"
        },
        {
            name: "Prof. Suman Chakraborty",
            image: "/Suman_Chakraborty.jpeg",
            about: "Director, IIT Kharagpur",
            homepage: "#"
        },
        {
            name: "Prof. Somnath Bhattacharyya",
            image: "/Somnath_Bhattacharyya.jpeg",
            about: "IIT Kharagpur",
            homepage: "#"
        },
        {
            name: "Prof. S Sundar",
            image: "/Random.jpeg",
            about: "IIT Madras, Director of NIT Mizoram",
            homepage: "#"
        }
    ];

    return (<section
        id="Keynote"
        className="mb-8 flex-col shadow-sm text-base-content w-full flex items-center bg-base-200/40 py-6">
        <div className="max-w-[1100px] flex flex-col items-center">
            <h2 className="mb-8 text-4xl font-bold text-primary font-playfair text-center relative">
                <span className="relative">
                    Keynote Speakers
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                </span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
                {keynoteSpeakers.map((member, index) => <div
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
                        <p className="font-semibold text-lg mb-2 text-gray-900 text-center">{member.name}</p>
                        <p className="text-sm text-gray-600 text-center leading-relaxed">{member.about}</p>
                    </div>
                </div>)}
            </div>
        </div>
    </section>)
}

export default KeynoteSpeakers;