import React from "react";
import Wrapper from "./Wrapper";
import { categoriesData } from "../../public/assets";

function PopularCategories() {
  return (
    <div className="bg-linear-to-l from-pink-50 to-sky-50 py-8 sm:py-14">
      <Wrapper>
        {/* main div */}
        <div>
          {/* content */}
          <div>
            <div className="flex flex-col justify-center items-center">
              <p className="text-2xl sm:text-4xl font-semibold text-blue-950 text-center  ">
                Find out by popular Categories
              </p>
              <span className="text-base text-gray-700 leading-8 text-center sm:w-3xl pt-3">
                We offer a brand new approach to the most basic learning
                paradigms. Choose from a wide range of learning options and gain
                new skills! Our school is know.
              </span>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-5 mt-6">
            {categoriesData?.map((i) => (
                <div key={i?.id} className="bg-white p-5 rounded-full flex items-center justify-between gap-5">
                    <span className="w-12 h-12 rounded-full p-2 bg-sky-50 text-sky-600 text-center flex items-center justify-center">{i?.icon}</span>
                    <p>{i?.title}</p>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default PopularCategories;
