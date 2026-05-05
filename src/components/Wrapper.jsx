import React from "react";

function Wrapper({ children }) {
  return (
    <div className="max-w-7xl w-full mx-auto px-4 sm:px-10 py-0 sm:py-2 2xl:container">
      {children}
    </div>
  );
}

export default Wrapper;
