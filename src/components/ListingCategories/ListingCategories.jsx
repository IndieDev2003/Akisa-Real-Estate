import React from "react";
import PropertyItem from "../PropertyItem/PropertyItem";

function ListingCategories() {
  return (
    <div className="my-20 px-2 sm:px-10 flex flex-col items-center">
      <div className="w-full flex flex-col gap-1 items-center text-center">
        <h2 className="text-3xl">Listing Categories</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi sunt
          neque nam!
        </p>
        <div className="flex gap-2 sm:gap-3">
          <button className="px-3 sm:px-6 py-2 border border-orange-600 text-white bg-orange-600 rounded-lg">
            All
          </button>
          <button className="px-3 sm:px-6 py-2 border border-orange-600 text-orange-600 rounded-lg">
            Houses
          </button>
          <button className="px-3 sm:px-6 py-2 border border-orange-600 text-orange-600 rounded-lg">
            Villa
          </button>
          <button className="px-3 sm:px-6 py-2 border border-orange-600 text-orange-600 rounded-lg">
            Apartment
          </button>
        </div>
      </div>
      <div className="w-full mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-5 sm:px-5">
        <PropertyItem proCat={"Villa"} />
        <PropertyItem />
        <PropertyItem />
        <PropertyItem />
        <PropertyItem />
        <PropertyItem />
        <PropertyItem />
        <PropertyItem />
        <PropertyItem />
        <PropertyItem />
      </div>
    </div>
  );
}

export default ListingCategories;
