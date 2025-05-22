import { FaMapMarkerAlt, FaUsers } from 'react-icons/fa';
// import FeatureCard from './FeatureCard';
import img1 from '../../assets/coworking/tinapaimage.png';
import img2 from '../../assets/coworking/festus.png';
import img3 from '../../assets/coworking/people.png';
import locationIcon from '../../assets/coworking/locationvector.png'
import networkIcon from '../../assets/coworking/networkvector.png'
import flexibilityIcon from '../../assets/coworking/flexibiliyIcon.png'
import SectionHeaders from '../shared/SectionHeaders';
import { FadeInUp } from '../../utils/animations';


const FeatureCard = ({ icon, title, text, image, descHeight="h-72" }) => {
    return (
        <div className=" ">
            <div className={`p-10 ${descHeight} flex flex-col gap-4 border border-dashed border-[#231F20] border-b-0 rounded-t-xl`}>
                {/* Icon */}
                <div className="w-5 md:w-8 h-5 md:h-8">
                    <img src={icon} alt="" />
                </div>

                {/* Title + Description */}
                <div className='max-w-xs'>
                    <h3 className="text-black font-extrabold text-xl md:text-2xl leading-tight">{title}</h3>
                    <p className="text-gray-600 text-[17px] md:text-xl mt-2 leading-relaxed">{text}</p>
                </div>
            </div>

            {/* Image */}
            <div className="md:h-[363px] w-full border border-dashed border-[#231F20] border-t-0 rounded-b-xl">
                <img
                    src={image}
                    alt={title}
                    className="h-full w-full rounded-b-xl object-cover "
                />
            </div>
        </div>
    );
};


const WhyChooseUs = () => {
    return (
        <section className="p-8 md:p-16 primary-font">
            <div className='max-w-5xl mx-auto'>

                <div className='text-center mb-12'>
                    <SectionHeaders
                        title="Why Choose Us?"
                        desc=""
                        fadeInUp={FadeInUp}
                    />
                </div>

                <div className='flex flex-col md:flex-row gap-10 mb-20'>
                    <FeatureCard
                        icon={locationIcon}
                        title="Prime Location"
                        text="Strategically located in Tinapa Free Trade Zone, Calabar, Cross River State."
                        image={img1}
                    />
                    <FeatureCard
                        icon={networkIcon}
                        title="Networking Opportunities"
                        text="Be Part Of A Vibrant Community Of Tech Enthusiasts, Startups, And Established Businesses."
                        image={img2}
                    />
                </div>

                <FeatureCard
                        icon={flexibilityIcon}
                        title="Flexibility & Scalability"
                        text="Packages designed to grow with your needs."
                        image={img3}
                        descHeight="h-60"
                    />


            </div>

        </section>
    );
};

export default WhyChooseUs;
