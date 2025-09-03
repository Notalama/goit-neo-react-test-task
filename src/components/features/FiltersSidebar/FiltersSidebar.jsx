import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "../../common/Button/Button";
import LocationInput from "../../composite/LocationInput/LocationInput";
import ToggleButton from "../../composite/ToggleButton/ToggleButton";
import {
  selectLocationFilter,
  selectEquipmentFilters,
  selectFormFilter,
  selectAPIFilters,
  setLocationFilter,
  toggleEquipmentFilter,
  setFormFilter,
  fetchCampers,
  resetCampers,
} from "../../../store";

// Equipment filter options
const EQUIPMENT_OPTIONS = [
  { key: "AC", label: "AC", icon: "ac" },
  { key: "automatic", label: "Automatic", icon: "automatic" },
  { key: "kitchen", label: "Kitchen", icon: "kitchen" },
  { key: "TV", label: "TV", icon: "tv" },
  { key: "bathroom", label: "Bathroom", icon: "bathroom" },
];

// Vehicle type options
const VEHICLE_TYPE_OPTIONS = [
  { key: "panelTruck", label: "Van", icon: "van" },
  { key: "fullyIntegrated", label: "Fully Integrated", icon: "intergrated" },
  { key: "alcove", label: "Alcove", icon: "alcove" },
];

export const FiltersSidebar = () => {
  const dispatch = useDispatch();

  // Selectors to get data from store
  const locationFilterValue = useSelector(selectLocationFilter);
  const selectedEquipmentFilters = useSelector(selectEquipmentFilters);
  const selectedVehicleTypeFilter = useSelector(selectFormFilter);
  const apiRequestFilters = useSelector(selectAPIFilters);

  // Event handlers
  const handleLocationChange = (event) => {
    dispatch(setLocationFilter(event.target.value));
  };

  const handleEquipmentToggle = (equipmentKey) => {
    dispatch(toggleEquipmentFilter(equipmentKey));
  };

  const handleVehicleTypeToggle = (vehicleTypeKey) => {
    // Toggle behavior: clicking the active type clears it
    const nextValue =
      selectedVehicleTypeFilter === vehicleTypeKey ? "" : vehicleTypeKey;
    dispatch(setFormFilter(nextValue));
  };

  const handleSearchClick = () => {
    dispatch(resetCampers());
    dispatch(
      fetchCampers({
        filters: apiRequestFilters,
        page: 1,
      })
    );
  };
  return (
    <div className="flex flex-col gap-10 items-start w-full">
      {/* Location Section */}
      <div className="flex flex-col gap-2 w-full">
        <label className="m-0 text-base font-normal text-neutral-600">
          Location
        </label>
        <LocationInput
          value={locationFilterValue}
          onChange={handleLocationChange}
          placeholder="City"
          aria-label="Location"
        />
      </div>

      {/* Filters Section */}
      <div className="flex flex-col gap-8 w-full">
        <span className="m-0 text-base font-medium text-gray-700">Filters</span>

        {/* Vehicle Equipment */}
        <div className="flex flex-col gap-6 w-full">
          <h3 className="m-0 text-base font-semibold text-gray-900">
            Vehicle equipment
          </h3>
          <div className="w-full h-px bg-neutral-300" />
          <div className="flex flex-wrap gap-3 w-full">
            {EQUIPMENT_OPTIONS.map((option) => (
              <ToggleButton
                key={option.key}
                icon={option.icon}
                isSelected={selectedEquipmentFilters[option.key] || false}
                onClick={() => handleEquipmentToggle(option.key)}
                ariaLabel={`Toggle equipment: ${option.label}`}
              >
                {option.label}
              </ToggleButton>
            ))}
          </div>
        </div>

        {/* Vehicle Type */}
        <div className="flex flex-col gap-6 w-full">
          <h3 className="m-0 text-base font-semibold text-gray-900">
            Vehicle type
          </h3>
          <div className="w-full h-px bg-neutral-300" />
          <div className="flex flex-wrap gap-3 w-full">
            {VEHICLE_TYPE_OPTIONS.map((option) => (
              <ToggleButton
                key={option.key}
                icon={option.icon}
                isSelected={selectedVehicleTypeFilter === option.key}
                onClick={() => handleVehicleTypeToggle(option.key)}
                ariaLabel={`Select vehicle type: ${option.label}`}
              >
                {option.label}
              </ToggleButton>
            ))}
          </div>
        </div>
      </div>

      {/* Search Button */}
      <Button variant="primary" onClick={handleSearchClick}>
        Search
      </Button>
    </div>
  );
};
