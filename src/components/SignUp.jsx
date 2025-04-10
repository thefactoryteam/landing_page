import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { FaGoogle } from "react-icons/fa6";
import FormInput from './FormInput';

export default function SignUp({ isOpen, setIsOpen }) {
    return (
        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-10">
            <DialogBackdrop className="fixed inset-0 bg-gray-500/75 transition-opacity" />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:w-full sm:max-w-2/4 p-10">
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <DialogTitle className="text-5xl text-center font-semibold text-gray-900">
                                <span className='text-[#9A9A9A]'>Do you want to be a part of</span> <span className='italic meriwether-font leading-3'>the factory.</span>  Sign up now
                            </DialogTitle>
                            
                            <p className='text-center my-3 text-gray-900 meriwether-font'>
                                Already have an account?{' '}
                                <button className="text-[#2BE028] hover:text-green-400 cursor-pointer">
                                    Log in
                                </button>
                            </p>

                            <p className="mt-15 text-sm text-gray-500">
                                <form action="">
                                    <FormInput
                                        name="fullName"
                                        type="text"
                                        placeholder="Full Name"
                                    />

                                    <FormInput
                                        name="email"
                                        type="email"
                                        placeholder="Email Address"
                                    />

                                    <FormInput
                                        name="password"
                                        type="password"
                                        placeholder="Password"
                                    />

                                    <FormInput
                                        name="c_password"
                                        type="password"
                                        placeholder="Confirm Password"
                                    />



                                </form>
                            </p>
                        </div>
                        <div>
                            <div className="px-4 py-3 flex flex-col md:flex-row md:justify-between">
                                <button
                                    type="button"
                                    onClick={() => setIsOpen(false)}
                                    className="inline-flex w-full cursor-pointer justify-center rounded-full items-center gap-1 bg-[#231F20] px-16 py-2 text-lg font-semibold text-white hover:bg-gray-900 sm:w-auto"
                                >
                                    Sign Up to the Factory
                                </button>

                                <button
                                    type="button"
                                    onClick={() => setIsOpen(false)}
                                    className="inline-flex w-full cursor-pointer justify-center items-center rounded-full gap-1 bg-[#231F20] px-16 py-2 text-lg font-semibold text-white hover:bg-gray-900 sm:w-auto"
                                >
                                    <FaGoogle className='h-3 w-3' /> Continue with Google
                                </button>
                            </div>

                            <p className='text-[#9A9A9A] text-sm mx-10'>By Clicking on either one of these buttons, you have read and understood and agreed to the Terms & Conditions of the factory.</p>
                        </div>


                    </DialogPanel>
                </div>
            </div >
        </Dialog >
    );
}
