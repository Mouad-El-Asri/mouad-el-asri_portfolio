import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import TermsOfService from "@/pages/TermsOfService";
import NotFound from "@/pages/NotFound";
import PrivacyPolicy from "@/pages/PrivacyPolicy";

const AppRoutes: React.FC = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </>
    );
};

export default AppRoutes;
