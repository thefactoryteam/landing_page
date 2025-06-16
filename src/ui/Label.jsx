const Label = ({ children, htmlFor, className = "", ...props }) => {
    const baseStyles = "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
  
    return (
      <label htmlFor={htmlFor} className={`${baseStyles} ${className}`} {...props}>
        {children}
      </label>
    )
  }
  
  export default Label
  