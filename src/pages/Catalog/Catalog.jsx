import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import AppNavigation from "../../components/features/AppNavigation/AppNavigation";
import { FiltersSidebar } from "../../components/features/FiltersSidebar/FiltersSidebar";
import VehicleCard from "../../components/features/VehicleCard/VehicleCard";
import Button from "../../components/common/Button/Button";
import Loader from "../../components/common/Loader/Loader";
import {
  selectCampers,
  selectCampersLoading,
  selectCampersError,
  selectCurrentPage,
  selectHasMore,
  fetchCampers,
  selectAPIFilters,
} from "../../store";
 

const Catalog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const hasInitiallyLoaded = useRef(false);

  // Redux selectors
  const campers = useSelector(selectCampers);
  const loading = useSelector(selectCampersLoading);
  const error = useSelector(selectCampersError);
  const currentPage = useSelector(selectCurrentPage);
  const hasMore = useSelector(selectHasMore);
  const apiFilters = useSelector(selectAPIFilters);

  // Load initial campers on mount (only once)
  useEffect(() => {
    if (!hasInitiallyLoaded.current) {
      dispatch(fetchCampers({ filters: {}, page: 1 }));
      hasInitiallyLoaded.current = true;
    }
  }, [dispatch]);

  const handleLoadMore = () => {
    if (hasMore && !loading) {
      dispatch(
        fetchCampers({
          filters: apiFilters,
          page: currentPage + 1,
        })
      );
    }
  };

  const handleShowMore = (camperId) => {
    navigate(`/catalog/${camperId}`);
  };

  return (
    <div className="min-h-screen bg-white">
      <AppNavigation />

      <div className="flex flex-col min-h-[calc(100vh-72px)] gap-6 px-4 pb-16 pt-[88px] max-w-[1440px] mx-auto md:gap-8 md:px-8 md:pt-[104px] xl:flex-row xl:gap-16 xl:px-16 xl:pt-[120px]">
        {/* Sidebar Filter Panel */}
        <aside className="w-full order-1 xl:flex-none xl:w-[360px] xl:order-none">
          <FiltersSidebar />
        </aside>

        {/* Main Catalog List */}
        <main className="flex-1 order-2 min-w-0 xl:order-none">
          <div className="flex flex-col gap-5 w-full md:gap-6 xl:gap-8">
            {/* Loading State */}
            {loading && campers.length === 0 && (
              <div className="flex flex-col justify-center items-center min-h-[300px] gap-4" role="status" aria-live="polite">
                <Loader text="Loading campers..." />
              </div>
            )}

            {/* Error State - only show for actual API errors */}
            {error && !loading && (
              <div className="flex flex-col items-center justify-center min-h-[300px] text-center gap-4 p-8 rounded-2xl bg-red-50 border border-red-200" role="alert" aria-live="assertive">
                <p className="m-0 text-base text-red-600">Error loading campers: {error}</p>
                <Button
                  variant="primary"
                  onClick={() =>
                    dispatch(fetchCampers({ filters: apiFilters, page: 1 }))
                  }
                >
                  Try Again
                </Button>
              </div>
            )}

            {/* Vehicle Cards */}
            {!error && campers.length > 0 && (
              <div className="flex flex-col gap-5 md:gap-6 xl:gap-8">
                {campers.map((camper) => (
                  <VehicleCard
                    key={camper.id}
                    camper={camper}
                    onShowMore={handleShowMore}
                    className="w-full"
                  />
                ))}
              </div>
            )}

            {/* Empty State - no campers and no error */}
            {!loading && !error && campers.length === 0 && (
              <div className="flex flex-col items-center justify-center min-h-[300px] text-center gap-4">
                <h3 className="m-0 text-2xl font-semibold text-gray-900">No campers found</h3>
                <p className="text-base text-gray-600 m-0 max-w-[400px]">Try adjusting your filters to see more results.</p>
              </div>
            )}

            {/* Load More Button */}
            {hasMore && campers.length > 0 && (
              <div className="flex justify-center mt-5 xl:mt-8">
                <Button
                  variant="secondary"
                  onClick={handleLoadMore}
                  disabled={loading}
                  className="min-w-[140px] py-[14px] px-8 xl:min-w-[166px] xl:py-4 xl:px-10"
                >
                  {loading ? "Loading..." : "Load more"}
                </Button>
              </div>
            )}

            {/* Loading More Indicator */}
            {loading && campers.length > 0 && (
              <div className="flex justify-center items-center p-5">
                <Loader size={20} />
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Catalog;
