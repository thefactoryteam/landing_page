// import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
// import Grid from '../../assets/Grid.png'
// import FormInput from '../shared/FormInput';

// const ContactDetail = () => {
//     return (
//         <section className="relative px-4 py-16 bg-white overflow-hidden primary-font" style={{ backgroundImage: `url(${Grid})` }}>
           

//             {/* Container */}
//             <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 items-start mt-14">
//                 {/* Left Content */}
//                 <div className='col-span-1'>
//                     <h2 className="text-5xl font-bold text-[#231F20] mb-4 leading-tight">
//                         We're Here to Support Your Next Step
//                     </h2>
//                     <p className="text-[#231F20] text-lg mb-6 leading-relaxed">
//                         Whether you're looking to explore a strategic partnership, register for the Innovation Expo, or reserve a booth, our team at The Factory is ready to assist you. Please reach out with any questions or requirements—we're committed to providing clear, timely, and professional support for all your inquiries.
//                     </p>

//                     <div className="space-y-3 text-gray-700 text-sm">
//                         <div className="flex items-center gap-3">
//                             <FaEnvelope className="text-green-500" />
//                             <span><strong>Email:</strong> info@thefactory.ng</span>
//                         </div>
//                         <div className="flex items-center gap-3">
//                             <FaPhone className="text-green-500" />
//                             <span><strong>Phone:</strong> +2349129203772</span>
//                         </div>
//                         <div className="flex items-center gap-3">
//                             <FaMapMarkerAlt className="text-green-500" />
//                             <span>
//                                 <strong>Address:</strong> The Factory Phase, Lakeside Hotel, Tinapa Business Resort, Calabar
//                             </span>
//                         </div>
//                         <div className="flex items-center gap-3">
//                             <FaClock className="text-green-500" />
//                             <span><strong>Work Hours:</strong> Monday – Friday, 9AM – 5PM</span>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Right Form */}
//                 <form className="col-span-1 md:col-span-2 p-6 space-y-8 w-full">
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         <FormInput 
//                             name="firstName"
//                             type="text"
//                             placeholder="First Name"
//                             // value
//                             // onChange
//                             dottedBorder={true}
//                         />
//                         <FormInput 
//                             name="lastName"
//                             type="text"
//                             placeholder="Last Name"
//                             // value
//                             // onChange
//                             dottedBorder={true}
//                         />
//                     </div>
//                     <FormInput 
//                             name="company"
//                             type="text"
//                             placeholder="Company"
//                             // value
//                             // onChange
//                             dottedBorder={true}
//                         />
//                     <FormInput 
//                             name="email"
//                             type="email"
//                             placeholder="E-mail"
//                             // value
//                             // onChange
//                             dottedBorder={true}
//                         />
//                     <textarea
//                         placeholder="Tell Us About You"
//                         rows={4}
//                         className="border border-[#231F20] rounded-lg border-dashed px-4 py-5 w-full transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-white focus:border-green-500 bg-[#FBFBFB]"

//                     ></textarea>
//                     <button
//                         type="submit"
//                         className="w-full bg-black text-white py-4 cursor-pointer rounded-full hover:bg-gray-800 transition"
//                     >
//                         Contact Us Now
//                     </button>
//                 </form>
//             </div>


//         </section>
//     );
// };

// export default ContactDetail;


import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { FaSpinner } from "react-icons/fa6";
import { toast } from 'react-toastify';
import Grid from '../../assets/Grid.png';
import FormInput from '../shared/FormInput';
import ContactService from '../../services/contactService';

