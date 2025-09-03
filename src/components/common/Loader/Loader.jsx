import { ClipLoader } from "react-spinners";

const Loader = ({
  size = 40,
  color = "var(--color-button)",
  loading = true,
  text = "",
  className = "",
}) => {
  if (!loading) return null;

  return (
    <div className={`flex flex-col gap-4 justify-center items-center p-6 ${className}`}>
      <ClipLoader
        loading={loading}
        size={size}
        color={color}
        aria-label="Loading"
        data-testid="loader"
      />
      {text && <p className="m-0 text-base text-center text-gray-600">{text}</p>}
    </div>
  );
};

export default Loader;
