import React from 'react'

const HowWeWork = () => {
  return (
    <section
    className="py-20 xl:bg-contain bg-top bg-no-repeat"
    style={{
      backgroundImage: "url('assets/imgs/backgrounds/intersect.svg')",
    }}
    id="how-we-work"
  >
    <div className="container">
      <div className="flex flex-wrap items-center justify-between max-w-2xl lg:max-w-full mb-12">
        <div
          data-aos="fade-right"
          className="w-full lg:w-1/2 mb-4 lg:mb-0"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading wow animate__animated animate__fadeInDown">
            <span>We are </span>
            <span className="text-blue-500">awesome team </span>
            <br />
            <span>for your business dream</span>
          </h2>
        </div>
        {/* <div data-aos="fade-left" className="w-full lg:w-1/2">
          <p className="text-blueGray-400 leading-loose wow animate__animated animate__fadeIn">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            luctus eget justo et iaculis. Quisque vitae nulla malesuada,
            auctor arcu vitae, luctus nisi. Sed elementum vitae ligula id
            imperdiet.
          </p>
        </div> */}
      </div>
      <div className="flex flex-wrap -mx-3 -mb-6 text-center">
        <div
          className="hover-up-5 w-full md:w-1/2 lg:w-1/3 px-3 mb-6 wow animate__animated animate__fadeIn"
          data-wow-delay=".3s"
        >
          <div
            data-aos="fade-up"
            className="p-12 bg-white shadow rounded"
          >
            <div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">
              1
            </div>
            <img
              className="h-36 mx-auto my-4"
              src="/imgs/illustrations/eating.svg"
              alt="DevShop"
            />
            <h3 className="mb-2 font-bold font-heading text-xl">
              Project Initialization
            </h3>
            <p className="text-sm text-blueGray-400 leading-relaxed">
              Project initiation ensures that you lay a strong foundation
              for a new project in your company our team.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-down"
          className="hover-up-5 w-full md:w-1/2 lg:w-1/3 px-3 mb-6 wow animate__animated animate__fadeIn"
          data-wow-delay=".5s"
        >
          <div className="p-12 bg-white shadow rounded">
            <div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">
              2
            </div>
            <img
              className="h-36 mx-auto my-4"
              src="/imgs/illustrations/space.svg"
              alt="DevShop"
            />
            <h3 className="mb-2 font-bold font-heading text-xl">
              Project planning
            </h3>
            <p className="text-sm text-blueGray-400 leading-relaxed">
              A project plan is essential to keep everything related to
              the project organized, methodical, and on track.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="hover-up-5 w-full lg:w-1/3 px-3 mb-6"
        >
          <div
            className="p-12 bg-white shadow rounded wow animate__animated animate__fadeIn"
            data-wow-delay=".7s"
          >
            <div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">
              3
            </div>
            <img
              className="h-36 mx-auto my-4"
              src="/imgs/illustrations/tasks.svg"
              alt="DevShop"
            />
            <h3 className="mb-2 font-bold font-heading text-xl">
              Project organization
            </h3>
            <p className="text-sm text-blueGray-400 leading-relaxed">
              Moving forward you will be able to keep yourself and your
              team on track, and address challenges early.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default HowWeWork