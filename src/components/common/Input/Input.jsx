 

const Input = ({
  type = "text",
  placeholder,
  value,
  onChange,
  multiline = false,
  rows = 4,
  className = "",
  ...props
}) => {
  const Component = multiline ? "textarea" : "input";

  return (
    <Component
      className={`w-full p-4 bg-[var(--color-neutral-100)] rounded-2xl text-base text-[var(--color-text-primary)] transition-colors placeholder-[var(--color-neutral-600)] outline-none focus:outline-none ${
        multiline ? "resize-y min-h-[100px]" : ""
      } ${className}`}
      type={multiline ? undefined : type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      rows={multiline ? rows : undefined}
      {...props}
    />
  );
};

export default Input;
