import React from 'react'
import FormInput from '../shared/FormInput'
import { FaSpinner } from "react-icons/fa6";

const BookForm = () => {
    const isSubmitting = false
    return (
        <section className='my-10 pb-28'>
            <div className='max-w-5xl mx-auto'>
                <form className='col-span-1 md:col-span-2 p-6 space-y-8 w-full'>
                    <FormInput
                        name="firstname"
                        type="text"
                        placeholder="Registeration Type"
                        // value={formData.firstname}
                        // onChange={handleChange}
                        dottedBorder={true}

                    />
                    <FormInput
                        name="firstname"
                        type="text"
                        placeholder="Full Name"
                        // value={formData.firstname}
                        // onChange={handleChange}
                        dottedBorder={true}

                    />

                    <FormInput
                        name="firstname"
                        type="text"
                        placeholder="Occupation / Role"
                        // value={formData.firstname}
                        // onChange={handleChange}
                        dottedBorder={true}

                    />

                    <FormInput
                        name="firstname"
                        type="date"
                        placeholder="Date of Usage"
                        // value={formData.firstname}
                        // onChange={handleChange}
                        dottedBorder={true}

                    />

                    <textarea
                        name="message"
                        placeholder="Intent of Usage"
                        rows={4}
                        // value={formData.message}
                        // onChange={handleChange}
                        className={`
                                border border-[#231F20]} 
                                rounded-lg border-dashed px-4 py-5 w-full 
                                transition duration-150 ease-in-out focus:outline-none 
                                focus:ring-2 focus:ring-green-500 focus:ring-offset-2 
                                focus:ring-offset-white focus:border-green-500 bg-[#FBFBFB]
                            `}
                        required
                    ></textarea>

                    <textarea
                        name="message"
                        placeholder="What Facilities would you require from the co-working space?"
                        rows={4}
                        // value={formData.message}
                        // onChange={handleChange}
                        className={`
                                border border-[#231F20]} 
                                rounded-lg border-dashed px-4 py-5 w-full 
                                transition duration-150 ease-in-out focus:outline-none 
                                focus:ring-2 focus:ring-green-500 focus:ring-offset-2 
                                focus:ring-offset-white focus:border-green-500 bg-[#FBFBFB]
                            `}
                        required
                    ></textarea>

                    <FormInput
                        name="firstname"
                        type="text"
                        placeholder="Duration of  workspace Usage ( Working Hours Only 9 - 5pm )"
                        // value={formData.firstname}
                        // onChange={handleChange}
                        dottedBorder={true}

                    />

                    <FormInput
                        name="firstname"
                        type="text"
                        placeholder="Official Email"
                        // value={formData.firstname}
                        // onChange={handleChange}
                        dottedBorder={true}

                    />

                    <FormInput
                        name="firstname"
                        type="text"
                        placeholder="Phone Number"
                        // value={formData.firstname}
                        // onChange={handleChange}
                        dottedBorder={true}

                    />

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
    )
}

export default BookForm