const Footer = () => {
    return (
        <>
            <footer className="bg-neutral absolute bottom-0 inset-x-0">
                <div className="text-white w-full mx-auto px-10 py-5 flex items-center justify-between">
                    <span className="text-base text-center">
                        © 2024{" "}
                        <a
                            href="https://www.linkedin.com/in/mouad-el-asri/"
                            className="hover:font-medium transition-all duration-200 ease-in-out"
                        >
                            MOUAD EL ASRI
                        </a>
                        . All Rights Reserved.
                    </span>
					<ul className="">
						<li className="cursor-pointer">
							Privacy Policy
						</li>
					</ul>
                </div>
            </footer>
        </>
    );
};

export default Footer;
