import React from "react";
import { Link } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";
import img1 from "../images/products/nav-kit.png";
import img2 from "../images/products/mower.png";
import img3 from "../images/products/platform.png";
import img4 from "../images/products/osc.png";

const Portfolio = () => {
  useTranslation();
  return (
    <>
      <div className="my-4 py-4" id="portfolio">
        <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
          <Trans i18nKey="products.title">products</Trans>
        </h2>
        <div className="flex justify-center">
          <div className="w-24 border-b-4 border-blue-900 mb-8"></div>
        </div>

        <div className="px-4" data-aos="fade-down" data-aos-delay="600">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">
              <div className="m-2 text-justify text-sm">
                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">
                  <Trans i18nKey="products.product-1.title">
                    Robot Self-navigation Kit
                  </Trans>
                </h4>
                <p className="text-md font-medium leading-5 h-auto md:h-24">
                  <Trans i18nKey="products.product-1.desc">
                    The kit includes main controller and relevant sensors, it
                    also includes core algorithms like mapping, localization,
                    perception, PnC, etc. Suitable for both indoor and outdoor
                    usages.
                  </Trans>
                </p>
                <img alt="card img" className="rounded-t w-full" src={img1} />
                <div className="flex justify-center my-4">
                  <Link
                    to="/get-demo"
                    className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl"
                  >
                    <Trans i18nKey="products.schedule-btn">Schedule Demo</Trans>
                    <svg
                      className="w-4 h-4 ml-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">
                  <Trans i18nKey="products.product-2.title">
                    Garden Robot Solution
                  </Trans>
                </h4>
                <p className="text-md font-medium leading-5 h-auto md:h-24">
                  <Trans i18nKey="products.product-2.desc">
                    Compelete controller, sensor and actuator solution for
                    robotic mower and snow robots, highly customizable based on
                    clients' different needs.
                  </Trans>
                </p>
                <img alt="card img" className="rounded-t w-full" src={img2} />
                <div className="flex justify-center my-4">
                  <Link
                    to="/get-demo"
                    className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl"
                  >
                    <Trans i18nKey="products.schedule-btn">Schedule Demo</Trans>
                    <svg
                      className="w-4 h-4 ml-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                </div>

                {/* <ul className="border-t border-gray-300 py-8 space-y-6">
                                    <li className="flex items-center space-x-2 px-8">
                                        <span className="bg-blue-600 rounded-full p-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                            </svg>
                                        </span>
                                        <span className="text-gray-600 capitalize">Free Setup Guidance</span>
                                    </li>
                                </ul> */}
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">
                  <Trans i18nKey="products.product-3.title">
                    Smart Management Platform
                  </Trans>
                </h4>
                <p className="text-md font-medium leading-5 h-auto md:h-24">
                  <Trans i18nKey="products.product-3.desc">
                    All-in-one robot fleet management, asset management and
                    multi-robot dispatching platform
                  </Trans>
                </p>
                <img alt="card img" className="rounded-t w-full" src={img3} />
                <div className="flex justify-center my-4">
                  <Link
                    to="/get-demo"
                    className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl"
                  >
                    <Trans i18nKey="products.schedule-btn">Schedule Demo</Trans>
                    <svg
                      className="w-4 h-4 ml-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">
                  <Trans i18nKey="products.product-4.title">
                    Smart Sensors
                  </Trans>
                </h4>
                <p className="text-md font-medium leading-5 h-auto md:h-24">
                  <Trans i18nKey="products.product-4.desc">
                    Cost-effective smart camera with on-device perception
                    capabilities for different applications, supports various DL
                    algorithms like classification, detection, segmentation etc.
                  </Trans>
                </p>
                <img alt="card img" className="rounded-t w-full" src={img4} />
                <div className="flex justify-center my-4">
                  <Link
                    to="/get-demo"
                    className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl"
                  >
                    <Trans i18nKey="products.schedule-btn">Schedule Demo</Trans>
                    <svg
                      className="w-4 h-4 ml-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
