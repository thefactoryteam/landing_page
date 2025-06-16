"use client"

const Input = ({ type = "text", placeholder, value, onChange, disabled = false, className = "", id, ...props }) => {
  const baseStyles =
    "flex h-1h2 w-full rounded-md border border-[#231F20] bg-[#F4F4F4] px-4 py-5 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none  focus-visible:ring-gray-400  disabled:cursor-not-allowed disabled:opacity-50"

  return (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={`${baseStyles} ${className}`}
      {...props}
    />
  )
}

export default Input
