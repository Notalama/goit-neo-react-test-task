import Icon from "../../common/Icon/Icon";

const ReviewSummary = ({
  rating,
  reviewCount,
  showLink = true,
  onReviewsClick,
  className = "",
}) => {
  const handleReviewsButtonClick = () => {
    if (onReviewsClick) onReviewsClick();
  };

  const reviewsText = `${rating} (${reviewCount} Reviews)`;

  return (
    <div className={`inline-flex gap-2 items-center ${className}`}>
      <Icon name="star" variant="filled" className="text-yellow-400" aria-hidden="true" />
      {showLink ? (
        <button
          type="button"
          className="p-0 text-base text-gray-900 underline bg-transparent border-0 cursor-pointer hover:text-blue-500"
          onClick={handleReviewsButtonClick}
          aria-label="View reviews"
        >
          {reviewsText}
        </button>
      ) : (
        <span className="text-base text-gray-900">{reviewsText}</span>
      )}
    </div>
  );
};

export default ReviewSummary;
