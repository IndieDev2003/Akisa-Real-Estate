import React from "react";

function AgencyItem({agencyName,agencyAddress,agencyContact}) {
  return (
    <div className="flex flex-col md:flex-row px-3 py-3  md:py-10 rounded-xl border-t drop-shadow-2xl shadow-2xl bg-white gap-4 md:max-w-[60vw] md:items-center justify-between">
      <img
        src="https://i.pinimg.com/1200x/8f/40/2a/8f402adfa939127c7d8a189e0476d42f.jpg"
        className="h-20 w-20 md:h-40 md:w-40 object-cover rounded-xl border-4 border-blac shadow-xl drop-shadow-2xl"
        alt=""
          />
          <div className="flex-1 h-full">
              <h2 className="text-lg md:text-3xl">Grand House Real Estate</h2>
              <p>Sec 17, faridabad, Haryana, India</p>
              <p>📞 +91 1234567890</p>
              <p>📧 admin@faridabad.com</p>
          </div>
          <button className="text-lg border py-2 px-6 bg-orange-600 text-white rounded-lg">View Listings</button>
    </div>
  );
}

export default AgencyItem;
