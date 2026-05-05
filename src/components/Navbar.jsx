import React from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";

function Navbar() {
  return (
    <div className="shadow sm:px-5 py-2">
      <Wrapper>
        {/* main div */}
        <div className="flex justify-between items-center ">
          {/* Logo */}
          <Link href={'/'}>
            <div className="flex items-center gap-2">
              <img src="./logo.png" alt="Logo" className="w-10" />
              <p className="text-xl font-semibold text-gray-800">
                EduBroadcast
              </p>
            </div>
          </Link>

          {/* Login button */}
          <div>
            <Link href={"/login"}>
              <button className="sm:px-5 px-3 sm:py-2 py-1.5 text-sm sm:text-base rounded-lg text-white bg-sky-500 hover:bg-orange-500 duration-200 transition-all   cursor-pointer">
                Login
              </button>
            </Link>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default Navbar;
