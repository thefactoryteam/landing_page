import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import FormInput from './FormInput';

export default function SignUp({ isOpen, setIsOpen }) { // FIX: Receive state from Header
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
                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse">
                            <button
                                type="button"
                                onClick={() => setIsOpen(false)}
                                className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white hover:bg-red-500 sm:w-auto"
                            >
                                Close
                            </button>
                        </div>
                    </DialogPanel>
                </div>
            </div >
        </Dialog >
    );
}
