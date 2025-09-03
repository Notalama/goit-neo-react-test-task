const Button = ({
  children,
  variant = "primary",
  size = "md",
  onClick,
  type = "button",
  className = "",
  ...props
}) => {
  // Base button styles
  const baseClasses = "inline-flex items-center justify-center gap-2 font-primary font-normal rounded-full cursor-pointer transition-all duration-200 ease-in-out border-0 min-w-[166px] hover:-translate-y-px active:translate-y-0";
  
  // Variant styles
  const variantClasses = {
    primary: "bg-primary-500 text-white hover:bg-primary-600",
    secondary: "bg-transparent border border-neutral-300 text-text-primary hover:border-primary-500"
  };
  
  // Size styles
  const sizeClasses = {
    sm: "py-2 px-4 text-sm",
    md: "py-4 px-6 text-base",
    lg: "py-6 px-8 text-lg"
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      onClick={onClick}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
