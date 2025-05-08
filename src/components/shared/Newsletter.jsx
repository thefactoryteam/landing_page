
import { DialogPanel, DialogTitle } from '@headlessui/react'
import { FaGoogle } from "react-icons/fa6"
import FormInput from './FormInput'

export default function Newsletter({ closeModal }) {
    return (
        <div className="flex justify-center px-4 sm:px-0">
            <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-full max-w-2xl p-6 sm:p-10">
                <div className="bg-white">
                    <DialogTitle className="text-3xl sm:text-4xl text-center font-semibold text-gray-900">
                        <span className="text-[#9A9A9A]">Building something that matters?</span>{" "}
                        <span className="italic meriwether-font leading-3">the factory</span> is where founders plug into real momentum.
                    </DialogTitle>
                    <p className="text-center text-gray-500 text-sm mt-2">
                        Get insider insights, market-tested tactics, and community support without the noise.
                    </p>

                    <form className="mt-6 space-y-4">
                        <FormInput name="name" type="text" placeholder="Name" />
                        <FormInput name="email" type="email" placeholder="Email Address" />

                        <div className="mt-6 space-y-4 sm:space-y-0 sm:flex sm:justify-end sm:gap-4">
                            <button
                                type="button"
                                onClick={closeModal}
                                className="w-full sm:w-auto justify-center inline-flex items-center cursor-pointer gap-2 rounded-full bg-[#231F20] px-8 py-2 text-lg font-semibold text-white hover:bg-gray-900"
                            >
                                Subscribe
                            </button>

                        </div>
                    </form>
                </div>
            </DialogPanel>
        </div>
    )
}
