

// import { DialogPanel, DialogTitle } from '@headlessui/react'
// import { FaGoogle } from "react-icons/fa6"
// import FormInput from './FormInput'

// export default function Login({ toggleForm, closeModal }) {
//   return (
//     <div className='flex justify-center'>
//         <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:w-full sm:max-w-2/4 p-10">
//       <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
//         <DialogTitle className="text-4xl text-center font-semibold text-gray-900">
//           <span className='text-[#9A9A9A]'>Welcome back to</span>{" "}
//           <span className='italic meriwether-font leading-3'>the factory.</span>
//         </DialogTitle>

//         <p className="text-center mt-4 text-sm text-gray-600">
//           Don’t have an account?{" "}
//           <button onClick={toggleForm} className="text-[#2BE028] hover:underline">
//             Sign up
//           </button>
//         </p>

//         <form className="mt-6 space-y-4">
//           <FormInput name="email" type="email" placeholder="Email Address" />
//           <FormInput name="password" type="password" placeholder="Password" />
//         </form>
//       </div>

//       <div className="px-4 py-3 flex flex-col md:flex-row md:justify-between">
//         <button
//           type="button"
//           onClick={closeModal}
//           className="inline-flex w-full justify-center rounded-full items-center gap-1 bg-[#231F20] px-16 py-2 text-lg font-semibold text-white hover:bg-gray-900 sm:w-auto"
//         >
//           Log In to the Factory
//         </button>

//         <button
//           type="button"
//           onClick={closeModal}
//           className="inline-flex w-full justify-center items-center rounded-full gap-1 bg-[#231F20] px-16 py-2 text-lg font-semibold text-white hover:bg-gray-900 sm:w-auto"
//         >
//           <FaGoogle className='h-4 w-4' /> Continue with Google
//         </button>
//       </div>

//       <p className='text-[#9A9A9A] text-sm mx-10 mt-4 text-center'>
//         By clicking either button, you agree to the Factory’s Terms & Conditions.
//       </p>
//     </DialogPanel>
//     </div>
    
//   )
// }


import { DialogPanel, DialogTitle } from '@headlessui/react'
import { FaGoogle } from "react-icons/fa6"
import FormInput from './FormInput'

export default function Login({ toggleForm, closeModal }) {
  return (
    <div className="flex justify-center px-4 sm:px-0">
      <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-full max-w-2xl p-6 sm:p-10">
        <div className="bg-white">
          <DialogTitle className="text-3xl sm:text-4xl text-center font-semibold text-gray-900">
            <span className="text-[#9A9A9A]">Welcome back to</span>{" "}
            <span className="italic meriwether-font leading-3">the factory.</span>
          </DialogTitle>

          <p className="text-center mt-4 text-sm text-gray-600">
            Don’t have an account?{" "}
            <button onClick={toggleForm} className="text-[#2BE028] hover:underline">
              Sign up
            </button>
          </p>

          <form className="mt-6 space-y-4">
            <FormInput name="email" type="email" placeholder="Email Address" />
            <FormInput name="password" type="password" placeholder="Password" />
          </form>
        </div>

        <div className="mt-6 space-y-4 sm:space-y-0 sm:flex sm:justify-between sm:gap-4">
          <button
            type="button"
            onClick={closeModal}
            className="w-full sm:w-auto justify-center inline-flex items-center gap-2 rounded-full bg-[#231F20] px-8 py-2 text-lg font-semibold text-white hover:bg-gray-900"
          >
            Log In to the Factory
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
