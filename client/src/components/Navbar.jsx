import React from "react";
import logo from "../assets/images/MNNIT logo.png";
import icamcfdLogo from "../assets/images/ICAMCFD_LOGO.jpeg";
import Dropdown from "./NavbarComponents/Dropdown.jsx";
import Accessability from "./NavbarComponents/Accessability.jsx";
import {IoCloseCircleOutline, IoMenu} from "react-icons/io5";

const Navbar = () => {

    const navItems = [{
        name: "Home", link: "/", scrollUpperLimit: 400 - 1,
    }, {
        name: "About",
        link: "/#about%20conference",
        scrollLowerLimit: 400,
        sublinks: [{name: "About the Conference", link: "/#about%20conference"}, {
            name: "Timeline",
            link: "/#timeline"
        }, {name: "About the Institute", link: "/#about%20institute"}, {name: "Funding & Sponsoring Agencies", link: "/#funding%20sponsoring%20agencies"}, {name: "Abstract Submission", link: "/#abstract%20submission"}, {name: "Publication", link: "/#publication"}]
    }, {
        name: "Committee", link: "/committee", sublinks: [
            {name: "Organising Committee", link: "/committee/organising"}, 
            {name: "National Advisory Committee", link: "/committee/national-advisory"}, 
            {name: "International Advisory Committee", link: "/committee/international-advisory"},
            {name: "Technical Committee", link: "/committee/technical"}
        ]
    }, {
        name: "Conference Program",
        link: "/schedule",
        sublinks: [{name: "Timeline", link: "/timeline"}, {name: "Keynote Speakers", link: "/keynote-speakers"}, {name: "Invited Speakers", link: "/invited-speakers"}]
    }, {
        name: "Registration", link: "/registration"
    }, {
        name: "Contact Us", link: "/#footer"
    }];

    return (<nav
            className={`sticky top-0 z-50 flex justify-center w-full transition-all duration-300 bg-gradient-to-r from-white/95 via-blue-50/90 to-purple-50/90 backdrop-blur-sm border-b border-blue-100/50`}>
            <div className="flex w-full justify-between md:justify-start px-4 max-w-[1400px] items-center py-1">
                <div className="flex items-center gap-3">
                    <img className="w-12" src={logo} alt="MNNIT"/>
                    <img className="w-24 mix-blend-multiply" src={icamcfdLogo} alt="ICAMCFD-2026"/>
                </div>

                <div className="md:hidden drawer-end z-10 relative right-[30px]">
                    <input id="nav-side-bar" type="checkbox" className="drawer-toggle"/>
                    <div className="flex items-center drawer-content">
                        <label htmlFor="nav-side-bar" className="p-1.5 drawer-button rounded-lg hover:bg-blue-100/50 transition-colors duration-200">
                            <IoMenu size={24} className="text-blue-600"/>
                        </label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="nav-side-bar" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="min-h-full w-80 p-4 menu text-base-content bg-gradient-to-br from-white/95 to-blue-50/90 backdrop-blur-md">
                            <label htmlFor="nav-side-bar" aria-label="close sidebar">
                                <IoCloseCircleOutline size={24}
                                                      className="absolute top-0 right-0 -translate-x-1/2 translate-y-1/2"/>
                            </label>
                            <div className="items-center gap-2 mr-[20px]">
                                {navItems.map((el) => (<Dropdown key={el.link} el={el} prevPath={el.prevPath || ""}/>))}
                            </div>
                        </ul>
                    </div>
                </div>

                <div className={`hidden items-center gap-6 ml-24 md:ml-auto md:flex self-center mx-auto`}>
                    {navItems.map((el) => (<Dropdown key={el.link} el={el} prevPath={el.prevPath || ""}/>))}
                </div>
                <Accessability/>
            </div>
        </nav>);
};

export default Navbar;
