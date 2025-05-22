import { useState, useEffect } from "react";
import SidebarNav from "./SidebarNav";
import TermSection from "./TermSection";
import { motion } from "framer-motion";


const sections = [
    {
        id: "use",
        title: "Use of Our Service",
        term: "You agree to use our Service only for lawful purposes and in accordance with these Terms. You must not use the Service in any way that could harm, disable, overburden, or impair it or interfere with any other party's use. Eligibility - You must be at least 13 years old to use our service. By using the Service, you represent and warrant that you meet this requirement."
    },

    {
        id: "accounts",
        title: "User Accounts",
        term: "To access certain features of the Service, you may be required to create an account. You agree to provide accurate, current, and complete information and to keep this information up to date. You are responsible for maintaining the confidentiality of your account and password and for all activities that occur under your account."
    },
    {
        id: "ownership",
        title: "Content Ownership",
        term: "You retain ownership of any content you submit, post, or display on or through the Service (\"User Content\"). By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and display it for the purpose of operating and improving the Service. You agree not to upload or share content that is illegal, offensive, or violates any third party’s rights."
    },
    {
        id: "ip",
        title: "Intellectual Property",
        term: "The Service and its original content, features, and functionality are and will remain the exclusive property of The Factory and its licensors. The Service is protected by copyright, trademark, and other laws of both the country in which it operates and foreign countries."
    },
    {
        id: "termination",
        title: "Termination",
        term: "We reserve the right to suspend or terminate your account and access to the Service at our sole discretion, without notice or liability, for any reason including violation of these Terms."
    },
    {
        id: "liability",
        title: "Limitation of Liability",
        term: "To the maximum extent permitted by law, The Factory and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your access to or use of the Service."
    },
    {
        id: "disclaimer",
        title: "Disclaimer",
        term: "Your use of the Service is at your sole risk. The Service is provided \"AS IS\" and \"AS AVAILABLE\" without warranties of any kind, either express or implied."
    },
    {
        id: "law",
        title: "Governing Law",
        term: "These terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria."
    },
    {
        id: "changes",
        title: "Changes to Terms",
        term: "We reserve the right to modify these Terms at any time. We will provide notice of any significant changes by posting the updated Terms on the website. Your continued use of the Service after changes are posted constitutes your acceptance of the new Terms."
    },
    {
        id: "contact",
        title: "Contact Us",
        term: "If you have any questions about these terms, please contact us at:  info@techfactory.xyz"
    }
]


export default function TermsLayout() {
    const [active, setActive] = useState("use");

    const handleScroll = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
            setActive(id);
        }
    };

    useEffect(() => {
        const handleScrollSpy = () => {
            for (const section of sections) {
                const el = document.getElementById(section.id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActive(section.id);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScrollSpy);
        return () => window.removeEventListener("scroll", handleScrollSpy);
    }, []);

    return (
        <section className="w-ful py-20 px-4 md:px-8 lg:px-16 primary-font">
            <div className="max-w-7xl mx-auto">
                <div className="flex px-4 py-12 relative">
                    <SidebarNav sections={sections} active={active} onSelect={handleScroll} />

                    <div className="space-y-14 flex-1 ml-0 md:ml-[5rem]">
                        <motion.h1
                            className="text-6xl font-bold mb-6 text-[#231F20]"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            Terms of Service
                        </motion.h1>

                        <p className="text-gray-700 text-xl leading-relaxed">These Terms of Service (“Terms”) constitute a legal agreement between you (“User”, “you”) and The Factory Incubator Ltd, a company incorporated under the laws of the Federal Republic of Nigeria (“Company”, “we”, “us”, or “our”), governing your access to and use of our website and associated services.</p>

                        <p className="text-gray-700 text-xl leading-relaxed"><b>PLEASE READ THESE TERMS CAREFULLY</b>  before using the website. By accessing or using any part of the site, you agree to be bound by these Terms.</p>

                        {sections.map(({ id, title, term }, i) => (
                            <motion.div
                                key={id}
                                id={id}
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: i * 0.05,
                                    ease: [0.2, 0.8, 0.2, 1],
                                }}
                                viewport={{ once: true, amount: 0.2 }}
                            >
                                <TermSection number={i + 1} title={title} term={term} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

        </section>

    );
}
