import React from "react";

function About() {
    return (        <section id="about conference"
                     className="mb-8 flex-col rounded-md text-base-content w-full flex items-center pt-28">
        <div className="max-w-[1100px]">
            <h2
                className="text-center text-primary text-4xl font-bold leading-normal mb-6 lg:text-start font-playfair relative">
                <span className="relative">
                    About the Conference
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                </span>
            </h2>
            <div className="grid w-full grid-cols-1 items-center justify-start gap-8 lg:grid-cols-[1.5fr_1fr]">
                <div className="text-justify text-base font-normal *:mb-3">
                    <p className="mb-6 leading-relaxed">The International Conference on Applied Mathematics and Computational Fluid Dynamics (ICAMCFD 2026) will provide a glimpse into the field of various areas of Applied Mathematics and Computational Fluid Dynamics to bring the researchers, academicians, and industrialists together to discuss the recent developments in these fields. The event is organized by the Department of Mathematics at Motilal Nehru National Institute of Technology Allahabad from January 30 – February 01, 2026. The conference will feature keynote and invited talks, along with paper and poster presentations. Young researchers are encouraged to give oral presentations during the conference. The best oral presentations award will be awarded for each session. The conference will promote interactive discussions, facilitate knowledge exchange, and encourage potential collaborations in the relevant field.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
                            <h3 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Conference Features
                            </h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                    Keynote and Invited Talks
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                    Paper and Poster Presentations
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                    Best Oral Presentations Awards
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                    Interactive Discussions
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
                            <h3 className="text-xl font-semibold text-green-900 mb-4 flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                                </svg>
                                Target Audience
                            </h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                                    Researchers & Academicians
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                                    Industry Professionals
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                                    Young Researchers
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                                    Students & Scholars
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-8">
                        <h3 className="text-xl font-semibold mb-4 text-gray-900">Key Topics:</h3>
                        <p className="mb-6 text-gray-600">The conference invites original contributions in the fields of Applied Mathematics and Computational Fluid Dynamics but not limited to, the following list:</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                "Computational Fluid Dynamics",
                                "Mathematical Modelling",
                                "Experimental Fluid Dynamics",
                                "Microfluidics and Nanofludics",
                                "Numerical Solution of Non-Linear PDE",
                                "Biofluid Dynamics",
                                "Fluid Mechanics",
                                "Numerical Scheme and Algorithm",
                                "Numerical Analysis & Computation",
                                "Mathematical Physics",
                                "Perturbation Techniques",
                                "Nonlinear Dynamics Problems",
                                "Integral Equations",
                                "Computational Biology"
                            ].map((topic, index) => (
                                <div key={index} className="group relative bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4 hover:from-blue-100 hover:to-indigo-100 hover:border-blue-300 transition-all duration-300 hover:shadow-md">
                                    <div className="flex items-center">
                                        <div className="w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-full mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-200"></div>
                                        <span className="text-sm font-medium text-gray-800 group-hover:text-gray-900 transition-colors duration-200">{topic}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="overflow-hidden w-full rounded-md bg-gray-100">
                    <div className="aspect-[3/4] w-full">
                        <img className="w-full h-full object-cover hover:scale-105 transition-all duration-300 ease-in"
                             src="https://images.shiksha.com/mediadata/images/1535368937php8IauG3.jpeg"
                             alt="About Conference"/>
                    </div>
                </div>
            </div>
        </div>
    </section>)
}

export default About;