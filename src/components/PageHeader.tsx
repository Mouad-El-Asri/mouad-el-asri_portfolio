import { Link } from "react-router-dom";

const PageHeader = ({ title }: { title: string }) => {
    return (
        <div className="flex flex-col gap-2 sm:gap-0 sm:flex-row sm:justify-between sm:items-center pt-10">
            <h1 className="text-3xl sm:text-4xl">{title}</h1>
            <nav className="text-sm sm:text-base space-x-2 sm:space-x-3">
                <span className="text-secondary cursor-pointer hover:text-blue-400 transition-colors duration-300 ease-out"><Link to="/">Home</Link></span>
                <span className="text-neutral">{">"}</span>
                <span className="text-secondary cursor-pointer hover:text-blue-400 transition-colors duration-300 ease-out"><Link to="/terms-of-service">{title}</Link></span>
            </nav>
        </div>
    );
};

export default PageHeader;
