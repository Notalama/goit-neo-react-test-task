import { useState, useRef } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const DatePicker = ({
  selectedDate,
  onDateChange,
  placeholder = "Booking date*",
  className = "",
  ...props
}) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const inputRef = useRef(null);
  const calendarRef = useRef(null);

  const handleFocus = () => {
    setShowCalendar(true);
  };

  const handleBlur = (e) => {
    if (e.relatedTarget && calendarRef.current && calendarRef.current.contains(e.relatedTarget)) {
      return;
    }
    setShowCalendar(false);
  };

  const handleDateSelect = (date) => {
    if (date) {
      onDateChange?.(date);
      setShowCalendar(false);
      inputRef.current?.blur();
    }
  };

  const today = new Date();
  const value = selectedDate ? selectedDate.toLocaleDateString() : "";

  return (
    <div className={`relative w-full ${className}`}>
      <input
        ref={inputRef}
        type="text"
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        min={today}
        placeholder={placeholder}
        className={`w-full p-4 bg-[var(--color-neutral-100)] rounded-xl text-base text-[var(--color-text-primary)] min-h-[56px] cursor-pointer box-border placeholder-[var(--color-neutral-600)] outline-none focus:outline-none`}
        readOnly={true}
        {...props}
      />
      {showCalendar && (
        <div
          ref={calendarRef}
          className="absolute top-full left-0 z-[1000] mt-1 bg-[var(--color-white)] border border-[var(--color-text-secondary)] rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.1)] p-4"
          onMouseDown={(e) => e.preventDefault()}
        >
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={handleDateSelect}
            disabled={{ before: today }}
            showOutsideDays
            weekStartsOn={1}
            navLayout="around"
            formatters={{
              formatWeekdayName: (date) => {
                const weekdays = [
                  "SUN",
                  "MON",
                  "TUE",
                  "WED",
                  "THU",
                  "FRI",
                  "SAT",
                ];
                return weekdays[date.getDay()];
              },
            }}
          />
        </div>
      )}
    </div>
  );
};

export default DatePicker;
