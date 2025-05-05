import { FaMapMarkerAlt, FaUsers } from 'react-icons/fa';
// import FeatureCard from './FeatureCard';
import img1 from '../../assets/coworking/tinapaimage.png';
import img2 from '../../assets/coworking/festus.png';
import locationIcon from '../../assets/coworking/locationvector.png'
import networkIcon from '../../assets/coworking/networkvector.png'
import SectionHeaders from '../shared/SectionHeaders';
import { FadeInUp } from '../../utils/animations';


const FeatureCard = ({ icon, title, text, image }) => {
    return (
        <div className=" ">
            <div className="p-6 flex flex-col gap-4 border border-dashed border-[#231F20] border-b-0 rounded-t-xl">
                {/* Icon */}
                <div className="w-8 h-8">
                    <img src={icon} alt="" />
                </div>

                {/* Title + Description */}
                <div>
                    <h3 className="text-black font-extrabold text-xl leading-tight">{title}</h3>
                    <p className="text-gray-600 text-sm mt-2 leading-relaxed">{text}</p>
                </div>
            </div>

            {/* Image */}
            <div className="h-[363px] w-full border border-dashed border-[#231F20] border-t-0 rounded-b-xl">
                <img
                    src={image}
                    alt={title}
                    className="h-full w-full rounded-b-xl object-cover "
                />
            </div>
        </div>
    );
};

// export default FeatureCard;


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

                <div className='flex gap-10'>
                <FeatureCard
                    icon={locationIcon}
                    title="Prime Location"
                    text="Strategically Located In Tinapa, Cross River State, Offering Free Trade Zone Advantages."
                    image={img1}
                />
                <FeatureCard
                    icon={networkIcon}
                    title="Networking Opportunities"
                    text="Be Part Of A Vibrant Community Of Tech Enthusiasts, Startups, And Established Businesses."
                    image={img2}
                />
                </div>

                
            </div>

        </section>
    );
};

export default WhyChooseUs;
