import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/css/pagination";
import avatar1 from "/imgs/placeholders/avatar-1.png";
import avatar2 from "/imgs/placeholders/avatar-2.png";
import avatar3 from "/imgs/placeholders/avatar-3.png";
import avatar4 from "/imgs/placeholders/avatar-4.png";
import avatar5 from "/imgs/placeholders/avatar-5.png";
import avatar6 from "/imgs/placeholders/avatar-6.png";
import avatar7 from "/imgs/placeholders/avatar-7.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Reviews = () => {
  const reviews = [
    {
      image: avatar1,
      text: "The TDS team exceeded our expectations. Their professionalism and ability to solve complex problems made our project a success.",
      name: "John Doe",
      title: "CEO, Tech Innovators Inc.",
    },
    {
      image: avatar2,
      text: "A team of true experts. Their support and innovative solutions have significantly boosted our product’s performance.",
      name: "Jane Smith",
      title: "CTO, Visionary Labs",
    },
    {
      image: avatar3,
      text: "Working with TDS has been an incredible experience. They’re always ready to go above and beyond to ensure satisfaction.",
      name: "Mark Allen",
      title: "Product Manager, Global Solutions",
    },
    {
      image: avatar4,
      text: "The best development team we’ve ever collaborated with. Efficient, reliable, and great at problem-solving.",
      name: "Emily Johnson",
      title: "Founder, StartUp Hub",
    },
    {
      image: avatar5,
      text: "Their approach to project management and client communication is outstanding. Highly recommended!",
      name: "Michael Brown",
      title: "COO, NextGen Enterprises",
    },
    {
      image: avatar6,
      text: "They brought our ideas to life with exceptional attention to detail and creativity. A phenomenal team!",
      name: "Sara Wilson",
      title: "Creative Director, Designify",
    },
    {
      image: avatar7,
      text: "The Dev Shop team not only delivers but also educates us on best practices, helping us grow internally.",
      name: "Alex Lee",
      title: "Head of Operations, ProServe",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      once: false, // Animation will happen only once on scroll
    });
  }, []);

  return (
    <section className="pt-20 ">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="max-w-lg mx-auto mb-4 text-4xl font-bold font-heading wow animate__animated animate__fadeIn animated">
            <span>Customer </span>
            <span className="text-blue-600">Testimonials </span>
          </h2>
        </div>
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={30}
          breakpoints={{
            640: { slidesPerView: 1 }, // Mobile
            768: { slidesPerView: 2 }, // Tablet
            1024: { slidesPerView: 3 }, // Desktop
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div
                className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 flex flex-col items-center text-center mb-20"
                data-aos="fade-up"
              >
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 rounded-full mb-4 object-cover border-2 border-gray-200"
                />
                <p className="text-gray-700 italic mb-4">{review.text}</p>
                <p className="font-semibold">{review.name}</p>
                <p className="text-sm text-gray-500">{review.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;

// import React from "react";

// const Reviews = () => {
//   return (
//     // <!-- REVIEWS -->
//     <section class="pt-[4rem] md:mt-[4rem]" id="reviews">
//       <h2 class="capitalize text-[#8892b0] dark:text-[#6e6969] text-[25px] lg:text-[35px] pl-[10px] font-[600] relative header w-max">
//         Reviews
//       </h2>
//       <div class="swiper">
//         <div class="pt-[4rem] pb-[2.5rem] swiper-wrapper">
//           {/* <!--box one --> */}
//           <div class="swiper-slide text-[#8892b0] dark:text-[#514949] bg-[#112240] rounded-[5px] p-[2rem] dark:bg-[white] dark:border-[.1px] dark:border-[#8492b6] transition-transform hover:-translate-y-[10px] cursor-pointer duration-500 ease-in-out w-[100%] relative">
//             <q class="text-xs leading-[18px] md:text-[15px] md:leading-[24px] font-[600]">
//               Micheal's passion for learning, attention to detail, and work
//               ethic greatly impressed me while I was the GDSC Lead at the
//               university we both attended. He consistently delivered
//               high-quality code, contributed to key projects, and community
//               initiatives, and demonstrated a strong commitment to personal and
//               professional growth. A valuable asset to any team.
//             </q>

//             <h3 class="text-[14px] leading-[20px] pt-[2rem]">
//               Sayo Bamigbade, software Engineer Tarides.
//             </h3>
//           </div>

//           {/* <!--box two --> */}
//           <div class="swiper-slide text-[#8892b0] dark:text-[#514949] bg-[#112240] rounded-[5px] p-[2rem] dark:bg-[white] dark:border-[.1px] dark:border-[#8492b6] transition-transform hover:-translate-y-[10px] cursor-pointer duration-500 ease-in-out w-[100%] relative">
//             <q class="text-[13px] leading-[18px] md:text-[15px] md:leading-[24px] font-[600]">
//               I’ve known Micheal for over a year now and two things that makes
//               he standout is her attention to detail and her tenacity to get at
//               least 1% better than she was the previous day. I have no doubt
//               that she’ll be a valuable asset to any team.
//             </q>

//             <h3 class="text-[14px] leading-[20px] pt-[2rem] mt-auto">
//               Peace Anthony, software Engineer.
//             </h3>
//           </div>

//           {/* <!--box three --> */}
//           <div class="swiper-slide text-[#8892b0] dark:text-[#514949] bg-[#112240] rounded-[5px] p-[2rem] dark:bg-[white] dark:border-[.1px] dark:border-[#8492b6] transition-transform hover:-translate-y-[10px] cursor-pointer duration-500 ease-in-out w-[100%] relative">
//             <q class="text-[13px] leading-[18px] md:text-[15px] md:leading-[24px] font-[600]">
//               I’ve known Micheal for over a year now and two things that makes
//               he standout is her attention to detail and her tenacity to get at
//               least 1% better than she was the previous day. I have no doubt
//               that she’ll be a valuable asset to any team.
//             </q>

//             <h3 class="text-[13px] md:text-[18px] leading-[20px] pt-[2rem]">
//               Henry Trust, software Engineer.
//             </h3>
//           </div>
//         </div>

//         <div class="swiper-pagination"></div>
//       </div>
//     </section>
//   );
// };

// export default Reviews;
