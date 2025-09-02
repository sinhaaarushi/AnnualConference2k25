import React from "react";

import {GoLinkExternal} from "react-icons/go";

// Placeholder image for new members
const placeholderImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%23e5e7eb'/%3E%3Ctext x='32' y='32' font-family='Arial' font-size='12' fill='%236b7280' text-anchor='middle' dy='.3em'%3ENo Image%3C/text%3E%3C/svg%3E";

function InternationalAdvisoryCommittee() {
    const boardMembers = [
        {
            name: "Prof. H. Ohshima",
            university: "Tokyo University of Science, Japan",
            image: placeholderImage,
            homepage: "#"
        },
        {
            name: "Prof. Stephen Herdt",
            university: "TU Darmstadt, Germany",
            image: placeholderImage,
            homepage: "#"
        },
        {
            name: "Prof. Konstantinos Kontis",
            university: "Glasgow, Scotland, UK",
            image: placeholderImage,
            homepage: "#"
        },
        {
            name: "Prof. Prashanta Dutta",
            university: "Washington State University, USA",
            image: placeholderImage,
            homepage: "#"
        },
        {
            name: "Prof. J F L Duval",
            university: "CNRS Research Director - LIEC Laboratory, France",
            image: placeholderImage,
            homepage: "#"
        },
        {
            name: "Prof. Olga Vinogradova",
            university: "A.N. Frumkin Institute of Physical Chemistry and Electrochemistry, Russia",
            image: placeholderImage,
            homepage: "#"
        }
    ];

    return (<section
        id="International Advisory Committee"
        className="mb-8 flex-col rounded-md text-base-content w-full flex items-center py-4">

        <div className="max-w-[1100px]"><h2
            className="mb-8 text-4xl font-bold text-primary font-playfair text-center relative">
            <span className="relative">
                International Advisory Committee
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            </span>
        </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                {boardMembers.map(member =>
                    <div
                        className="flex gap-4 shadow-sm p-6 rounded-lg relative bg-base-200/50 hover:shadow-lg hover:scale-105 transition-all duration-300 min-h-[140px]"
                        key={member.name}>
                        <div className="avatar flex-shrink-0">
                            <div className="w-20 rounded-full">
                                <img src={member.image} alt={member.name}/>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center flex-1">
                            <p className="text-lg font-semibold mb-2">{member.name}</p>
                            <p className="text-sm text-gray-600 leading-relaxed">{member.university}</p>
                        </div>
                        {member.homepage !== "#" && (
                            <a className="absolute top-3 right-3 text-primary hover:text-secondary transition-colors" href={member.homepage}
                               target="_blank" rel="noopener noreferrer">
                                <GoLinkExternal size={18}/>
                            </a>
                        )}
                    </div>
                )}
            </div>
        </div>
    </section>)
}

export default InternationalAdvisoryCommittee;