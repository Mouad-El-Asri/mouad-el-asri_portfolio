import moelAsrImg from "@/assets/moel-asr.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faHackerrank,
    faInstagram,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
	faCertificate,
    faComment,
    faEnvelope,
    faGear,
    faHome,
    faImage,
    faPenToSquare,
    faSearch,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import "@/App.css";
import { Link, useLocation } from "react-router-dom";
import Hamburger from "hamburger-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Navbar: React.FC = () => {
    const location = useLocation();
    const [isOpen, setOpen] = useState(false);

    return (
        <nav className="sticky inset-x-0 top-0 nav-shadow bg-white z-10 overflow-hidden">
            <div className="h-24 border-b-[1px] border-b-gray-200 flex justify-between items-center p-5 lg:p-10">
                <Link to="/">
                    <img
                        src={moelAsrImg}
                        alt="moel-asr"
                        className="h-auto w-[160px] sm:w-[180px] md:w-[200px] lg:w-[225px]"
                    />
                </Link>

                <div className="lg:hidden flex items-center">
                    <Hamburger toggled={isOpen} size={24} toggle={setOpen} />
                </div>

                <div className="hidden lg:flex h-24 justify-center items-center">
                    <ul className="list-none flex items-center h-full text-lg">
                        {[
                            { item: "Home", icon: faHome },
                            { item: "About", icon: faUser },
                            { item: "Certificates", icon: faCertificate },
                            { item: "Projects", icon: faGear },
                            { item: "Gallery", icon: faImage },
                            { item: "Blog", icon: faPenToSquare },
                            { item: "Contact", icon: faComment },
                        ].map(({ item, icon }) => {
                            const isActive =
                                location.pathname ===
                                (item === "Home" ? "/" : `/${item}`);
                            return (
                                <li
                                    key={item}
                                    className={`${
                                        isActive
                                            ? "font-medium text-secondary bg-accent"
                                            : ""
                                    } px-5 h-full flex items-center hover:text-secondary transition-[color] duration-300`}
                                >
                                    <Link
                                        className={`focus:text-secondary transition-colors duration-500`}
                                        to={`/${item === "Home" ? "" : item}`}
                                    >
                                        <FontAwesomeIcon
                                            icon={icon}
                                            className="w-4 h-4 mr-2"
                                        />
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
                                href: "mailto:elasri.mouad.2002@gmail.com",
                                color: "text-[#999999]",
                                hoverFocusBg:
                                    "hover:bg-[#999999] focus:bg-[#999999]",
                                hoverFocusColor:
                                    "hover:text-white focus:text-white",
                            },
                            {
                                icon: faLinkedin,
                                href: "https://www.linkedin.com/in/mouad-el-asri",
                                color: "text-[#0077b5]",
                                hoverFocusBg:
                                    "hover:bg-[#0077b5] focus:bg-[#0077b5]",
                                hoverFocusColor:
                                    "hover:text-white focus:text-white",
                            },
                            {
                                icon: faGithub,
                                href: "https://github.com/Mouad-El-Asri",
                                color: "text-[#181717]",
                                hoverFocusBg:
                                    "hover:bg-[#181717] focus:bg-[#181717]",
                                hoverFocusColor:
                                    "hover:text-white focus:text-white",
                            },
                            {
                                icon: faInstagram,
                                href: "https://www.instagram.com/mouad_el_asriii",
                                color: "text-[#E4405F]",
                                hoverFocusBg:
                                    "hover:bg-[#E4405F] focus:bg-[#E4405F]",
                                hoverFocusColor:
                                    "hover:text-white focus:text-white",
                            },
                            {
                                icon: faHackerrank,
                                href: "https://www.hackerrank.com/profile/elasri_mouad_201",
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
                                    key={href}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
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
            {isOpen && (
                <AnimatePresence>
                    <motion.div
                        className="lg:hidden bg-white py-4 w-full"
                        initial={{ opacity: 0, y: -25 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -25 }}
                        transition={{ duration: 0.4 }}
                    >
                        <ul className="list-none flex flex-col items-start">
                            {[
                                { item: "Home", icon: faHome },
								{ item: "About", icon: faUser },
								{ item: "Certificates", icon: faCertificate },
								{ item: "Projects", icon: faGear },
								{ item: "Gallery", icon: faImage },
								{ item: "Blog", icon: faPenToSquare },
								{ item: "Contact", icon: faComment },
                            ].map(({ item, icon }) => {
                                const isActive =
                                    location.pathname ===
                                    (item === "Home" ? "/" : `/${item}`);
                                return (
                                    <li
                                        key={item}
                                        className={`${
                                            isActive
                                                ? "font-medium text-secondary bg-accent"
                                                : ""
                                        } w-full px-8 py-2 text-lg hover:text-secondary`}
                                    >
                                        <Link
                                            to={`/${
                                                item === "Home" ? "" : item
                                            }`}
                                            onClick={() => setOpen(false)}
                                        >
											<FontAwesomeIcon
                                            icon={icon}
                                            className="w-4 h-4 mr-2"
                                        />
                                            {item}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </motion.div>
                </AnimatePresence>
            )}
        </nav>
    );
};

export default Navbar;
