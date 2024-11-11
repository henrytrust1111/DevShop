import { useEffect } from "react";
import TextEffect from "../../components/elements/TextEffect";
import Layout from "../../components/layout/Layout";
import Reviews from "./Reviews";
import AOS from "aos";
// import "aos/dist/aos.css";
import Why from "./Why";
import HowWeWork from "./HowWeWork";
import KeyFeatures from "./KeyFeatures";
import Pricing from "./Pricing";

function Home() {
  //   const navigate = useNavigate()

  const handleScrollToFeatures = () => {
    const element = document.getElementById("key-features");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleScrollToWork = () => {
    const element = document.getElementById("how-we-work");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // useEffect(() => {
  //   AOS.init({
  //     duration: 800, // Animation duration
  //     once: true, // Animation will happen only once on scroll
  //   });
  // }, []);

  return (
    <>
      <Layout>
        <section className="w-full pb-8 bg-top bg-cover bg-no-repeat -mt-24 pt-24 bg-bg1">
          <div className="container w-full">
            <div className="py-12 text-center">
              <div className="max-w-2xl mx-auto mb-8">
                <h2
                  data-aos="fade-right"
                  className="text-white text-3xl lg:text-5xl mb-4 font-bold font-heading wow animate__animated animate__fadeIn"
                >
                  Committed to People <br />
                  Committed <span className="text-blue-500">to the Future</span>
                </h2>
                <div
                  data-aos="fade-up"
                  className="text-blueGray-400 leading-relaxed wow animate__animated animate__fadeIn"
                >
                  We are <strong className="text-blue-500">DevShop</strong>, a
                  Creative Design{" "}
                  <div className="typewrite d-inline text-brand">
                    <TextEffect text1="Web Agency" text2="Social Marketing" />
                  </div>
                </div>
              </div>
              <div>
                <a
                  data-aos="fade-right"
                  className="tracking-wide hover-up-2 block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded wow animate__animated animate__fadeIn"
                  onClick={handleScrollToFeatures}
                >
                  Key Features
                </a>
                <a
                  data-aos="fade-left"
                  className="tracking-wide hover-up-2 block sm:inline-block py-4 px-8 text-xs text-blueGray-500 hover:text-blueGray-600 text-center font-semibold leading-none bg-white rounded wow animate__animated animate__fadeIn"
                  data-wow-delay=".3s"
                  onClick={handleScrollToWork}
                >
                  How We Work?
                </a>
              </div>
            </div>


            <div className="flex flex-wrap items-center justify-center max-w-4xl mx-auto pt-12 pb-4">
              <div
                className="w-1/2 md:w-1/3 lg:w-1/5 px-8 mb-8 wow animate__animated animate__fadeIn"
                data-wow-delay=".1s"
              >
                <img className="mx-auto" src="/brand-1.png" alt="DevShop" />
              </div>
              <div
                className="w-1/2 md:w-1/3 lg:w-1/5 px-8 mb-8 wow animate__animated animate__fadeIn"
                data-wow-delay=".3s"
              >
                <img className="mx-auto" src="/brand-2.png" alt="DevShop" />
              </div>
              <div
                className="w-1/2 md:w-1/3 lg:w-1/5 px-8 mb-8 wow animate__animated animate__fadeIn"
                data-wow-delay=".5s"
              >
                <img className="mx-auto" src="/brand-3.png" alt="DevShop" />
              </div>
              <div
                className="w-1/2 md:w-1/3 lg:w-1/5 px-8 mb-8 wow animate__animated animate__fadeIn"
                data-wow-delay=".7s"
              >
                <img className="mx-auto" src="/brand-4.png" alt="DevShop" />
              </div>
              <div
                className="hidden md:block w-1/2 md:w-1/3 lg:w-1/5 px-8 mb-8 wow animate__animated animate__fadeIn"
                data-wow-delay=".9s"
              >
                <img className="mx-auto" src="/brand-5.png" alt="DevShop" />
              </div>
            </div>
          </div>
        </section>
        <Why />
        <HowWeWork />
        <KeyFeatures />
        <Pricing />
        <Reviews />
      </Layout>
    </>
  );
}
export default Home;
