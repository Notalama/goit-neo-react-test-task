import Icon from "../Icon/Icon";

const Tag = ({ children, icon, className = "", ...props }) => {
  const baseClasses =
    "inline-flex items-center gap-2 px-[18px] py-3 bg-neutral-50 text-gray-900 rounded-full text-base font-normal leading-6 capitalize mix-blend-multiply";
  const combinedClassName = [baseClasses, className].filter(Boolean).join(" ");

  return (
    <span className={combinedClassName} {...props}>
      {icon && <Icon name={icon} />}
      {children}
    </span>
  );
};

export default Tag;
