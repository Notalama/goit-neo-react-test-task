import AppNavigation from "../../components/features/AppNavigation/AppNavigation";
import Button from "../../components/common/Button/Button";
import Icon from "../../components/common/Icon/Icon";
import Tag from "../../components/common/Tag/Tag";
import Favourite from "../../components/common/Favourite/Favourite";
import Input from "../../components/common/Input/Input";
import Loader from "../../components/common/Loader/Loader";
import RatingStars from "../../components/composite/Rating/Rating";
import PriceDisplay from "../../components/composite/PriceDisplay/PriceDisplay";
import LocationInfo from "../../components/composite/LocationInfo/LocationInfo";
import ReviewSummary from "../../components/composite/ReviewSummary/ReviewSummary";
import DatePicker from "../../components/composite/DatePicker/DatePicker";
import LocationInput from "../../components/composite/LocationInput/LocationInput";
import ReviewCard from "../../components/composite/ReviewCard/ReviewCard";
import ToggleButton from "../../components/composite/ToggleButton/ToggleButton";
import FeatureDetailsCard from "../../components/features/FeatureDetailsCard/FeatureDetailsCard";
import BookingCard from "../../components/features/BookingCard/BookingCard";
import VehicleCard from "../../components/features/VehicleCard/VehicleCard";
import { FiltersSidebar } from "../../components/features/FiltersSidebar/FiltersSidebar";
 

