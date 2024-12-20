import moelAsrFooterImg from "@/assets/moel-asr-footer.png";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
    return (
        <footer className="bg-neutral w-full z-20">
            <div className="text-white">
                <div className="flex flex-col md:flex-row justify-between items-center px-5 md:px-24 py-3 md:py-2 space-y-4 md:space-y-0">
                    <Link to="/">
                        <img
                            src={moelAsrFooterImg}
                            alt="moel-asr"
                            className=""
                        />
                    </Link>
                    <ul className="flex gap-8 text-base">
                        <li className="cursor-pointer">
                            <a href="#">Privacy Policy</a>
                        </li>
                        <li className="cursor-pointer">
                            <a
                                href="/terms-of-service"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Terms of Service
                            </a>
                        </li>
                    </ul>
                </div>
                <hr className="border-gray-400 mx-4 md:mx-24" />
                <span className="block text-sm md:text-base text-center mx-auto py-3 md:py-2 px-4">
                    © 2024{" "}
                    <a
                        href="https://www.linkedin.com/in/mouad-el-asri/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:font-medium transition-all duration-200 ease-in-out"
                    >
                        MOUAD EL ASRI
                    </a>
                    . All Rights Reserved.
                </span>
            </div>
        </footer>
    );
};

export default Footer;
