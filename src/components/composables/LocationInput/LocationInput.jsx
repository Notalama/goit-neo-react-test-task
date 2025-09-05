import { useState } from "react";
import Icon from "../../common/Icon/Icon";

const LocationInput = ({
  value,
  onChange,
  placeholder = "City",
  className = "",
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e) => {
    if (onChange) {
      onChange(e);
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  // Check if input has a value
  const hasValue = value && value.trim() !== "";

  return (
    <div className={`relative w-full ${className}`}>
      <div className="relative flex items-center">
        <Icon
          name="map"
          size="sm"
          className={`pointer-events-none absolute left-4 transition-colors ${
            hasValue ? "text-gray-900" : "text-neutral-600"
          }`}
          aria-hidden="true"
        />
        <input
          type="text"
          value={value || ""}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          className={`w-full px-4 py-4 pl-10 rounded-md text-base text-gray-900 bg-neutral-100 placeholder-neutral-600 outline-none focus:ring-2 focus:ring-blue-500 ${
            isFocused ? "ring-2 ring-blue-500" : ""
          }`}
          {...props}
        />
      </div>
    </div>
  );
};

export default LocationInput;
