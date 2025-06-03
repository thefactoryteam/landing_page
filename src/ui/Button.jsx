
const Button = ({
  children,
  onClick,
  type = "button",
  variant = "default",
  disabled = false,
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md cursor-pointer text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"

  const variants = {
    default: "bg-black text-white hover:bg-gray-800",
    outline: "border border-gray-300 bg-white hover:bg-gray-50 text-gray-900",
  }

  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
  }

  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes.default} ${className}`

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={buttonClasses} {...props}>
      {children}
    </button>
  )
}

export default Button
