import React, {useEffect} from 'react';
import Banner from "../components/Banner.jsx";
import {Outlet, useLocation} from "react-router-dom";

const HomePage = () => {

    const location = useLocation();

    //scroll to specific section
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            // Add a small delay to ensure DOM is fully rendered
            setTimeout(() => {
                const element = document.getElementById(decodeURIComponent(hash.substring(1)));
                if (element) {
                    // Get navbar height dynamically and add extra padding
                    const navbar = document.querySelector('nav');
                    const navbarHeight = navbar ? navbar.offsetHeight : 100;
                    
                    // Special handling for timeline and publication sections
                    const sectionId = decodeURIComponent(hash.substring(1));
                    let extraPadding = 80; // Default padding
                    
                    if (sectionId === 'timeline' || sectionId === 'publication') {
                        extraPadding = 120; // Extra padding for these sections
                    }
                    
                    const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
                    window.scrollTo({
                        top: elementTop - navbarHeight - extraPadding,
                        behavior: "smooth"
                    });
                }
            }, 100);
        } else {
            window.scrollTo({top: 1, behavior: "smooth"});
        }
    }, [location]);

    return (
        <>
            {useLocation().pathname === "/" && <Banner/>}
            <div className="relative flex min-h-screen flex-col gap-5 rounded-md text-base-content items-center">
                <div className="relative md:flex md:flex-row w-full px-2 md:px-0">
                    {/*<Sidebar activeSection={activeSection} sectionId={sectionId}/>*/}
                    <Outlet/>
                </div>

            </div>
        </>
    );
};

export default HomePage;
