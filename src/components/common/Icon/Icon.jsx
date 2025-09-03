const Icon = ({
  name,
  variant = "default",
  size = "md",
  color,
  className = "",
  ...props
}) => {
  const spriteSymbolId = (() => {
    const isFilled = variant === "filled";
    if (name === "star") {
      return `icon-star-${isFilled ? "pressed" : "default"}`;
    }
    if (name === "heart" || name === "fav") {
      return `icon-fav-${isFilled ? "pressed" : "default"}`;
    }
    return `icon-${name}`;
  })();

  const sizeToClasses = {
    sm: "w-4 h-4", // 16px
    md: "w-5 h-5", // 20px
    lg: "w-6 h-6", // 24px
    xl: "w-8 h-8", // 32px
  };

  const baseClasses = "inline-block fill-current shrink-0";
  const sizeClasses = sizeToClasses[size] ?? sizeToClasses.md;
  const combinedClassName = [baseClasses, sizeClasses, className]
    .filter(Boolean)
    .join(" ");

  const ariaHidden = props["aria-label"] ? undefined : true;

  return (
    <svg
      className={combinedClassName}
      style={color ? { color } : {}}
      role="img"
      aria-hidden={ariaHidden}
      focusable="false"
      {...props}
    >
      <use href={`/icons.svg#${spriteSymbolId}`} />
    </svg>
  );
};

export default Icon;
