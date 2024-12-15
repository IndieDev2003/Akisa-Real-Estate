import React from "react";

function PropertyItem({ proName, proLocation, proPrice, proRating, proCat }) {
  return (
    <div className="min-h-72 w-44 sm:w-52 bg-gray400 px-2 py-2 pb-4 border rounded-xl">
      <div className="bg-white h-[60%] overflow-hidden rounded-lg mb-2">
        <img
          src="https://i.pinimg.com/1200x/14/a3/30/14a330c962155e97622da9a81d41df67.jpg"
          className="rounded-lg h-full w-full object-cover"
          alt=""
        />
      </div>
      <div className="px-2">
        {!proCat ? (
          <div className="py-4"></div>
        ) : (
          <div className="">
            <h2 className="px-3 py-2 text-sm w-fit text-green-900 rounded-lg bg-green-100">{proCat}</h2>
          </div>
        )}
        <h3 className="text-2xl text-slate-900">Property 1</h3>
        <p className="text-gray-700 text-sm">Ohio, US</p>
        <div className="flex justify-between">
          <h4 className="text-xl">$350</h4>
          <p className="text-xl">4.5</p>
        </div>
      </div>
    </div>
  );
}

export default PropertyItem;