const DesignCatalog = () => {
  // Sample data for components

  const sampleCamper = {
    id: "1",
    name: "Road Bear C 23-25",
    price: 10000,
    rating: 4.5,
    location: "Ukraine, Kyiv",
    description:
      "Embrace simplicity and freedom with the Road Bear C 23-25. This well-equipped alcove offers a perfect blend of comfort and functionality for your adventures.",
    form: "alcove",
    length: "7.3m",
    width: "2.65m",
    height: "3.65m",
    tank: "208l",
    consumption: "30l/100km",
    AC: true,
    automatic: true,
    kitchen: true,
    TV: true,
    bathroom: true,
    water: true,
    gas: false,
    radio: true,
    refrigerator: false,
    microwave: true,
    reviews: [
      { reviewer_name: "Alice", reviewer_rating: 5, comment: "Great camper!" },
      { reviewer_name: "Bob", reviewer_rating: 4, comment: "Good experience" },
    ],
    gallery: [
      {
        thumb: "https://ftp.goit.study/img/campers-test-task/1-1.webp",
        original: "https://ftp.goit.study/img/campers-test-task/1-1.webp",
      },
    ],
  };

  return (
    <div className="min-h-screen">
      <AppNavigation />
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 xl:px-8 pt-[calc(72px+1rem)] md:pt-[calc(72px+1.5rem)] xl:pt-[calc(72px+2rem)]">
        <h1 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 text-center">Design System Catalog</h1>

        <section className="mb-8 md:mb-12 p-4 md:p-6 border border-[var(--color-neutral-300)] rounded-[20px]">
          <h2 className="mb-6 text-[var(--color-primary-500)] font-semibold">Color Palette</h2>
          <div className="flex items-center gap-1 sm:gap-2 md:gap-4 flex-wrap">
            <div className="flex flex-col items-center gap-1 p-4 border border-[var(--color-neutral-300)] rounded-lg min-w-[80px] sm:min-w-[100px] md:min-w-[120px]">
              <div
                className="w-10 h-10 md:w-[60px] md:h-[60px] rounded-lg border border-[var(--color-neutral-300)]"
                style={{ backgroundColor: "var(--color-main)" }}
              ></div>
              <span className="font-medium text-sm">Main</span>
              <code className="text-xs text-[var(--color-neutral-300)] font-mono">#101828</code>
            </div>
            <div className="flex flex-col items-center gap-1 p-4 border border-[var(--color-neutral-300)] rounded-lg min-w-[80px] sm:min-w-[100px] md:min-w-[120px]">
              <div
                className="w-10 h-10 md:w-[60px] md:h-[60px] rounded-lg border border-[var(--color-neutral-300)]"
                style={{ backgroundColor: "var(--color-text)" }}
              ></div>
              <span className="font-medium text-sm">Text</span>
              <code className="text-xs text-[var(--color-neutral-300)] font-mono">#475467</code>
            </div>
            <div className="flex flex-col items-center gap-1 p-4 border border-[var(--color-neutral-300)] rounded-lg min-w-[80px] sm:min-w-[100px] md:min-w-[120px]">
              <div
                className="w-10 h-10 md:w-[60px] md:h-[60px] rounded-lg border border-[var(--color-neutral-300)]"
                style={{ backgroundColor: "var(--color-gray)" }}
              ></div>
              <span className="font-medium text-sm">Gray</span>
              <code className="text-xs text-[var(--color-neutral-300)] font-mono">#6C717B</code>
            </div>
            <div className="flex flex-col items-center gap-1 p-4 border border-[var(--color-neutral-300)] rounded-lg min-w-[80px] sm:min-w-[100px] md:min-w-[120px]">
              <div
                className="w-10 h-10 md:w-[60px] md:h-[60px] rounded-lg border border-[var(--color-neutral-300)]"
                style={{ backgroundColor: "var(--color-gray-light)" }}
              ></div>
              <span className="font-medium text-sm">Gray Light</span>
              <code className="text-xs text-[var(--color-neutral-300)] font-mono">#DADDE1</code>
            </div>
            <div className="flex flex-col items-center gap-1 p-4 border border-[var(--color-neutral-300)] rounded-lg min-w-[80px] sm:min-w-[100px] md:min-w-[120px]">
              <div
                className="w-10 h-10 md:w-[60px] md:h-[60px] rounded-lg border border-[var(--color-neutral-300)]"
                style={{ backgroundColor: "var(--color-button)" }}
              ></div>
              <span className="font-medium text-sm">Button</span>
              <code className="text-xs text-[var(--color-neutral-300)] font-mono">#E44848</code>
            </div>
            <div className="flex flex-col items-center gap-1 p-4 border border-[var(--color-neutral-300)] rounded-lg min-w-[80px] sm:min-w-[100px] md:min-w-[120px]">
              <div
                className="w-10 h-10 md:w-[60px] md:h-[60px] rounded-lg border border-[var(--color-neutral-300)]"
                style={{ backgroundColor: "var(--color-button-hover)" }}
              ></div>
              <span className="font-medium text-sm">Button Hover</span>
              <code className="text-xs text-[var(--color-neutral-300)] font-mono">#D84343</code>
            </div>
            <div className="flex flex-col items-center gap-1 p-4 border border-[var(--color-neutral-300)] rounded-lg min-w-[80px] sm:min-w-[100px] md:min-w-[120px]">
              <div
                className="w-10 h-10 md:w-[60px] md:h-[60px] rounded-lg border border-[var(--color-neutral-300)]"
                style={{ backgroundColor: "var(--color-rating)" }}
              ></div>
              <span className="font-medium text-sm">Rating</span>
              <code className="text-xs text-[var(--color-neutral-300)] font-mono">#FFC531</code>
            </div>
            <div className="flex flex-col items-center gap-1 p-4 border border-[var(--color-neutral-300)] rounded-lg min-w-[80px] sm:min-w-[100px] md:min-w-[120px]">
              <div
                className="w-10 h-10 md:w-[60px] md:h-[60px] rounded-lg border border-[var(--color-neutral-300)]"
                style={{ backgroundColor: "var(--color-badges)" }}
              ></div>
              <span className="font-medium text-sm">Badges</span>
              <code className="text-xs text-[var(--color-neutral-300)] font-mono">#F2F4F7</code>
            </div>
            <div className="flex flex-col items-center gap-1 p-4 border border-[var(--color-neutral-300)] rounded-lg min-w-[80px] sm:min-w-[100px] md:min-w-[120px]">
              <div
                className="w-10 h-10 md:w-[60px] md:h-[60px] rounded-lg border border-[var(--color-neutral-300)]"
                style={{ backgroundColor: "var(--color-inputs)" }}
              ></div>
              <span className="font-medium text-sm">Inputs</span>
              <code className="text-xs text-[var(--color-neutral-300)] font-mono">#F7F7F7</code>
            </div>
            <div className="flex flex-col items-center gap-1 p-4 border border-[var(--color-neutral-300)] rounded-lg min-w-[80px] sm:min-w-[100px] md:min-w-[120px]">
              <div
                className="w-10 h-10 md:w-[60px] md:h-[60px] rounded-lg border border-[var(--color-neutral-300)]"
                style={{ backgroundColor: "var(--color-white)" }}
              ></div>
              <span className="font-medium text-sm">White</span>
              <code className="text-xs text-[var(--color-neutral-300)] font-mono">#FFFFFF</code>
            </div>
          </div>
        </section>

        <section className="mb-8 md:mb-12 p-4 md:p-6 border border-[var(--color-neutral-300)] rounded-[20px]">
          <h2 className="mb-6 text-[var(--color-primary-500)] font-semibold">Buttons</h2>
          <div className="flex items-center gap-1 sm:gap-2 md:gap-4 flex-wrap">
            <Button variant="primary">Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="primary" size="sm">
              Small
            </Button>
            <Button variant="primary" size="lg">
              Large
            </Button>
          </div>
        </section>

        <section className="mb-8 md:mb-12 p-4 md:p-6 border border-[var(--color-neutral-300)] rounded-[20px]">
          <h2 className="mb-6 text-[var(--color-primary-500)] font-semibold">Icons</h2>
          <div className="flex items-center gap-1 sm:gap-2 md:gap-4 flex-wrap">
            <Icon name="heart" />
            <Icon name="heart" variant="filled" />
            <Icon name="star" />
            <Icon name="star" variant="filled" />
            <Icon name="map" />
            <Icon name="ac" />
            <Icon name="kitchen" />
            <Icon name="tv" />
            <Icon name="automatic" />
          </div>
        </section>

        <section className="mb-8 md:mb-12 p-4 md:p-6 border border-[var(--color-neutral-300)] rounded-[20px]">
          <h2 className="mb-6 text-[var(--color-primary-500)] font-semibold">Tags</h2>
          <div className="flex items-center gap-1 sm:gap-2 md:gap-4 flex-wrap">
            <Tag icon="automatic">Automatic</Tag>
            <Tag icon="ac">AC</Tag>
            <Tag icon="kitchen">Kitchen</Tag>
            <Tag icon="water">Water</Tag>
            <Tag icon="tv">TV</Tag>
          </div>
        </section>

        <section className="mb-8 md:mb-12 p-4 md:p-6 border border-[var(--color-neutral-300)] rounded-[20px]">
          <h2 className="mb-6 text-[var(--color-primary-500)] font-semibold">Favourite</h2>
          <div className="flex items-center gap-1 sm:gap-2 md:gap-4 flex-wrap">
            <Favourite isActive={false} />
            <Favourite isActive={true} />
          </div>
        </section>

        <section className="mb-8 md:mb-12 p-4 md:p-6 border border-[var(--color-neutral-300)] rounded-[20px]">
          <h2 className="mb-6 text-[var(--color-primary-500)] font-semibold">Rating Stars</h2>
          <div className="flex flex-col items-start gap-2 md:gap-4">
            <RatingStars rating={0} />
            <RatingStars rating={2.5} />
            <RatingStars rating={4} />
            <RatingStars rating={5} />
          </div>
        </section>

        <section className="mb-8 md:mb-12 p-4 md:p-6 border border-[var(--color-neutral-300)] rounded-[20px]">
          <h2 className="mb-6 text-[var(--color-primary-500)] font-semibold">Inputs</h2>
          <div className="flex flex-col items-start gap-2 md:gap-4">
            <Input placeholder="Name" />
            <Input placeholder="Email" type="email" />
            <Input placeholder="Comment" multiline />
          </div>
        </section>

        <section className="mb-8 md:mb-12 p-4 md:p-6 border border-[var(--color-neutral-300)] rounded-[20px]">
          <h2 className="mb-6 text-[var(--color-primary-500)] font-semibold">Price Display</h2>
          <div className="flex items-center gap-1 sm:gap-2 md:gap-4 flex-wrap">
            <PriceDisplay amount={8000} />
            <PriceDisplay amount={12500} />
            <PriceDisplay amount={999.99} />
          </div>
        </section>

        <section className="mb-8 md:mb-12 p-4 md:p-6 border border-[var(--color-neutral-300)] rounded-[20px]">
          <h2 className="mb-6 text-[var(--color-primary-500)] font-semibold">Location Info</h2>
          <div className="flex flex-col items-start gap-2 md:gap-4">
            <LocationInfo location="Ukraine, Kyiv" />
            <LocationInfo location="Poland, Warsaw" />
          </div>
        </section>

        <section className="mb-8 md:mb-12 p-4 md:p-6 border border-[var(--color-neutral-300)] rounded-[20px]">
          <h2 className="mb-6 text-[var(--color-primary-500)] font-semibold">Review Summary</h2>
          <div className="flex flex-col items-start gap-2 md:gap-4">
            <ReviewSummary rating={4.5} reviewCount={42} />
            <ReviewSummary rating={3.8} reviewCount={15} showLink={false} />
          </div>
        </section>

        <section className="mb-8 md:mb-12 p-4 md:p-6 border border-[var(--color-neutral-300)] rounded-[20px]">
          <h2 className="mb-6 text-[var(--color-primary-500)] font-semibold">Location Input</h2>
          <div className="flex flex-col items-start gap-2 md:gap-4">
            <LocationInput placeholder="City" />
            <LocationInput placeholder="City" value="Kyiv, Ukraine" />
          </div>
        </section>

        <section className="mb-8 md:mb-12 p-4 md:p-6 border border-[var(--color-neutral-300)] rounded-[20px]">
          <h2 className="mb-6 text-[var(--color-primary-500)] font-semibold">Date Picker</h2>
          <div className="flex flex-col items-start gap-2 md:gap-4">
            <DatePicker placeholder="Booking date*" />
            <DatePicker placeholder="Check-in date" selectedDate={new Date()} />
          </div>
        </section>

        <section className="mb-8 md:mb-12 p-4 md:p-6 border border-[var(--color-neutral-300)] rounded-[20px]">
          <h2 className="mb-6 text-[var(--color-primary-500)] font-semibold">Toggle Buttons</h2>
          <div className="flex items-center gap-1 sm:gap-2 md:gap-4 flex-wrap">
            <ToggleButton icon="van">Van</ToggleButton>
            <ToggleButton icon="intergrated" isSelected>
              Fully Integrated
            </ToggleButton>
            <ToggleButton icon="alcove">Alcove</ToggleButton>
          </div>
        </section>

        <section className="mb-8 md:mb-12 p-4 md:p-6 border border-[var(--color-neutral-300)] rounded-[20px]">
          <h2 className="mb-6 text-[var(--color-primary-500)] font-semibold">Feature Details Card</h2>
          <div className="flex flex-col items-start gap-2 md:gap-4">
            <FeatureDetailsCard camper={sampleCamper} />
          </div>
        </section>

        <section className="mb-8 md:mb-12 p-4 md:p-6 border border-[var(--color-neutral-300)] rounded-[20px]">
          <h2 className="mb-6 text-[var(--color-primary-500)] font-semibold">Loader</h2>
          <div className="flex flex-col items-start gap-2 md:gap-4">
            <Loader />
            <Loader text="Loading campers..." />
            <Loader size={24} text="Please wait..." />
          </div>
        </section>

        <section className="mb-8 md:mb-12 p-4 md:p-6 border border-[var(--color-neutral-300)] rounded-[20px]">
          <h2 className="mb-6 text-[var(--color-primary-500)] font-semibold">Review Card</h2>
          <div className="flex flex-col items-start gap-2 md:gap-4">
            <ReviewCard
              reviewerName="Alice"
              rating={5}
              comment="The Mavericks panel truck was a perfect choice for my solo road trip. Compact, easy to drive, and had all the essentials. The kitchen facilities were sufficient, and the overall experience was fantastic."
            />
            <ReviewCard
              reviewerName="Bob"
              rating={4}
              comment="Great experience! The camper was clean and well-equipped. Would definitely book again."
            />
          </div>
        </section>

        <section className="mb-8 md:mb-12 p-4 md:p-6 border border-[var(--color-neutral-300)] rounded-[20px]">
          <h2 className="mb-6 text-[var(--color-primary-500)] font-semibold">Booking Form Card</h2>
          <div className="flex flex-col items-start gap-2 md:gap-4">
            <BookingCard
              onSubmit={(values) => console.log("Booking submitted:", values)}
            />
          </div>
        </section>

        <section className="mb-8 md:mb-12 p-4 md:p-6 border border-[var(--color-neutral-300)] rounded-[20px]">
          <h2 className="mb-6 text-[var(--color-primary-500)] font-semibold">Vehicle Card</h2>
          <div className="flex flex-col items-start gap-2 md:gap-4">
            <VehicleCard
              camper={sampleCamper}
              onShowMore={(id) =>
                console.log(`Show more clicked for camper: ${id}`)
              }
            />
          </div>
        </section>

        <section className="mb-8 md:mb-12 p-4 md:p-6 border border-[var(--color-neutral-300)] rounded-[20px]">
          <h2 className="mb-6 text-[var(--color-primary-500)] font-semibold">Filters Sidebar</h2>
          <div className="flex flex-col items-start gap-2 md:gap-4">
            <FiltersSidebar />
          </div>
        </section>
      </div>
    </div>
  );
};

export default DesignCatalog;
