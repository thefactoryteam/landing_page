import { DialogPanel, DialogTitle } from '@headlessui/react';
import { FaGoogle, FaSpinner } from "react-icons/fa6";
import FormInput from './FormInput';
import { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';


const VITE_API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api/v1";


export default function Newsletter({ closeModal }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !email) {
            toast.error('Both fields are required.');
            return;
        }

        if (!validateEmail(email)) {
            toast.error('Please enter a valid email address.');
            return;
        }

        try {
            setIsSubmitting(true); // Disable the button during submission
            const response = await axios.post(`${VITE_API_URL}/simple-newsletter`, { name, email });

            // Handle success response from backend
            if (response.data.success) {
                toast.success(response.data.message || 'Thank you for subscribing!');
                setName('');
                setEmail('');
                closeModal && closeModal(); // Close modal if the function is provided
            } else {
                // Handle error response from backend
                toast.error(response.data.message || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            // Handle network or server errors
            console.error('Error submitting the form:', error);
            toast.error(error.response?.data?.message || 'Failed to subscribe. Please try again later.');
        } finally {
            setIsSubmitting(false); // Re-enable the button
        }
    };

    return (
        <div className="flex justify-center px-4 sm:px-0">
            <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-full max-w-2xl p-6 sm:p-10">
                <div className="bg-white">
                    <DialogTitle className="text-3xl sm:text-4xl text-center font-semibold text-gray-900">
                        <span className="text-[#9A9A9A]">Building something that matters?</span>{' '}
                        <span className="italic meriwether-font leading-3">THE FACTORY </span> is where founders plug into real momentum.
                    </DialogTitle>
                    <p className="text-center text-gray-500 text-sm mt-2">
                        Get insider insights, market-tested tactics, and community support without the noise.
                    </p>

                    <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                        <FormInput
                            name="name"
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <FormInput
                            name="email"
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <div className="mt-6 text-center">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full sm:w-auto justify-center inline-flex items-center cursor-pointer gap-2 rounded-full px-8 py-2 text-lg font-semibold text-white ${isSubmitting ? 'bg-gray-500 cursor-not-allowed' : 'bg-[#231F20] hover:bg-gray-900'
                                    }`}
                            >
                                {isSubmitting ? (
                                    <>
                                        <FaSpinner className="animate-spin h-5 w-5" />
                                        <span className="italic">Submitting...</span>
                                    </>
                                ) : (
                                    'Join the Factory'
                                )}
                            </button>
                        </div>

                    </form>
                </div>
            </DialogPanel>

        </div>
    );
}