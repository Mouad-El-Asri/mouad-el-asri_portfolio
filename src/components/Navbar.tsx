import moelAsrImg from "../assets/moel-asr.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <>
            <nav>
                <div className="h-[100px] border-b-[1px] border-b-gray-200 flex justify-between items-center p-8 overflow-hidden">
                    <a href="index.html">
                        <img src={moelAsrImg} alt="moel-asr" />
                    </a>
                    <div className="h-[100px] flex justify-center items-center">
                        <ul className="list-none flex items-center h-full text-lg mr-5">
                            {[
                                "Home",
                                "About",
                                "Certifications",
                                "Portfolio",
                                "Blog",
                                "Contact",
                            ].map((item) => (
                                <li className="px-5 h-full flex items-center hover:text-secondary transition-colors duration-500">
                                    <a href="#">{item}</a>
                                </li>
                            ))}
                        </ul>
                        <div className="flex gap-0">
                            {[
								{
                                    icon: faEnvelope,
                                    href: "#",
                                    color: "text-[#999999]",
									hoverBg: "hover:bg-[#999999]",
									hoverColor: "hover:text-white",
                                },
                                {
                                    icon: faLinkedin,
                                    href: "#",
                                    color: "text-[#0077b5]",
									hoverBg: "hover:bg-[#0077b5]",
									hoverColor: "hover:text-white",
                                },
								{
                                    icon: faGithub,
                                    href: "#",
                                    color: "text-[#181717]",
									hoverBg: "hover:bg-[#181717]",
									hoverColor: "hover:text-white",
                                },
								{
                                    icon: faInstagram,
                                    href: "#",
                                    color: "text-[#E4405F]",
									hoverBg: "hover:bg-[#E4405F]",
									hoverColor: "hover:text-white",
                                }
                            ].map(({ icon, href, color, hoverBg, hoverColor }) => (
                                <a
                                    href={href}
                                    className={`flex items-center justify-center w-9 h-9 leading-none no-underline ${color} ${hoverBg} ${hoverColor} hover:rounded-full transition-all duration-500`}
                                >
                                    <FontAwesomeIcon
                                        icon={icon}
                                        className="w-5 h-5"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
