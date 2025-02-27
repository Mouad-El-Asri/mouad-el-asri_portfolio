import PageHeader from "@/components/PageHeader";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
    return (
        <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-96">
            <PageHeader title={"Privacy Policy"} />
            <div className="py-8 sm:py-12 md:py-16">
                <div>
                    <div className="text-base sm:text-lg space-y-6 md:space-y-7 text-neutral text-justify">
                        <p className="text-sm sm:text-base text-neutral-light">
                            Last updated: December 25, 2024
                        </p>
                        <p>
                            This Privacy Policy describes how your personal
                            information is collected, used, and shared when you
                            visit{" "}
                            <Link
                                to="/"
                                className="text-secondary-light hover:text-blue-400 transition-colors duration-300"
                            >
                                https://mouadelasri.com
                            </Link>{" "}
                            (the “Website”).
                        </p>
                    </div>
                </div>
                <div className="pt-6 sm:pt-8 md:pt-10">
                    <h2 className="uppercase text-xl sm:text-2xl md:text-[1.75rem] lg:text-3xl mb-5">
                        Personal information we collect
                    </h2>
                    <div className="text-base sm:text-lg space-y-6 md:space-y-7 text-neutral text-justify">
                        <p>
                            When you visit the Website, we automatically collect
                            certain information about your device, including
                            your web browser, IP address, time zone, time spent
                            on the Website, and cookies installed on your
                            device. We also collect information about the
                            individual web pages you visit, the websites or
                            search terms that referred you to the Website, and
                            how you interact with the content.
                        </p>
                        <p>
                            We use “Cookies” which are data files placed on your
                            device or computer. These often include an anonymous
                            unique identifier. Cookies allow us to recognize
                            your device, improve your browsing experience, and
                            analyze Website performance.
                        </p>
                        <p>
                            If you contact us using the contact form, we may
                            collect personal details you voluntarily provide,
                            such as your first and last name, email address, and
                            the contents of your message. This information is
                            used solely to respond to your inquiries.
                        </p>
                    </div>
                </div>
                <div className="pt-10 sm:pt-12 md:pt-14">
                    <h2 className="uppercase text-xl sm:text-2xl md:text-[1.75rem] lg:text-3xl mb-5">
                        How do we use your information?
                    </h2>
                    <div className="text-base sm:text-lg space-y-6 md:space-y-7 text-neutral text-justify">
                        <p>
                            We use the information we collect to improve and
                            personalize your experience on the Website. This
                            includes analyzing website traffic, responding to
                            inquiries, and enhancing the content and
                            functionality. We may also use your information to
                            communicate with you about specific requests or
                            inquiries made through the Website’s contact form.
                        </p>
                    </div>
                </div>
                <div className="pt-10 sm:pt-12 md:pt-14">
                    <h2 className="uppercase text-xl sm:text-2xl md:text-[1.75rem] lg:text-3xl mb-5">
                        Security of Your Personal Data
                    </h2>
                    <div className="text-base sm:text-lg space-y-6 md:space-y-7 text-neutral text-justify">
                        <p>
                            To protect your personal information, we take
                            reasonable precautions and follow industry best
                            practices to make sure it is not inappropriately
                            lost, misused, accessed, disclosed, altered or
                            destroyed.
                        </p>
                        <p>
                            While we strive to use commercially acceptable means
                            to protect your personal data, please be aware that
                            no method of transmission over the Internet or
                            electronic storage is 100% secure. Therefore, we
                            cannot guarantee its absolute security.
                        </p>
                    </div>
                </div>
                <div className="pt-10 sm:pt-12 md:pt-14">
                    <h2 className="uppercase text-xl sm:text-2xl md:text-[1.75rem] lg:text-3xl mb-5">
                        Links to Other Websites
                    </h2>
                    <div className="text-base sm:text-lg space-y-6 md:space-y-7 text-neutral text-justify">
                        <p>
                            Our Service may contain links to other websites that
                            are not operated by Us. If You click on a third
                            party link, You will be directed to that third
                            party's site. We strongly advise You to review the
                            Privacy Policy of every site You visit.
                        </p>
                        <p>
                            We have no control over and assume no responsibility
                            for the content, privacy policies or practices of
                            any third party sites or services.
                        </p>
                    </div>
                </div>
                <div className="pt-10 sm:pt-12 md:pt-14">
                    <h2 className="uppercase text-xl sm:text-2xl md:text-[1.75rem] lg:text-3xl mb-5">
                        Changes to this Privacy Policy
                    </h2>
                    <div className="text-base sm:text-lg space-y-6 md:space-y-7 text-neutral text-justify">
                        <p>
                            We may update Our Privacy Policy from time to time.
                            We will notify You of any changes by posting the new
                            Privacy Policy on this page.
                        </p>
                        <p>
                            You are advised to review this Privacy Policy
                            periodically for any changes. Changes to this
                            Privacy Policy are effective when they are posted on
                            this page.
                        </p>
                    </div>
                </div>
                <div className="pt-10 sm:pt-12 md:pt-14">
                    <h2 className="uppercase text-xl sm:text-2xl md:text-[1.75rem] lg:text-3xl mb-5">
                        CONTACT US
                    </h2>
                    <div className="text-base sm:text-lg space-y-6 md:space-y-7 text-neutral text-justify">
                        <p>
                            If you have any questions about this Privacy Policy,
                            or if you would like to make a complaint, please
                            contact us via the{" "}
                            <Link
                                to="/contact"
                                className="font-medium text-secondary"
                            >
                                Contact Form.
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
