import { Link } from "react-router-dom";

const PageHeader = ({ title }: { title: string }) => {
    return (
        <div className="flex justify-between items-center pt-10">
            <h1 className="text-[2rem]">{title}</h1>
            <nav className="text-base space-x-3">
                <span className="text-secondary cursor-pointer hover:text-blue-400 transition-colors duration-300 ease-out"><Link to="/">Home</Link></span>
                <span className="text-neutral">{">"}</span>
                <span className="text-secondary cursor-pointer hover:text-blue-400 transition-colors duration-300 ease-out"><Link to="/terms-of-service">{title}</Link></span>
            </nav>
        </div>
    );
};

export default PageHeader;
