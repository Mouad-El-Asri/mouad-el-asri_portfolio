import BackToTopButton from "@/components/BackToTopButton";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="flex flex-col justify-between w-full min-h-screen text-primary">
            <header>
                <Navbar />
            </header>
            <main>
                {children}
				<BackToTopButton />
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;
