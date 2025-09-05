import RatingStars from "../Rating/Rating";

const ReviewCard = ({ reviewerName, rating, comment, className = "" }) => {
  // Get first letter of name for avatar
  const avatarInitial = reviewerName
    ? reviewerName.charAt(0).toUpperCase()
    : "?";

  return (
    <div className={`flex flex-col items-start gap-4 ${className}`}>
      <div className="flex flex-row justify-center items-center gap-4 isolate">
        <div className="w-[60px] h-[60px] bg-[var(--color-neutral-50)] rounded-[60px] flex items-center justify-center relative z-0 font-semibold text-2xl leading-8 text-[var(--color-primary-500)]">
          {avatarInitial}
        </div>
        <div className="flex flex-col items-start gap-1 z-[1]">
          <h4 className="m-0 font-medium text-base leading-6 text-[var(--color-text-primary)]">{reviewerName}</h4>
          <RatingStars rating={rating} size="sm" />
        </div>
      </div>
      <p className="m-0 text-base leading-6 text-left text-[var(--color-text-secondary)]">{comment}</p>
    </div>
  );
};

export default ReviewCard;
