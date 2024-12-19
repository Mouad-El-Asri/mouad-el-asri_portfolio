import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 200) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`${
                isVisible ? "back-to-top-show" : "back-to-top-hide"
            } hidden fixed bottom-0 right-0 lg:flex justify-center items-center z-50 mr-5 w-14 h-14 border-2 text-secondary border-secondary rounded-full cursor-pointer hover:bg-secondary hover:text-white hover:border-none focus:bg-secondary focus:text-white focus:border-none transition-all duration-300 ease-out`}
        >
            <FontAwesomeIcon icon={faAngleUp} className="w-6 h-6" />
        </button>
    );
};

export default BackToTopButton;
