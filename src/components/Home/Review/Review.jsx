import React from "react";

function Review() {
  return (
    <div className="h-[90vh] w-full bg-green-500 mt-10 py-10 flex flex-col md:flex-row items-center justify-center text-white">
      <div className="sm:w-[50%] px-3 sm:px-10">
        <h2 className="text-xl">James David</h2>
        <h3 className="text-5xl my-2">Nice and Comfertable House for Family</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          fugiat repellendus modi aliquam voluptatum provident sit dolore! Odit
          hic at cupiditate voluptatem ipsam voluptatum. Incidunt sint excepturi
          porro pariatur libero eius quidem repellat et, atque, praesentium
          eveniet molestias odio maxime voluptas? Non, facilis labore optio eum
          blanditiis earum magni nam?
        </p>
      </div>
      <div className="hidden sm:block h-[400px] w-[400px] bg-white rounded-xl overflow-hidden relative">
        <img
          src="https://i.pinimg.com/1200x/b1/da/a3/b1daa32b3047bf711199651cfb9f799f.jpg"
          className="h-full w-full object-cover z-20"
          alt=""
              />
             
      </div>
    </div>
  );
}

export default Review;
