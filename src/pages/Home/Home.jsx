import React from "react";
import { useNavigate } from "react-router-dom";
import AppNavigation from "../../components/features/AppNavigation/AppNavigation";
import Button from "../../components/common/Button/Button";

const Home = () => {
  const navigate = useNavigate();

  const handleViewNowClick = () => {
    navigate("/catalog");
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <AppNavigation />

      <div className="flex overflow-hidden relative flex-1 items-center w-full min-h-screen pt-18">
        <div 
          className="absolute inset-0 z-0 w-full h-full bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("/hero.jpg")'
          }}
        ></div>

        <div className="flex relative z-10 flex-col gap-10 items-start px-16 w-full tablet:px-8 mobile:px-6 mobile:items-center mobile:text-center">
          <div className="flex flex-col gap-4 items-start w-full mobile:items-center mobile:text-center">
            <h1 className="m-0 w-full text-5xl font-semibold leading-tight font-primary text-neutral-100 tablet:text-4xl mobile:text-3xl">
              Campers of your dreams
            </h1>
            <p className="m-0 w-full text-2xl font-semibold leading-8 font-primary text-neutral-100 tablet:text-xl mobile:text-lg">
              You can find everything you want in our catalog
            </p>
          </div>

          <Button variant="primary" onClick={handleViewNowClick}>
            View Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
