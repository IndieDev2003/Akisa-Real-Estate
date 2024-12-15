import React from "react";

function AgencyItem({agencyName,agencyAddress,agencyContact}) {
  return (
    <div className="my- flex px-10 py-10 rounded-xl border-t drop-shadow-2xl shadow-2xl bg-white gap-4 max-w-[60vw] items-center justify-between">
      <img
        src="https://i.pinimg.com/1200x/8f/40/2a/8f402adfa939127c7d8a189e0476d42f.jpg"
        className="h-40 w-40 object-cover rounded-xl border-4 border-blac shadow-xl drop-shadow-2xl"
        alt=""
          />
          <div className="flex-1 h-full">
              <h2 className="text-3xl">Grand House Real Estate</h2>
              <p>Sec 17, faridabad, Haryana, India</p>
              <p>📞 +91 1234567890</p>
              <p>📧 admin@faridabad.com</p>
          </div>
          <button className="text-lg border py-2 px-6 bg-orange-600 text-white rounded-lg">View Listings</button>
    </div>
  );
}

export default AgencyItem;
