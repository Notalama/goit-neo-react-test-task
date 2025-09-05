const PriceDisplay = ({ amount, currency = "EUR", className = "" }) => {
  const formatPrice = (price, curr) => 
    (curr === "EUR" ? '€' : '$') + new Intl.NumberFormat("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(price);

  return (
    <span className={`text-2xl font-semibold text-gray-900 ${className}`}>
      {formatPrice(amount, currency)}
    </span>
  );
};

export default PriceDisplay;
