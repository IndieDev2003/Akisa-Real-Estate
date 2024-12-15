import React from "react";

function Help() {
  return (
    <div className="flex flex-col w-full px-10 py-10 mt-10">
      <div className="flex flex-col md:flex-row gap-3">
        <h2 className="text-4xl">We Help You To Find Your Dream House</h2>
        <p className="w-[50%]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
          obcaecati sunt libero excepturi voluptates est, ea omnis voluptatum
          error doloribus corrupti quis enim quod et odio itaque maiores dolor,
          sequi natus commodi? Assumenda, minima odit!
        </p>
      </div>
      <div className="flex mt-10 gap-14">
        <div className="h-[400px] w-[550px] overflow-hidden rounded-xl bg-gray-00">
          <img
            src="https://i.pinimg.com/1200x/50/5b/41/505b412cbc59671d7950e6dcd00081e1.jpg"
            className="object-cover h-full w-full object-center"
            alt=""
          />
        </div>
        <div className="w-[40%] flex flex-col gap-3 items-start justify-center">
          <h3 className="text-2xl border-b pb-4">Lifetime Warranty</h3>
          <h3 className="text-2xl border-b pb-4">
            Cheapest Compared To Other Competitors
          </h3>
          <h3 className="text-2xl border-b pb-4">Stratgic Location</h3>
          <h3 className="text-2xl border-b pb-4">Low Tax</h3>
        </div>
      </div>
    </div>
  );
}

export default Help;
