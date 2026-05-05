import React from "react";
import Wrapper from "./Wrapper";
import { featuresData } from "../../public/assets";

function Features() {
  return (
    <div className="bg-linear-to-r from-pink-50 to-sky-50 sm:py-14 py-8">
      <Wrapper>
        {/* main div */}
        <div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-2xl sm:text-4xl font-semibold text-blue-950 text-center  ">
              Start your journey With us
            </p>
            <span className="text-base text-gray-700 text-center leading-8 sm:w-3xl pt-3">
              We offer a brand new approach to the most basic learning
              paradigms. Choose from a wide range of learning options and gain
              new skills! Our school is know.
            </span>
          </div>
        </div>

        {/* features card */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
          {featuresData?.map((i, index) => (
            <div key={i?.id} className="bg-white p-8">
              <span className="bg-sky-50 text-xl w-10 h-10 flex justify-center items-center rounded-full">
                0{index + 1}
              </span>
              <p className="text-blue-950 font-semibold text-xl pt-2">
                {i?.title}
              </p>
              <p className="text-base text-gray-700 pt-2 leading-7">
                {i?.description}
              </p>
            </div>
          ))}
        </div>
      </Wrapper>
    </div>
  );
}

export default Features;
