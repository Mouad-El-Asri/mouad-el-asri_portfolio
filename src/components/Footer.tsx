import moelAsrFooterImg from "@/assets/moel-asr-footer.png";

const Footer = () => {
    return (
        <footer className="bg-neutral relative top-[100px] z-10 w-full">
            <div className="text-white">
                <div className="flex justify-between items-center px-10 py-2">
                    <a href="index.html">
                        <img src={moelAsrFooterImg} alt="moel-asr" />
                    </a>
                    <ul className="flex gap-8 text-base">
                        <li className="cursor-pointer">
                            <a href="#">Privacy Policy</a>
                        </li>
                        <li className="cursor-pointer">
                            <a href="#">Terms of Service</a>
                        </li>
                    </ul>
                </div>
                <hr className="border-gray-400 mx-10" />
                <span className="block text-base text-center mx-auto py-2">
                    © 2024{" "}
                    <a
                        href="https://www.linkedin.com/in/mouad-el-asri/"
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
