import React from "react";

function HomeLoan() {
  return (
    <div className="w-full flex px-10 mt-10 h-[70vh] ">
      <div className="w-[50%] px-10">
        <h2 className="text-4xl">Need A Home Loan? Get Pre-Approved</h2>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aliquam
          ad nemo accusantium exercitationem numquam perspiciatis, minus
          asperiores tempore, ex maiores libero ipsum eaque inventore est quas
          quos! Exercitationem, fugit?
        </p>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
          voluptates, eligendi illum commodi ex magni? Saepe nam asperiores
          laboriosam nesciunt ad.
        </p>
        <button className="px-6 py-2 bg-orange-600 mt-5">Read More</button>
      </div>
      <div className="w-[50%] h-full flex items-center justify-center relative">
        <img
          src="https://i.pinimg.com/1200x/58/eb/5c/58eb5c3931b2171e75f6f93bd43af57a.jpg"
          className="rounded-lg h-[350px] w-[350px] object-cover"
          alt=""
        />
        <div className="h-full w-full bg-emerald-600 absolute -z-10 -right-[35%] rounded-xl"></div>
      </div>
    </div>
  );
}

export default HomeLoan;
