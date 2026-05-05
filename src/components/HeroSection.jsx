import React from "react";
import Wrapper from "./Wrapper";
import Image from "next/image";
import { img } from "../../public/assets";
import { UserCheck } from "lucide-react";

function HeroSection() {
  return (
    <div className="bg-linear-to-l from-pink-50 to-sky-100">
      <Wrapper>
        {/* Left content */}
        <div className="flex flex-col sm:flex-row justify-between items-center py-5 sm:py-10 ">
          <div className="max-w-lg">
            <p className="text-2xl text-blue-950 sm:text-6xl font-extrabold sm:leading-20 mb-5 sm:mb-5">
              {" "}
              <span className="text-sky-600">Smart Study</span> Where Knowledge{" "}
              <span className="text-sky-600">Meets</span> the Web
            </p>
            <span className="text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              consectetur adipiscing elit tempor ut labore
            </span>
          </div>

          {/* Right side image */}
          <div className="relative">
            <Image src={img?.hero} alt="study img" width={500} height={200} />

            {/* student card */}
            <div className="bg-white absolute bottom-56 rounded-md right-5 p-5 flex items-center gap-5 max-w-56">
              {/* icon */}
              <p className="bg-sky-100 w-12 h-12 rounded-full flex justify-center items-center">
                <UserCheck size={20} className="" />
              </p>
              <div>
                <p className="text-xl font-semibold text-gray-700">45000+</p>
                <span className="text-sm">Active Student</span>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default HeroSection;
