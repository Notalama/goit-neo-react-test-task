import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import PriceDisplay from "../../composite/PriceDisplay/PriceDisplay";
import LocationInfo from "../../composite/LocationInfo/LocationInfo";
import ReviewSummary from "../../composite/ReviewSummary/ReviewSummary";
import Tag from "../../common/Tag/Tag";
import Favourite from "../../common/Favourite/Favourite";
import Button from "../../common/Button/Button";
import { selectIsFavorite, toggleFavorite } from "../../../store";

const VehicleCard = ({ camper, onShowMore, className = "" }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isFavorite = useSelector(selectIsFavorite(camper?.id));

  if (!camper) {
    return null;
  }

  // Equipment features mapping
  const equipmentFeatureByKey = {
    AC: { icon: "ac", label: "AC" },
    automatic: { icon: "automatic", label: "Automatic" },
    kitchen: { icon: "kitchen", label: "Kitchen" },
    TV: { icon: "tv", label: "TV" },
    bathroom: { icon: "bathroom", label: "Bathroom" },
    water: { icon: "water", label: "Water" },
    gas: { icon: "gas", label: "Gas" },
    radio: { icon: "radio", label: "Radio" },
    refrigerator: { icon: "fridge", label: "Refrigerator" },
    microwave: { icon: "microwave", label: "Microwave" },
  };

  // Filter available equipment
  const availableEquipmentEntries = Object.entries(equipmentFeatureByKey).filter(
    ([equipmentKey]) => camper[equipmentKey]
  );

  // Get main image
  const primaryImageUrl =
    camper.gallery?.[0]?.thumb || camper.gallery?.[0]?.original;

  const handleShowMoreClick = () => {
    if (onShowMore) {
      onShowMore(camper.id);
    } else {
      navigate(`/catalog/${camper.id}`);
    }
  };

  const handleFavoriteToggleClick = () => {
    dispatch(toggleFavorite(camper.id));
  };

  const handleReviewsClick = () => {
    navigate(`/catalog/${camper.id}#reviews`);
  };

  return (
    <div
      className={`flex overflow-hidden flex-col items-start p-4 w-full bg-white rounded-xl border md:flex-row border-neutral-300 md:p-6 ${className}`}
    >
      {/* Image Section */}
      <div className="order-1 md:order-none w-full md:w-[292px] shrink-0 overflow-hidden mb-4 md:mb-0">
        {primaryImageUrl ? (
          <img
            src={primaryImageUrl}
            alt={camper.name}
            className="w-full h-full md:min-h-[320px] min-h-[200px] object-cover object-center rounded-md"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full min-h-[200px] md:min-h-[320px] bg-neutral-100 text-neutral-600 text-base font-medium rounded-md">
            <span aria-label="No image available">No Image</span>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="order-2 md:order-none flex flex-col items-start pl-0 md:pl-6 flex-1 w-full justify-start min-w-0 md:min-h-[320px]">
        {/* Header row: Name + Spacer + Price + Favourite */}
        <div className="flex gap-4 items-center w-full">
          <h3 className="m-0 text-xl font-semibold leading-6 text-gray-900 truncate md:text-2xl md:leading-8">
            {camper.name}
          </h3>
          <div className="flex-1" />
          <PriceDisplay amount={camper.price} />
          <Favourite
            isActive={isFavorite}
            onClick={handleFavoriteToggleClick}
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          />
        </div>

        {/* Review/location row */}
        <div className="flex flex-wrap gap-2 items-center mt-2 w-full md:gap-4 md:flex-nowrap">
          <ReviewSummary
            rating={camper.rating}
            reviewCount={camper.reviews?.length || 0}
            showLink={true}
            onReviewsClick={handleReviewsClick}
          />
          <LocationInfo location={camper.location} />
        </div>

        {/* Description - single line with ellipsis */}
        <p className="m-0 mt-6 w-full min-w-0 text-base font-normal leading-6 text-gray-700 md:truncate">
          {camper.description}
        </p>

        {/* Equipment tags - wrap row */}
        <div className="flex flex-wrap gap-2 items-start my-6 w-full min-w-0">
          {availableEquipmentEntries.map(([equipmentKey, feature]) => (
            <Tag key={equipmentKey} icon={feature.icon}>
              {feature.label}
            </Tag>
          ))}
        </div>

        <div className="flex-1" />

        {/* Show more button */}
        <Button
          variant="primary"
          onClick={handleShowMoreClick}
          aria-label={`Show more details for ${camper.name}`}
        >
          Show more
        </Button>
      </div>
    </div>
  );
};

export default VehicleCard;
