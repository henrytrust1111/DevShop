// import React from "react";
// import Layout from "../../components/layout/Layout";
// import TextEffect from "../../components/elements/TextEffect";
// import { useNavigate } from "react-router-dom";

// const Services = () => {
//   const navigate = useNavigate();

//   const handleScrollToFeatures = () => {
//     const element = document.getElementById("key-features");
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };
//   const handleScrollToChoose = () => {
//     const element = document.getElementById("key-features");
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };
//   return (
//     <>
//       <Layout>
//         <section
//           className="pb-8 bg-top bg-cover bg-no-repeat relative -mt-24 pt-24"
//           style={{ backgroundImage: "url('https://media.istockphoto.com/id/596384360/photo/data-safe-box.jpg?b=1&s=612x612&w=0&k=20&c=dINLm7oxgHkyqEe2Olbywg_APCT4SsA0Ncx71AIOxyM=')" }}
//         >
//           <div className="container">
//             <div className="py-12 text-center">
//               <div className="max-w-2xl mx-auto mb-8">
//                 <h2 className="text-white text-3xl lg:text-5xl mb-4 font-bold font-heading wow animate__animated animate__fadeIn">
//                   Secure Your Valuables <br />
//                   with <span className="text-navy-500">Safe Deposit Boxes</span>
//                 </h2>
//                 <div className="text-white leading-relaxed wow animate__animated animate__fadeIn">
//                   Protect your most valuable possessions with our secure and
//                   reliable safe deposit boxes at devShop. Whether
//                   it's important documents, jewelry, or sentimental items, our
//                   safe deposit boxes offer peace of mind with advanced security
//                   features.
//                 </div>
//               </div>
//               <div>
//                 <div
//                   className="tracking-wide hover-up-2 block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded wow animate__animated animate__fadeIn cursor-pointer"
//                   // href="#key-features"
//                   onClick={handleScrollToFeatures}
//                 >
//                   Key Features
//                 </div>
//                 <div
//                   className="tracking-wide hover-up-2 block sm:inline-block py-4 px-8 text-xs text-blueGray-500 hover:text-blueGray-600 text-center font-semibold leading-none bg-white rounded wow animate__animated animate__fadeIn cursor-pointer"
//                   data-wow-delay=".3s"
//                   // href="#how-we-work"
//                   onClick={handleScrollToChoose}
//                 >
//                   Why Choose Us?
//                 </div>
//               </div>
//             </div>
//             <div className="flex flex-wrap items-center justify-center max-w-4xl mx-auto pt-12 pb-4"></div>
//           </div>
//         </section>

//         <section
//           id="key-features"
//           className="pt-8 pb-12 md:py-16 lg:py-16 overflow-x-hidden"
//         >
//           <div className="container px-4 mx-auto">
//             <div className="flex flex-wrap lg:flex-nowrap">
//               <div className="w-full lg:w-1/2">
//                 <div
//                   className="lg:py-6 lg:pr-77 wow animate__animated animate__fadeIn"
//                   data-wow-delay=".3s"
//                 >
//                   <div className="mb-4">
//                     <h2
//                       className="mt-5 text-4xl font-bold font-heading wow animate__animated animate__fadeIn"
//                       data-wow-delay=".3s"
//                     >
//                       Key Features
//                     </h2>
//                   </div>
//                   <div
//                     className="flex items-start py-4 wow animate__animated animate__fadeIn"
//                     data-wow-delay=".5s"
//                   >
//                     <div className="w-8 mr-5 text-blue-500">
//                       <svg
//                         className="w-6 h-6"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
//                         ></path>
//                       </svg>
//                     </div>
//                     <div>
//                       <h3 className="mb-2 text-xl font-semibold font-heading">
//                         State-of-the-Art Security
//                       </h3>
//                       <p className="text-blueGray-400 leading-loose">
//                         Benefit from advanced security measures, including
//                         biometric access and round-the-clock surveillance.
//                       </p>
//                     </div>
//                   </div>
//                   <div
//                     className="flex items-start py-4 wow animate__animated animate__fadeIn"
//                     data-wow-delay=".7s"
//                   >
//                     <div className="w-8 mr-5 text-blue-500">
//                       <svg
//                         className="w-6 h-6"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
//                         ></path>
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
//                         ></path>
//                       </svg>
//                     </div>
//                     <div>
//                       <h3 className="mb-2 text-xl font-semibold font-heading">
//                         Privacy and Confidentiality
//                       </h3>
//                       <p className="text-blueGray-400 leading-loose">
//                         Keep your belongings private and confidential in a
//                         secure environment.
//                       </p>
//                     </div>
//                   </div>
//                   <div
//                     className="flex items-start py-4 wow animate__animated animate__fadeIn"
//                     data-wow-delay=".9s"
//                   >
//                     <div className="w-8 mr-5 text-blue-500">
//                       <svg
//                         className="w-6 h-6"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                         ></path>
//                       </svg>
//                     </div>
//                     <div>
//                       <h3 className="mb-2 text-xl font-semibold font-heading">
//                         Convenient Access
//                       </h3>
//                       <p className="text-blueGray-400 leading-loose">
//                         Access your safe deposit box during banking hours,
//                         ensuring your items are always within reach.
//                       </p>
//                     </div>
//                   </div>
//                   <div
//                     className="flex items-start py-4 wow animate__animated animate__fadeIn"
//                     data-wow-delay="1.1s"
//                   >
//                     <div className="w-8 mr-5 text-blue-500">
//                       <svg
//                         className="w-6 h-6"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           d="M3 10h4l1.68 3.37a2 2 0 001.82 1.13H17m1-2h2a2 2 0 012 2v6a2 2 0 01-2 2h-2m-4 0h-4m0-8V6a4 4 0 00-4-4H7a4 4 0 00-4 4v10a2 2 0 002 2h10a2 2 0 002-2V14"
//                         ></path>
//                       </svg>
//                     </div>
//                     <div>
//                       <h3 className="mb-2 text-xl font-semibold font-heading">
//                         Various Sizes Available
//                       </h3>
//                       <p className="text-blueGray-400 leading-loose">
//                         Choose from a range of box sizes to accommodate your
//                         specific storage needs.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="relative w-full lg:w-1/2 my-12 lg:my-0">
//                 <div
//                   className="wow animate__animated animate__fadeIn"
//                   data-wow-delay=".5s"
//                 >
//                   <img
//                     className="jump relative mx-auto rounded-xl w-full z-10"
//                     // src="/imgs/placeholders/img-1.png"
//                     src="/imgs/icons/vault.svg"
//                     alt="Banking Features"
//                   />
//                   <img
//                     className="absolute top-0 left-0 w-40 -ml-12 -mt-12"
//                     src="/imgs/elements/blob-tear.svg"
//                     alt="Decoration"
//                   />
//                   <img
//                     className="absolute bottom-0 right-0 w-40 -mr-12 -mb-12"
//                     src="/imgs/elements/blob-tear.svg"
//                     alt="Decoration"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="pt-12" id="Choose-Us">
//           <div className="container py-12 mx-auto">
//             <div className="flex flex-wrap">
//               <div
//                 className="w-full md:w-1/2 pr-12 px-3 order-0 md:order-0 mb-12 md:mb-0 wow animate__animated animate__fadeIn"
//                 data-wow-delay=".5s"
//               >
//                 <img
//                   className="sm:max-w-sm lg:max-w-full mx-auto"
//                   src="/imgs/placeholders/img-6.jpg"
//                   alt="devShop"
//                 />
//               </div>
//               <div className="w-full md:w-1/2 px-3 order-1 md:order-1">
//                 <div className="max-w-md-2">
//                   <div className="mb-4">
//                     <span
//                       className="text-xs py-1 px-3 text-blue-500 font-semibold bg-blue-50 rounded-xl wow animate__animated animate__fadeInDown"
//                       data-wow-delay=".9s"
//                     >
//                       Why choose us
//                     </span>
//                     <h2
//                       className="text-4xl mt-3 font-bold font-heading wow animate__animated animate__fadeIn"
//                       data-wow-delay=".3s"
//                     >
//                       We Provide the Best <br />
//                       <span className="text-blue-500">Banking</span> Services
//                     </h2>
//                   </div>

//                   <p
//                     className="mb-6 leading-loose text-blueGray-400 wow animate__animated animate__fadeIn"
//                     data-wow-delay=".1s"
//                   >
//                     At devShop, we are dedicated to offering
//                     comprehensive banking services tailored to meet your
//                     financial needs.
//                   </p>

//                   <div className="flex flex-wrap">
//                     <div
//                       className="w-full md:w-1/2 items-start pt-4 pb-8 wow animate__animated animate__fadeIn"
//                       data-wow-delay=".2s"
//                     >
//                       <div className="w-8 mb-5 text-blue-500">
//                         <span className="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-blue-500 text-white rounded">
//                           1
//                         </span>
//                       </div>
//                       <div>
//                         <h3 className="mb-2 text-xl font-semibold font-heading">
//                           Unmatched Security
//                         </h3>
//                         <p className="text-blueGray-400 leading-loose text-sm">
//                           At devShop, we prioritize the safety of
//                           your assets with state-of-the-art encryption,
//                           multi-factor authentication, and continuous
//                           monitoring. Your peace of mind is our top priority.
//                         </p>
//                       </div>
//                     </div>
//                     <div
//                       className="w-full md:w-1/2 items-start py-4 wow animate__animated animate__fadeIn"
//                       data-wow-delay=".3s"
//                     >
//                       <div className="w-8 mb-5 text-blue-500">
//                         <span className="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-blue-500 text-white rounded">
//                           2
//                         </span>
//                       </div>
//                       <div>
//                         <h3 className="mb-2 text-xl font-semibold font-heading">
//                           Customer-Centric Approach
//                         </h3>
//                         <p className="text-blueGray-400 leading-loose text-sm">
//                           We are committed to providing exceptional customer
//                           service. Our dedicated support team is available 24/7
//                           to assist you with any questions or concerns, ensuring
//                           you always have the help you need.
//                         </p>
//                       </div>
//                     </div>
//                     <div
//                       className="w-full md:w-1/2 items-start py-4 wow animate__animated animate__fadeIn"
//                       data-wow-delay=".4s"
//                     >
//                       <div className="w-8 mb-5 text-blue-500">
//                         <span className="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-blue-500 text-white rounded">
//                           3
//                         </span>
//                       </div>
//                       <div>
//                         <h3 className="mb-2 text-xl font-semibold font-heading">
//                           Innovative Solutions
//                         </h3>
//                         <p className="text-blueGray-400 leading-loose text-sm">
//                           We leverage the latest technology to offer
//                           cutting-edge banking solutions. From seamless online
//                           transactions to advanced mobile banking features, we
//                           make managing your finances easier and more efficient.
//                         </p>
//                       </div>
//                     </div>
//                     <div
//                       className="w-full md:w-1/2 items-start py-4 wow animate__animated animate__fadeIn"
//                       data-wow-delay=".5s"
//                     >
//                       <div className="w-8 mb-5 text-blue-500">
//                         <span className="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-blue-500 text-white rounded">
//                           4
//                         </span>
//                       </div>
//                       <div>
//                         <h3 className="mb-2 text-xl font-semibold font-heading">
//                           Transparent and Fair
//                         </h3>
//                         <p className="text-blueGray-400 leading-loose text-sm">
//                           We believe in transparency and fairness. Our terms are
//                           clear, with no hidden fees or surprises, so you can
//                           trust that you're getting a great deal.
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </Layout>
//     </>
//   );
// };

// export default Services;
import React from "react";
import Layout from "../../components/layout/Layout";

const Careers = () => {
  return (
    <>
      <Layout>
        <section
          className="pb-8 bg-top bg-cover bg-no-repeat relative -mt-24 pt-24 primary-overlay"
          style={{ backgroundImage: "url('https://www.thedevshop.co/assets/img/room.jpg')" }}
        >
          <div className="container">
            <div className="py-12 text-center">
              <h2 className="text-white text-3xl lg:text-5xl mb-4 font-bold font-heading wow animate__animated animate__fadeIn z-10">
                Join Our Team at <br />
              <span className="text-blue-500">The Dev Shop</span>
              </h2>
            
            </div>
          </div>
        </section>

        <section id="open-positions" className="pt-8 pb-12 md:py-16 lg:py-16 overflow-x-hidden">
          <div className="container px-4 mx-auto">
            <h2 className="text-4xl font-bold font-heading text-center mb-12">Open Positions</h2>

            {/* Senior Software Engineer Position */}
            <div className="mb-8">
              <h3 className="text-3xl font-semibold mb-4">Senior Software Engineer</h3>
              <h4 className="font-semibold">Minimum qualifications:</h4>
              <ul className="mb-4 list-disc pl-6">
                <li>Bachelor's degree in Computer Science, IT, or equivalent practical experience</li>
                <li>5 - 10 years of development experience</li>
                <li>Experience with modern JavaScript frameworks (e.g., Angular, React, VueJS, Node.js)</li>
              </ul>
              <h4 className="font-semibold">Preferred qualifications:</h4>
              <ul className="mb-4 list-disc pl-6">
                <li>Mastery of Object-Oriented Programming</li>
                <li>Understanding of software patterns</li>
                <li>Excellent knowledge of TypeScript</li>
                <li>Proficiency with source control (Git, SVN, TFS)</li>
                <li>Strong communication, project management, and organizational skills</li>
              </ul>
              <p className="mb-6">
                As a Senior Software Engineer, you will lead and facilitate work across various projects, mentoring other engineers, and working closely with clients to turn their requirements into full solutions.
              </p>
            </div>

            {/* Software Engineer Position */}
            <div className="mb-8">
              <h3 className="text-3xl font-semibold mb-4">Software Engineer</h3>
              <h4 className="font-semibold">Minimum qualifications:</h4>
              <ul className="mb-4 list-disc pl-6">
                <li>Bachelor's degree in Computer Science, IT, or equivalent practical experience</li>
                <li>1 - 3 years of development experience</li>
                <li>Experience with modern JavaScript frameworks (e.g., Angular, React, VueJS, Node.js)</li>
              </ul>
              <h4 className="font-semibold">Preferred qualifications:</h4>
              <ul className="mb-4 list-disc pl-6">
                <li>Excellent knowledge of TypeScript</li>
                <li>Proficiency with source control (Git, SVN, TFS)</li>
                <li>Strong communication, project management, and organizational skills</li>
              </ul>
              <p className="mb-6">
                As a Software Engineer, you will work on diverse projects across multiple platforms, collaborating with other engineers, UX designers, and project managers to develop high-quality applications.
              </p>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="pt-12 pb-12">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold font-heading text-center mb-8">Apply Now</h2>
            <form className="max-w-xl mx-auto">
              <div className="mb-4">
                <label className="block mb-2">First Name</label>
                <input className="w-full px-4 py-2 border border-gray-300 rounded" type="text" name="firstName" />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Last Name</label>
                <input className="w-full px-4 py-2 border border-gray-300 rounded" type="text" name="lastName" />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Email Address</label>
                <input className="w-full px-4 py-2 border border-gray-300 rounded" type="email" name="email" />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Phone Number</label>
                <input className="w-full px-4 py-2 border border-gray-300 rounded" type="tel" name="phone" />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Message</label>
                <textarea className="w-full px-4 py-2 border border-gray-300 rounded" name="message" rows="4"></textarea>
              </div>
              <div className="mb-6">
                <label className="block mb-2">Attach Resume</label>
                <input type="file" name="resume" />
              </div>
              <button type="submit" className="w-full py-2 bg-blue-500 text-white font-semibold rounded">Submit Application</button>
            </form>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Careers;
