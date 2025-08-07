import React from "react";
import {motion} from "framer-motion";

// Placeholder image for new speakers
const placeholderImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23e5e7eb'/%3E%3Ctext x='100' y='100' font-family='Arial' font-size='16' fill='%236b7280' text-anchor='middle' dy='.3em'%3ENo Image%3C/text%3E%3C/svg%3E";

function InvitedSpeakers() {

    const invitedSpeakers = [
        {
            name: "Prof. S. Dhinakaran",
            image: placeholderImage,
            about: "IIT Indore",
            homepage: "#"
        },
        {
            name: "Prof. A. K. Nayak",
            image: placeholderImage,
            about: "IIT Roorkee",
            homepage: "#"
        },
        {
            name: "Dr. Partha Pratim Gopmandal",
            image: placeholderImage,
            about: "NIT Durgapur",
            homepage: "#"
        },
        {
            name: "Dr. Takuya Sugimoto",
            image: placeholderImage,
            about: "University of Tsukuba, Japan",
            homepage: "#"
        },
        {
            name: "Dr. Subrata Bera",
            image: placeholderImage,
            about: "NIT Silchar",
            homepage: "#"
        },
        {
            name: "Dr. Sankar Sarkar",
            image: placeholderImage,
            about: "ISI Kolkata",
            homepage: "#"
        },
        {
            name: "Dr. Murugan Thangadurai",
            image: placeholderImage,
            about: "CSIR-CMERI Durgapur",
            homepage: "#"
        },
        {
            name: "Dr. Pranab Kumar Kundu",
            image: placeholderImage,
            about: "NIT Jamshedpur",
            homepage: "#"
        },
        {
            name: "Dr. Pinaki Pal",
            image: placeholderImage,
            about: "NIT Durgapur",
            homepage: "#"
        }
    ];

    return (<section
        id="Invited"
        className="mb-8 flex-col rounded-md shadow-sm lg:p-8 bg-base-200/40 text-base-content w-full flex items-center">
        <div className="max-w-[1100px]">
            <h1 className="mb-4 text-5xl font-bold text-primary font-playfair py-8 text-center">Invited Speakers</h1>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
                {invitedSpeakers.map((member, i) =>
                    <motion.div
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        viewport={{once: true}}
                        transition={{duration: 1, delay: 0.1 * i}}
                        key={i} className="border-dotted border-black rounded-lg p-6 text-center shadow-md flex flex-col
                    items-center gap-6 hover:shadow-lg origin-center transition-all bg-base-100 w-full max-w-[280px]">
                        <img
                            src={member.image}
                            alt={member.name} className="rounded-full w-[90%] aspect-square"/>
                        <div>
                            <h3 className="mb-2 font-semibold underline">
                                {member.homepage !== "#" ? (
                                    <a href={member.homepage}>{member.name}</a>
                                ) : (
                                    member.name
                                )}
                            </h3>
                            <p className="text-base-content/80 text-sm">{member.about}</p>
                        </div>
                    </motion.div>)}
            </div>
        </div>
    </section>)
}

export default InvitedSpeakers; 