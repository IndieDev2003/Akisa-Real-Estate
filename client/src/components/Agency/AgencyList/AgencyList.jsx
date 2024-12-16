import React from "react";
import AgencyItem from "../AgencyItem/AgencyItem";

function AgencyList() {
  return (
    <div>
      
      <div className="w-full h-max relative px-3 md:px-10 py-10 flex flex-col md:flex-row gap-2 justify-between">
      <div className="flex flex-col gap-4">
        <AgencyItem />

        <AgencyItem />
        <AgencyItem />
        <AgencyItem />
        <AgencyItem />
        <AgencyItem />
      </div>
      <div>
        <div className="w-full md:w-80 min-h-80  md:sticky top-5 px-5 py-2 border-t border-gray-200 rounded-lg bg-white drop-shadow-xl shadow-xl">
          <h3 className="text-3xl">Discover</h3>
          <div className="capitalize text-lg mt-5 ">
            <div className="flex w-64 justify-between">
              <h2>Villa</h2>
              <p>(10)</p>
            </div>
            <div className="flex w-64 justify-between">
              <h2>Shop</h2>
              <p>(10)</p>
            </div>
            <div className="flex w-64 justify-between">
              <h2>Apartment</h2>
              <p>(10)</p>
            </div>
            <div className="flex w-64 justify-between">
              <h2>Garage</h2>
              <p>(10)</p>
            </div>
            <div className="flex w-64 justify-between">
              <h2>Office</h2>
              <p>(10)</p>
            </div>
            <div className="flex w-64 justify-between">
              <h2>Studio</h2>
              <p>(10)</p>
            </div>
            <div className="flex w-64 justify-between">
              <h2>House</h2>
              <p>(10)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default AgencyList;
