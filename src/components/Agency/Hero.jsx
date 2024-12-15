import React from "react";

function Hero() {
  return (
    <div className="h-[60vh] md:h-[40vh] w-full sm:px-10 sm:py-10 relative flex items-center justify-center">
      <div className=" absolute z-10 bg-black bg-[url(https://i.pinimg.com/1200x/97/40/ca/9740ca623b3daa6c18766d9d9748591f.jpg)] bg-cover h-full w-full">
      </div>
        <h2 className="text-4xl text-black px-4 py-2 boder rounded-lg backdrop-blur-xl md:backdrop-blur-sm shadow-lg shadow-white bg-wite z-20 ">Our Offline Agencies</h2>
    </div>
  );
}

export default Hero;
