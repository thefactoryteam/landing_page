
import { DialogPanel, DialogTitle } from '@headlessui/react'
import { FaGoogle } from "react-icons/fa6"
import FormInput from './FormInput'

export default function SignUp({ toggleForm, closeModal }) {
  return (
    <div className="flex justify-center px-4 sm:px-0">
      <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-full max-w-2xl p-6 sm:p-10">
        <div className="bg-white">
          <DialogTitle className="text-3xl sm:text-4xl text-center font-semibold text-gray-900">
            <span className="text-[#9A9A9A]">Do you want to be a part of</span>{" "}
            <span className="italic meriwether-font leading-3">the factory.</span> Sign up now
          </DialogTitle>

          <p className="text-center mt-4 text-sm text-gray-600">
            Already have an account?{" "}
            <button onClick={toggleForm} className="text-[#2BE028] hover:underline">
              Log in
            </button>
          </p>

          <form className="mt-6 space-y-4">
            <FormInput name="fullName" type="text" placeholder="Full Name" />
            <FormInput name="email" type="email" placeholder="Email Address" />
            <FormInput name="password" type="password" placeholder="Password" />
            <FormInput name="c_password" type="password" placeholder="Confirm Password" />
          </form>
        </div>

        <div className="mt-6 space-y-4 sm:space-y-0 sm:flex sm:justify-between sm:gap-4">
          <button
            type="button"
            onClick={closeModal}
            className="w-full sm:w-auto justify-center inline-flex items-center gap-2 rounded-full bg-[#231F20] px-8 py-2 text-lg font-semibold text-white hover:bg-gray-900"
          >
            Sign Up to the Factory
          </button>

          <button
            type="button"
            onClick={closeModal}
            className="w-full sm:w-auto justify-center inline-flex items-center gap-2 rounded-full bg-[#231F20] px-8 py-2 text-lg font-semibold text-white hover:bg-gray-900"
          >
            <FaGoogle className="h-4 w-4" /> Continue with Google
          </button>
        </div>

        <p className="text-[#9A9A9A] text-sm text-center mt-6 px-4">
          By clicking either button, you agree to the Factory’s Terms & Conditions.
        </p>
      </DialogPanel>
    </div>
  )
}
