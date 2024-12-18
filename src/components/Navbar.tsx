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
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
    const location = useLocation();

    return (
        <nav className="fixed inset-x-0 top-0 nav-shadow bg-white z-10">
            <div className="h-[100px] border-b-[1px] border-b-gray-200 flex justify-between items-center p-10">
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
                        ].map((item) => {
                            const isActive =
                                location.pathname ===
                                (item === "Home" ? "/" : `/${item}`);
                            return (
                                <li
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
        </nav>
    );
};

export default Navbar;
