import React from "react";

function Hero() {
  return (
    <div className="h-[50vh] w-full relative flex items-center justify-center bg-[url(https://i.pinimg.com/1200x/1e/6a/02/1e6a0272d5eeb88439b0d6478d5757db.jpg)] bg-cover">
      <div className="bg-slate-300 md:backdrop-blur-xl flex flex-col items-center md:flex-row md:gap-5 border rounded-lg px-3 md:px-10 py-3 md:py-5">
        {/* Location Selector */}
        <div className="flex flex-col w-max gap-1">
          <label className="text-blue-900 font-medium" htmlFor="location">Select Location</label>
          <select name="location" id="" className="px-4 py-1 bg-white rounded-[5px]">
            <option value="">Mumbai, India</option>
            <option value="">Chandigarh, India</option>
          </select>
        </div>
        {/* Property Type Selector */}
        <div className="flex flex-col w-full gap-1">
          <label className="text-blue-900 font-medium" htmlFor="type">Select Type</label>
          <select name="type" id="" className="px-4 py-1 bg-white rounded-[5px]">
            <option value="">Commercial</option>
            <option value="">Rented</option>
            <option value="">Villa</option>
            <option value="">House</option>
          </select>
        </div>
        {/* Max Pricing Selector */}
        <div className="flex flex-col w-full gap-1">
          <label className="text-blue-900 font-medium" htmlFor="range">Range</label>
          <select name="range" id="" className="px-4 py-1 bg-white rounded-[5px]">
            <option value="">$100+</option>
            <option value="">$1000+</option>
            <option value="">$10,000+</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Hero;
