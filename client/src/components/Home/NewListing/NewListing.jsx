import React from "react";
import PropertyItem from "../../PropertyItem/PropertyItem";

function NewListing() {
  return (
    <div className="w-full px-3 md:px-12">
      <div className=" flex justify-between">
        <h2 className="text-2xl">Newest Listing</h2>
        <button className="px-6 py-2 bg-orange-600 text-white rounded-lg">
          View All
        </button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 overflow-hidden gap-2 sm:gap-0 md:grid-cols-5 mt-2">
        <PropertyItem />
        <PropertyItem />
        <PropertyItem />
        <PropertyItem />
        {/* <PropertyItem /> */}
        <PropertyItem />
      </div>
    </div>
  );
}

export default NewListing;
