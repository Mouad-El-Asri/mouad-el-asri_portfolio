import moelAsrImg from "@/assets/moel-asr.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faHackerrank,
    faInstagram,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faSearch } from "@fortawesome/free-solid-svg-icons";
import "@/App.css";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleNavItemClick = (index: number) => {
        setActiveIndex(index);
        setTimeout(() => {
            setActiveIndex(null);
        }, 500);
    };

    const location = useLocation();

    return (
        <nav className="fixed inset-x-0 top-0 nav-shadow bg-white z-10">
            <div className="h-[100px] border-b-[1px] border-b-gray-200 flex justify-between items-center p-10 overflow-hidden">
                <Link to="/">
                    <img
                        src={moelAsrImg}
                        alt="moel-asr"
                        width={250}
                        height={60}
                    />
                </Link>
                <div className="h-[100px] flex justify-center items-center">
                    <ul className="list-none flex items-center h-full text-lg">
                        {[
                            "Home",
                            "About",
                            "Certifications",
                            "Gallery",
                            "Projects",
                            "Blog",
                            "Contact",
                        ].map((item, index) => {
                            const isActive = location.pathname === (item === "Home" ? "/" : `/${item.toLowerCase()}`);
                            return (
                                <li
                                    key={index}
                                    onClick={() => handleNavItemClick(index)}
                                    className={`${
                                        activeIndex == index ? "active" : ""
                                    } px-5 h-full flex items-center hover:text-secondary transition-[color] duration-300`}
                                >
                                    <Link
                                        className={`focus:text-secondary transition-colors duration-500 ${isActive ? "font-medium text-secondary" : ""}`}
                                        to={`/${item === "Home" ? "" : item}`}
                                    >
                                        {item}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                    <div className="mx-5 flex items-center justify-center border rounded-md p-2 text-gray-500">
                        <FontAwesomeIcon
                            icon={faSearch}
                            className="w-4 h-4 mr-2"
                        />
                        <input type="text" placeholder="Search..." />
                    </div>
                    <div className="flex gap-0">
                        {[
                            {
                                icon: faEnvelope,
                                href: "#",
                                color: "text-[#999999]",
                                hoverFocusBg:
                                    "hover:bg-[#999999] focus:bg-[#999999]",
                                hoverFocusColor:
                                    "hover:text-white focus:text-white",
                            },
                            {
                                icon: faLinkedin,
                                href: "#",
                                color: "text-[#0077b5]",
                                hoverFocusBg:
                                    "hover:bg-[#0077b5] focus:bg-[#0077b5]",
                                hoverFocusColor:
                                    "hover:text-white focus:text-white",
                            },
                            {
                                icon: faGithub,
                                href: "#",
                                color: "text-[#181717]",
                                hoverFocusBg:
                                    "hover:bg-[#181717] focus:bg-[#181717]",
                                hoverFocusColor:
                                    "hover:text-white focus:text-white",
                            },
                            {
                                icon: faInstagram,
                                href: "#",
                                color: "text-[#E4405F]",
                                hoverFocusBg:
                                    "hover:bg-[#E4405F] focus:bg-[#E4405F]",
                                hoverFocusColor:
                                    "hover:text-white focus:text-white",
                            },
                            {
                                icon: faHackerrank,
                                href: "#",
                                color: "text-[#2EC866]",
                                hoverFocusBg:
                                    "hover:bg-[#2EC866] focus:bg-[#2EC866]",
                                hoverFocusColor:
                                    "hover:text-white focus:text-white",
                            },
                        ].map(
                            ({
                                icon,
                                href,
                                color,
                                hoverFocusBg,
                                hoverFocusColor,
                            }) => (
                                <a
                                    href={href}
                                    className={`flex items-center justify-center w-9 h-9 leading-none no-underline ${color} ${hoverFocusBg} ${hoverFocusColor} hover:rounded-full focus:rounded-full transition-all duration-500`}
                                >
                                    <FontAwesomeIcon
                                        icon={icon}
                                        className="w-5 h-5"
                                    />
                                </a>
                            )
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
