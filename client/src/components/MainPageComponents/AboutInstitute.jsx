import React from "react";
import mnnitImage from "../../assets/images/MNNIT3.png";

function AboutInstitute() {
    return (        <section id="about institute"
                     className="mb-8 flex-col rounded-md text-base-content w-full flex items-center pt-28">
        <div className="max-w-[1100px]">
            <h2
                className="text-center text-primary text-4xl font-bold leading-normal mb-6 lg:text-start font-playfair relative">
                <span className="relative">
                    About the Institute
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                </span>
            </h2>
            <div className="grid w-full grid-cols-1 items-center justify-start gap-8 lg:grid-cols-[2fr_1fr]">
                <div className="text-justify text-base font-normal *:mb-3">
                    <p>Motilal Nehru National Institute of Technology Allahabad, Prayagraj, is an Institute with total commitment to quality and excellence in academic pursuits. It was established as the 17th Regional Engineering Colleges in India in the year 1961 as a joint enterprise of Government of India and Government of Uttar Pradesh, and was an associated college of University of Allahabad. With over 45 years of experience and achievements in the field of technical education, on June 26, 2002 MNREC was transformed into NIT and Deemed University fully funded by Government of India. With the enactment of NIT Act-2007 (29 to 2007), the Institute has been granted the status of Institution of National Importance w.e.f. 15.08.2007. The Institute has been recognized by the Government of India as one of the centers for the Quality Improvement Programme for M.Tech and Ph.D. The Institute was selected as a lead institution in the Design theme under Indo-UK REC Project (1994-99). The Institute has been selected as a Lead Institution under World Bank funded Government of India Project on Technical Education Quality Improvement Programme (TEQIP) (2002-2007).</p>
                </div>
                <div className="overflow-hidden w-full h-full rounded-md bg-red-700">
                    <img className=" hover:scale-105 transition-all duration-300 ease-in h-full object-cover"
                         src={mnnitImage}
                         alt="MNNIT Allahabad Campus"/>
                </div>
            </div>
        </div>
    </section>)
}

export default AboutInstitute; 