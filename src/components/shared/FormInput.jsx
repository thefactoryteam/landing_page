import React from 'react'

const FormInput = ({ name, type, placeholder, value, onChange, required=true, dottedBorder = false }) => {
    return (
        <>
            {dottedBorder ? (<input
                type={type}
                name={name}
                placeholder={placeholder}
                required={required}
                value={value}
                onChange={onChange}
                className="border border-[#231F20] rounded-lg border-dashed px-4 py-5 w-full transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-white focus:border-green-500 bg-[#FBFBFB]"

            />) : (<div className="mt-2">
                <div className="flex items-center rounded-full bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-[#2BE028]">
                    <input
                        id={name}
                        name={name}
                        type={type}
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                        required={required}
                        className="block min-w-0 grow py-3 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 "
                    />
                </div>
            </div>)}
        </>

    )
}

export default FormInput