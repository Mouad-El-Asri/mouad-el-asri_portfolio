import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    useEffect(() => {
        const footerHeight = localStorage.getItem('footerHeight');
		const notFound = document.getElementById('not-found');
		notFound!.style.height = `calc(100vh - ${footerHeight}px)`;
		console.log(footerHeight);
    }, []);

    return (
        <div
			id="not-found"
            className={`w-full flex flex-col items-center justify-center gap-5 text-center px-6 md:px-12 pt-24`}
        >
            <h1 className="text-7xl md:text-9xl lg:text-[162px] tracking-tight font-extrabold text-secondary">
                404
            </h1>
            <p className="text-2xl md:text-4xl tracking-tight font-bold text-primary">
                Sorry, this page isn't available.
            </p>
            <p className="text-base md:text-lg font-light text-neutral">
                The link you followed may be broken, or the page may have been removed.
            </p>
			<Link to="/" className="text-sm md:text-base inline-flex text-white bg-secondary hover:bg-[#E64A19] focus:ring-4 focus:ring-accent font-medium rounded-lg px-5 py-2.5 text-center transition-all duration-300 ease-in-out mt-5">Back to Homepage</Link>
        </div>
    );
};

export default NotFound;
