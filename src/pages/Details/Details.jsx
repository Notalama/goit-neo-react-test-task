import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import AppNavigation from "../../components/features/AppNavigation/AppNavigation";
import ReviewSummary from "../../components/composite/ReviewSummary/ReviewSummary";
import LocationInfo from "../../components/composite/LocationInfo/LocationInfo";
import PriceDisplay from "../../components/composite/PriceDisplay/PriceDisplay";
import FeatureDetailsCard from "../../components/features/FeatureDetailsCard/FeatureDetailsCard";
import BookingCard from "../../components/features/BookingCard/BookingCard";
import ReviewCard from "../../components/composite/ReviewCard/ReviewCard";
import Loader from "../../components/common/Loader/Loader";
import ImageModal from "../../components/common/ImageModal/ImagePreview";
import {
  selectCurrentCamper,
  selectCamperLoading,
  selectCamperError,
  fetchCamperById,
} from "../../store";
 

const Details = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Determine initial tab from hash
  const getInitialTab = () => {
    const hash = location.hash.substring(1); // Remove the # symbol
    return hash === "reviews" ? "Reviews" : "Features";
  };

  const [activeTab, setActiveTab] = useState(getInitialTab());

  // Image modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Handle tab change with URL hash update
  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
    const hash = tabName === "Reviews" ? "#reviews" : "";
    navigate(`/catalog/${id}${hash}`, { replace: true });
  };

  // Image modal handlers
  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex < (camper?.gallery?.length || 0) - 1 ? prevIndex + 1 : prevIndex
    );
  };

  // Listen for hash changes (browser back/forward)
  useEffect(() => {
    const hash = location.hash.substring(1);
    const newTab = hash === "reviews" ? "Reviews" : "Features";
    if (newTab !== activeTab) {
      setActiveTab(newTab);
    }
  }, [location.hash, activeTab]);

  // Redux selectors
  const camper = useSelector(selectCurrentCamper);
  const loading = useSelector(selectCamperLoading);
  const error = useSelector(selectCamperError);

  // Load camper details on mount
  useEffect(() => {
    if (id) {
      dispatch(fetchCamperById(id));
    }
  }, [dispatch, id]);

  // Loading state
  if (loading) {
    return (
      <div className="relative w-full min-h-screen bg-[var(--color-white)] flex flex-col items-center pt-[72px]">
        <AppNavigation />
        <div className="flex flex-col justify-center items-center py-[80px] px-[20px] text-center">
          <Loader text="Loading camper details..." />
        </div>
      </div>
    );
  }

  // Error state
  if (error && !loading) {
    return (
      <div className="relative w-full min-h-screen bg-[var(--color-white)] flex flex-col items-center pt-[72px]">
        <AppNavigation />
        <div className="flex flex-col justify-center items-center py-[80px] px-[20px] text-center">
          <h2 className="font-semibold text-2xl leading-8 text-[var(--color-text-primary)] mb-4">Error loading camper details</h2>
          <p className="text-base leading-6 text-[var(--color-text-secondary)]">{error}</p>
        </div>
      </div>
    );
  }

  // No camper found
  if (!camper && !loading) {
    return (
      <div className="relative w-full min-h-screen bg-[var(--color-white)] flex flex-col items-center pt-[72px]">
        <AppNavigation />
        <div className="flex flex-col justify-center items-center py-[80px] px-[20px] text-center">
          <h2 className="font-semibold text-2xl leading-8 text-[var(--color-text-primary)] mb-4">Camper not found</h2>
          <p className="text-base leading-6 text-[var(--color-text-secondary)]">The requested camper could not be found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full min-h-screen bg-[var(--color-white)] flex flex-col items-center pt-[72px]">
      {/* AppNavigation */}
      <AppNavigation />

      {/* Details Header */}
      <div className="flex flex-col items-start w-full max-w-[1440px] gap-4 px-4 pt-6 md:px-8 md:pt-8 xl:px-16 xl:pt-12">
        {/* Title */}
        <h1 className="m-0 text-xl md:text-2xl leading-8 font-semibold text-[var(--color-text-primary)]">{camper?.name}</h1>

        {/* Reviews and Location HStack */}
        <div className="flex flex-col md:flex-row items-start gap-2 md:gap-4">
          <ReviewSummary
            rating={camper?.rating}
            reviewCount={camper?.reviews?.length || 0}
          />
          <LocationInfo location={camper?.location} />
        </div>

        {/* Price */}
        <PriceDisplay amount={camper?.price} currency="EUR" />

        {/* Images HStack - horizontally scrollable */}
        <div className="flex flex-row items-start w-full max-w-[1312px] my-4 overflow-x-auto pb-2 gap-6 md:gap-8 xl:gap-12">
          {camper?.gallery?.map((image, index) => (
            <div key={index} className="max-w-[292px] w-auto h-[160px] md:h-[200px] xl:h-[312px] rounded-[10px] overflow-hidden shrink-0">
              <img
                src={image.thumb}
                alt={`${camper.name} image ${index + 1}`}
                className="w-auto max-w-full h-full object-cover rounded-[10px] cursor-pointer"
                onClick={() => handleImageClick(index)}
              />
            </div>
          ))}
        </div>

        {/* Description */}
        <p className="m-0 max-w-[1312px] text-base leading-6 text-[var(--color-text-secondary)]">{camper?.description}</p>
      </div>

      {/* Tab Section - Full Width */}
      <div className="w-full max-w-[1440px] mx-auto px-4 pt-6 md:px-8 md:pt-8 xl:px-16 xl:pt-12">
        {/* Tab Headers - Leading alignment */}
        <div className="flex flex-row items-start gap-6 md:gap-10 border-b border-[var(--color-neutral-300)]">
          <button
            className={`bg-transparent border-0 p-0 cursor-pointer font-semibold text-lg md:text-xl leading-6 text-[var(--color-text-primary)] hover:opacity-80 pb-3 ${
              activeTab === "Features" ? "border-b-4 border-[var(--color-primary-500)]" : "border-b-4 border-transparent"
            }`}
            onClick={() => handleTabChange("Features")}
          >
            Features
          </button>
          <button
            className={`bg-transparent border-0 p-0 cursor-pointer font-semibold text-lg md:text-xl leading-6 text-[var(--color-text-primary)] hover:opacity-80 pb-3 ${
              activeTab === "Reviews" ? "border-b-4 border-[var(--color-primary-500)]" : "border-b-4 border-transparent"
            }`}
            onClick={() => handleTabChange("Reviews")}
          >
            Reviews
          </button>
        </div>
      </div>

      {/* Content HStack - 50% ActiveTab + 50% Booking */}
      <div className="flex flex-col xl:flex-row items-start gap-8 md:gap-10 w-full max-w-[1440px] mx-auto px-4 py-6 md:px-8 md:py-8 xl:px-16 xl:py-12 flex-1">
        {/* Active Tab Content - 50% width */}
        <div className="w-full xl:w-1/2">
          {activeTab === "Features" && <FeatureDetailsCard camper={camper} />}
          {activeTab === "Reviews" && (
            <div className="flex flex-col gap-6">
              {camper?.reviews?.map((review, index) => (
                <ReviewCard
                  key={index}
                  reviewerName={review.reviewer_name}
                  rating={review.reviewer_rating}
                  comment={review.comment}
                />
              ))}
            </div>
          )}
        </div>

        {/* BookingCard - 50% width */}
        <div className="w-full xl:w-1/2 max-w-[641px]">
          <BookingCard />
        </div>
      </div>

      {/* Image Modal */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        image={camper?.gallery?.[currentImageIndex]}
        camperName={camper?.name}
        currentIndex={currentImageIndex}
        totalImages={camper?.gallery?.length || 0}
        onPrevious={handlePreviousImage}
        onNext={handleNextImage}
      />
    </div>
  );
};

export default Details;
