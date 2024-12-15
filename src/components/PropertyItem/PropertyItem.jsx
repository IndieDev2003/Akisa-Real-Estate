import React from "react";

function PropertyItem({ proName, proLocation, proPrice, proRating, proCat,proSale }) {
  return (
    <div className="min-h-64 max-h-[300px] flex flex-col justify-between w-44 sm:w-52 bg-gray400 px-2 py-2 pb-4 border rounded-xl">
      <div className="bg-white h-[60%] flex-1 overflow-hidde rounded-lg mb-2 relative">
        <img
          src="https://i.pinimg.com/1200x/14/a3/30/14a330c962155e97622da9a81d41df67.jpg"
          className="rounded-lg h-full w-full object-cover"
          alt=""
        />
        {proSale ? <p className="absolute text-xl bg-whie z-10 -top-5 -right-5 px-2 py-3 rotate-[30deg] text-white rounded-full bg-red-500">
          Sale
        </p>:''}
      </div>
      <div className="px-2">
        {!proCat ? (
          <div className="h-0"></div>
        ) : (
          <div className="">
            <h2 className="px-4 py-1 text-sm w-fit text-green-900 rounded-lg bg-green-100">
              {proCat}
            </h2>
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
