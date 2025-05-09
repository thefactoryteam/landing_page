const WhyCard = ({ number, title, para, customClass="" }) => {
    return (
        <div className={`relative ${customClass}`}>
            {/* Main card with gradient background */}
            <div className="flex flex-col md:flex-row md:items-center gapg-8 justify-center rounded-t-4xl border border-dashed border-b-0 bg-gradient-to-b from-[#3A3A3A87] to-[#0E0E0E] md:py-16 px-8 md:px-18">
                <div className="text-[90px] md:text-[120px] font-light text-white opacity-90">{number}</div>
                <div className="">
                    <h3 className="text-[17px] md:text-xl font-bold md:mb-2">{title}</h3>
                    <p className="text-[17px] md:text-xl">{para}</p>
                </div>
            </div>
            
            {/* Fading bottom effect */}
            <div className="h-16 bg-gradient-to-b from-[#0E0E0E] to-transparent rounded-b-4xl"></div>
        </div>
    );
};

const WhyJuxBox = () => {
    return (
        <section className="bg-black text-white p-8 md:p-16 primary-font">
            <div className="max-w-6xl mx-auto md:mt-24">
                {/* Header Section */}
                <div className="mb-16 flex flex-col md:flex-row justify-between">
                    <h2 className="text-4xl md:text-6xl font-bold mb-4 leading-14 md:leading-20">
                        Why <br /> <span className="text-[#71BF44]">JukeBox?</span>
                    </h2>
                    <p className="max-w-xl text-[17px] md:text-xl leading-8">
                        JukeBox goes beyond funding—offering a founder-first approach with hands-on mentorship, strategic industry
                        partnerships, and tailored support to scale your startup. We focus not just on funding but on building
                        sustainable, scalable businesses through:
                    </p>
                </div>

                {/* Grid Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 relative">
                    {/* Box 1 */}
                    <WhyCard 
                        number="1"
                        title="Exclusive Corporate Partnerships:"
                        para="Direct access to industry leaders and growth opportunities."
                    />
                    {/* Box 2 */}
                    <WhyCard 
                        number="2"
                        title="Market-Driven Validation:"
                        para="Fine-tune your product with real-time market feedback."
                    />
                    {/* Box 3 */}
                    <WhyCard 
                        number="3"
                        title="Holistic Growth Support:"
                        para="End-to-end guidance from product development to investor relations."
                        customClass="absolute md:bottom-20"
                    />
                    {/* Box 4 */}
                    <WhyCard 
                        number="4"
                        title="Demo Day:"
                        para="Pitch to top investors and industry stakeholders for funding and partnerships."
                        customClass="absolute md:bottom-20"
                    />
                </div>

                {/* Footer CTA */}
                <div className="md:text-center">
                    <h3 className="text-xl md:text-2xl font-bold">Join JukeBox and gain the tools, connections, and support to succeed.</h3>
                </div>
            </div>
        </section>
    );
};

export default WhyJuxBox;
