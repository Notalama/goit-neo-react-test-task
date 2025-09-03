import Tag from "../../common/Tag/Tag";

const FeatureDetailsCard = ({ camper, className = "" }) => {
  if (!camper) {
    return null;
  }

  // Equipment features mapping
  const equipmentFeatures = {
    AC: { icon: "ac", label: "AC" },
    automatic: { icon: "automatic", label: "Automatic" },
    kitchen: { icon: "kitchen", label: "Kitchen" },
    TV: { icon: "tv", label: "TV" },
    bathroom: { icon: "bathroom", label: "Bathroom" },
    water: { icon: "water", label: "Water" },
    gas: { icon: "gas", label: "Gas" },
    radio: { icon: "radio", label: "Radio" },
    refrigerator: { icon: "refrigerator", label: "Refrigerator" },
    microwave: { icon: "microwave", label: "Microwave" },
  };

  // Filter available equipment
  const availableEquipment = Object.entries(equipmentFeatures).filter(
    ([key]) => camper[key]
  );

  // Build vehicle specifications
  const vehicleSpecs = {
    Form: camper.form || "Unknown",
    Length: camper.length || "N/A",
    Width: camper.width || "N/A",
    Height: camper.height || "N/A",
    Tank: camper.tank || "N/A",
    Consumption: camper.consumption || "N/A",
  };

  return (
    <div
      className={`flex flex-col w-full bg-[var(--color-neutral-100)] rounded-xl p-10 xl:min-h-[556px] justify-start xl:justify-between gap-8 ${className}`}
    >
      {/* Equipment Section */}
      {availableEquipment.length > 0 && (
        <div className="flex flex-wrap gap-2 items-start content-start w-full">
          {availableEquipment.map(([key, feature]) => (
            <Tag key={key} icon={feature.icon}>
              {feature.label}
            </Tag>
          ))}
        </div>
      )}

      {/* Vehicle Details Section */}
      <div className="flex flex-col gap-6 w-full">
        <h3 className="m-0 text-left font-semibold text-xl leading-6 text-[var(--color-text-primary)]">
          Vehicle details
        </h3>
        <div className="w-full border-t border-[var(--color-neutral-300)]" />
        <div className="flex flex-col gap-4 w-full">
          {Object.entries(vehicleSpecs).map(([key, value]) => (
            <div key={key} className="flex justify-between items-center w-full">
              <span className="text-left capitalize font-medium text-sm leading-5 text-[var(--color-text-primary)]">
                {key}
              </span>
              <span className="text-right font-normal text-sm leading-5 text-[var(--color-text-primary)]">
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureDetailsCard;