const ContactDetail = () => {
    // State for form values
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        company: '',
        email: '',
        message: ''
    });

    // State for loading status
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    // State for form errors
    const [errors, setErrors] = useState({});

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        
        // Clear error when user starts typing in a field
        if (errors[name]) { 
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
        
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    // Validate form
    const validateForm = () => {
        const newErrors = {};
        
        // Required fields
        if (!formData.firstname.trim()) newErrors.firstname = 'First name is required';
        if (!formData.lastname.trim()) newErrors.lastname = 'Last name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        
        // Email validation
        if (formData.email && !isValidEmail(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }
        
        // Message length validation
        if (formData.message && formData.message.length < 5) {
            newErrors.message = 'Message must be at least 5 characters long';
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        // Validate form
        if (!validateForm()) {
            // Show first error message
            const firstError = Object.values(errors)[0];
            if (firstError) toast.error(firstError);
            return;
        }

        try {
            setIsSubmitting(true);

            // Format the data according to what our API expects
            const contactData = {
                firstname: formData.firstname.trim(),
                lastname: formData.lastname.trim(),
                company: formData.company.trim(),
                email: formData.email.trim(),
                message: formData.message.trim()
            };

            
            

            // Use our service to submit the form
            const response = await ContactService.submitContactForm(contactData); 
            

            // Success handling
            toast.success(response.message || 'Your message has been sent successfully!');
            
            // Reset form
            setFormData({
                firstname: '',
                lastname: '',
                company: '',
                email: '',
                message: ''
            });

        } catch (error) {
            // Format and display validation errors if available
            if (error.errors && Array.isArray(error.errors) && error.errors.length > 0) {
                error.errors.forEach(err => {
                    toast.error(err.msg || err.message || 'Validation error');
                });
            } else {
                // General error message
                toast.error(error.message || 'Failed to send message. Please try again later.');
            }
            
            console.error('Error submitting contact form:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    // Simple email validation helper
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <section className="relative px-4 py-16 bg-white overflow-hidden primary-font" style={{ backgroundImage: `url(${Grid})` }}>
            {/* Container */}
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 items-start mt-14">
                {/* Left Content */}
                <div className='col-span-1'>
                    <h2 className="text-5xl font-bold text-[#231F20] mb-4 leading-tight">
                        We're Here to Support Your Next Step
                    </h2>
                    <p className="text-[#231F20] text-lg mb-6 leading-relaxed">
                        Whether you're looking to explore a strategic partnership, register for the Innovation Expo, or reserve a booth, our team at The Factory is ready to assist you. Please reach out with any questions or requirements—we're committed to providing clear, timely, and professional support for all your inquiries.
                    </p>

                    <div className="space-y-3 text-gray-700 text-sm">
                        <div className="flex items-center gap-3">
                            <FaEnvelope className="text-green-500" />
                            <span><strong>Email:</strong> info@techfactory.xyz</span>
                        </div>
                        {/* <div className="flex items-center gap-3">
                            <FaPhone className="text-green-500" />
                            <span><strong>Phone:</strong> +2349129203772</span>
                        </div> */}
                        <div className="flex items-center gap-3">
                            <FaMapMarkerAlt className="text-green-500" />
                            <span>
                                <strong>Address:</strong> The Factory Phase, Lakeside Hotel, Tinapa Business Resort, Calabar
                            </span>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaClock className="text-green-500" />
                            <span><strong>Work Hours:</strong> Monday – Friday, 9AM – 5PM</span>
                        </div>
                    </div>
                </div>

                {/* Right Form */}
                <form 
                    className="col-span-1 md:col-span-2 p-6 space-y-8 w-full"
                    onSubmit={handleSubmit}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <FormInput 
                                name="firstname"
                                type="text"
                                placeholder="First Name"
                                value={formData.firstname}
                                onChange={handleChange}
                                dottedBorder={true}
                                
                            />
                            {errors.firstname && (
                                <p className="text-red-500 text-sm mt-1">{errors.firstname}</p>
                            )}
                        </div>
                        
                        <div>
                            <FormInput 
                                name="lastname"
                                type="text"
                                placeholder="Last Name"
                                value={formData.lastname}
                                onChange={handleChange}
                                dottedBorder={true}
                                
                            />
                            {errors.lastname && (
                                <p className="text-red-500 text-sm mt-1">{errors.lastname}</p>
                            )}
                        </div>
                    </div>
                    
                    <FormInput 
                        name="company"
                        type="text"
                        placeholder="Company"
                        value={formData.company}
                        onChange={handleChange}
                        dottedBorder={true}
                        required={false}
                    />
                    
                    <div>
                        <FormInput 
                            name="email"
                            type="email"
                            placeholder="E-mail"
                            value={formData.email}
                            onChange={handleChange}
                            dottedBorder={true}
                            
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                        )}
                    </div>
                    
                    <div>
                        <textarea
                            name="message"
                            placeholder="Drop a message"
                            rows={4}
                            value={formData.message}
                            onChange={handleChange}
                            className={`
                                border ${errors.message ? 'border-red-500' : 'border-[#231F20]'} 
                                rounded-lg border-dashed px-4 py-5 w-full 
                                transition duration-150 ease-in-out focus:outline-none 
                                focus:ring-2 focus:ring-green-500 focus:ring-offset-2 
                                focus:ring-offset-white focus:border-green-500 bg-[#FBFBFB]
                            `}
                            required
                        ></textarea>
                        {errors.message && (
                            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                        )}
                    </div>
                    
                    <button
                        type="submit"
                        className={`
                            w-full py-4 cursor-pointer rounded-full 
                            transition duration-300 ease-in-out
                            ${isSubmitting 
                                ? 'bg-gray-500 text-white' 
                                : 'bg-black text-white hover:bg-gray-800'
                            }
                        `}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
    <div className="flex items-center justify-center gap-2">
        <FaSpinner className="animate-spin h-5 w-5" />
        <span className="italic">Sending...</span>
    </div>
) : 'Contact Us Now'}

                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactDetail;