import React from "react";
import WhyRightContainer from "./WhyRightContainer";

const Why = () => {
  return (
    <section className="container grid grid-cols-1 sm:grid-cols-2 py-24">
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 p-12 sm:p-0 gap-4">
        {/* box1 */}
        <div className="pt-10 pb-8 px-6 bg-white text-center rounded shadow border border-gray-100">
          <div className="text-blue-500 mx-auto mb-4">
            <svg
              className="w-8 h-8 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              ></path>
            </svg>
          </div>
          <h3 className="mb-2 font-bold font-heading">Looking for Creative</h3>
          <p className="text-sm text-blueGray-400 leading-loose">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <div className="pt-10 pb-8 px-6 bg-white text-center rounded shadow border border-gray-100">
          <div className="text-blue-500 mx-auto mb-4">
            <svg
              className="w-8 h-8 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
              ></path>
            </svg>
          </div>
          <h3 className="mb-2 font-bold font-heading">
            Project Initialization
          </h3>
          <p className="text-sm text-blueGray-400 leading-loose">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
      </div>

      {/* right container */}
      <WhyRightContainer />
    </section>
  );
};

export default Why;

// import React from "react";

// const Why = () => {
//   return (
//     <section className="container py-24">
//       <div className=" bg-green-700">
//         <div className="flex flex-wrap lg:flex-nowrap">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 lg:max-w-sm mx-auto ">

//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Why;
