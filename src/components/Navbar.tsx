import moelAsrImg from "../assets/moel-asr.png";

const Navbar = () => {
    return (
        <>
            <nav>
                <div className="h-[100px] border-b-[1px] border-b-primary flex justify-between items-center p-8">
                    <a href="index.html">
                        <img src={moelAsrImg} alt="moel-asr" />
                    </a>
                    <div className="">
                        <ul className="list-none flex text-lg gap-8">
                            <li>Home</li>
                            <li>About</li>
                            <li>Certifications</li>
                            <li>Portfolio</li>
                            <li>Blog</li>
                            <li>Contact</li>
                        </ul>
						<div>

						</div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
