import Icon from "../../common/Icon/Icon";

const LocationInfo = ({ location, className = "" }) => {
  return (
    <div className={`inline-flex items-center gap-1 text-base text-gray-900 ${className}`}>
      <Icon name="map" size="sm" aria-label="Location" />
      <span>{location}</span>
    </div>
  );
};

export default LocationInfo;
