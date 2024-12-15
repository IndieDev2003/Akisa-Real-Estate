import React from "react";
import PropertyItem from "../../PropertyItem/PropertyItem";

function PropertyList() {
  return (
    <div className="px-2 md:px-10 py-5">
      <div className="flex justify-between">
        <h3 className="text-xl">All Properties</h3>
        <div>
          <label htmlFor="sort">Sort by</label>
          <select
            className="border border-blue-800 px-4 py-1 rounded mx-2"
            name="sort"
            id=""
          >
            <option value="">Default Order</option>
            <option value="">by Price</option>
            <option value="">by Date</option>
          </select>
        </div>
          </div>
          
          {/* Properties List */}
          <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 md:px-10 mt-10">
              <PropertyItem proCat={'Villa'}/>
              <PropertyItem proCat={'House'}/>
              <PropertyItem proCat={'Shop'}/>
              <PropertyItem proCat={'Apartment'}/>
              <PropertyItem proCat={'Farm House'}/>
              <PropertyItem proCat={'Garage'}/>
              <PropertyItem/>
              <PropertyItem/>
              <PropertyItem/>
              <PropertyItem/>
              <PropertyItem/>
              <PropertyItem/>
              <PropertyItem/>
              <PropertyItem/>
              <PropertyItem/>
              
          </div>

          <div className="my-10 flex items-center justify-center">
              <button className="px-4 py-2 bg-blue-800 text-white rounded-md">Load More</button>
          </div>
    </div>
  );
}

export default PropertyList;
