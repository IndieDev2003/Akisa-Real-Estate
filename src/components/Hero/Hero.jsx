import React from "react";

function Hero() {
  return (
    <div className="md:px-10 sm:py-5 h-[90vh] w-full">
      <div className="min-h-[85vh] w-full bg-slate-500 sm:rounded-xl flex flex-col items-center justify-center">
        <div className="flex flex-col items-center text-center px-4">
          <h1 className="text-5xl sm:text-6xl">Discover Your Perfect Home</h1>
          <p className="text-sm md:text-lg max-w-[80vw]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, veritatis?
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-3 mt-4 w-fit px-10 py-5 md:items-end justify-center bg-gray-300 rounded-lg">
          <div className="flex flex-col gap-1">
            <label htmlFor="location">Location</label>
            <select className="px-4 py-2 rounded-lg" name="location" id="">
              <option value="">Mumbai, India</option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="type">Type</label>
            <select className="px-4 py-2 rounded-lg" name="type" id="">
              <option value="">Residancial</option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="range">Range</label>
            <select className="px-6 py-2 rounded-lg" name="range" id="">
              <option value="">$1000+</option>
            </select>
          </div>
          <button className="px-6 py-2 bg-orange-600 rounded-lg">Search</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
