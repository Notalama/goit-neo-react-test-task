import Icon from "../Icon/Icon";

const Favourite = ({
  isActive = false,
  onClick,
  size = "md",
  className = "",
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center bg-transparent border-0 text-gray-900 cursor-pointer transition-colors duration-200 ease-linear";
  const activeClasses = isActive ? "text-blue-500" : "";
  const combinedClassName = [baseClasses, activeClasses, className]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      className={combinedClassName}
      onClick={onClick}
      type="button"
      aria-pressed={isActive}
      aria-label={isActive ? "Remove from favorites" : "Add to favorites"}
      {...props}
    >
      <Icon
        name="heart"
        variant={isActive ? "filled" : "default"}
        size={size}
      />
    </button>
  );
};

export default Favourite;
