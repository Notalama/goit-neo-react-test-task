import Icon from "../../common/Icon/Icon";

const ToggleButton = ({
  children,
  isSelected = false,
  onClick,
  icon,
  className = "",
  ariaLabel,
  ...props
}) => {
  const baseClasses =
    "flex flex-row justify-center items-center px-6 py-4 gap-2 min-w-[112px] w-[112px] h-24 border border-neutral-300 rounded-md bg-white text-gray-900 text-base font-normal cursor-pointer transition-all duration-200 ease-linear text-center hover:border-primary-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2";
  const selectedClasses = isSelected ? "border-primary-500 text-primary" : "";
  const combinedClassName = [baseClasses, selectedClasses, className]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      className={combinedClassName}
      onClick={onClick}
      type="button"
      aria-pressed={isSelected}
      aria-label={ariaLabel}
      {...props}
    >
      <div className="flex flex-col gap-2 justify-center items-center w-full h-full">
        {icon && <Icon name={icon} size="lg" />}
        <span className="text-base font-normal text-center">{children}</span>
      </div>
    </button>
  );
};

export default ToggleButton;
