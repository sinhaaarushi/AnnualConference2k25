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
            className="mb-8 text-4xl font-bold  text-primary font-playfair text-center">International Advisory
            Committee</h2>
            <div className="flex flex-row flex-wrap gap-5 justify-center">
                {boardMembers.map(member =>
                    <div
                        className="flex gap-4 shadow-sm p-4 w-full max-w-[350px] relative bg-base-200/50 hover:shadow-md transition-all duration-300"
                        key={member.name}>
                        <div className="avatar">
                            <div className="w-16 rounded">
                                <img src={member.image} alt={member.name}/>
                            </div>
                        </div>
                        <div>
                            <p className="text-lg font-medium">{member.name}</p>
                            <p className="text-sm">{member.university}</p>
                        </div>
                        {member.homepage !== "#" && (
                            <a className="absolute top-0 right-0 translate-y-1/2 -translate-x-1/2" href={member.homepage}
                               target="_blank"><GoLinkExternal
                                size={20}/></a>
                        )}
                    </div>
                )}
            </div>
        </div>
    </section>)
}

export default InternationalAdvisoryCommittee;