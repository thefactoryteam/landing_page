"use client"

const Textarea = ({ placeholder, value, onChange, disabled = false, className = "", id, rows = 4, ...props }) => {
  const baseStyles =
    "flex min-h-[80px] w-full rounded-md border border-[#231F20] bg-[#F4F4F4] px-4 py-5 text-sm ring-offset-white placeholder:text-gray-500 focus-visible:outline-none  focus-visible:ring-gray-400  disabled:cursor-not-allowed disabled:opacity-50"

  return (
    <textarea
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      rows={rows}
      className={`${baseStyles} ${className}`}
      {...props}
    />
  )
}

export default Textarea
