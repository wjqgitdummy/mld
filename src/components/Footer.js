import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useTranslation, Trans } from "react-i18next";

const Footer = () => {
  const { i18n } = useTranslation();
  return (
    <>
      <footer>
        <div className="footer max-w-full mx-auto px-4 sm:px-6 bg-gray-100 border-t border-b py-30">
          {/* Top area: Blocks */}
          <div className="grid sm:grid-cols-12 gap-5 py-8 md:py-12 border-t border-gray-200 lg:ml-11">
            {/* 1st block */}
            <div className="col-span-12 lg:col-span-4">
              <div className="box-border border-b-4 border-blue-900 p-8 bg-gray-200 text-gray-600 text-center rounded-lg xl:w-80 mx-auto">
                <h3 className="font-bold text-4xl mb-4">Ceres AI</h3>
                <div className="text-md font-medium text-gray-600">
                  {/* <h5>Ceres AI.</h5> */}
                  <p>
                    <Trans i18nKey="contact.address.line-1">24F Bld. 3</Trans>
                  </p>
                  <p>
                    <Trans i18nKey="contact.address.line-2">
                      Xizi International Center
                    </Trans>
                  </p>
                  <p>
                    <Trans i18nKey="contact.address.line-3">Hangzhou</Trans>
                  </p>
                </div>
              </div>
            </div>

            {/* 2nd block */}
            <div className="col-span-6 md:col-span-6 lg:col-span-2 ml-7 mx-auto">
              <h6 className="text-[#013289] text-xl font-bold mb-4">
                <Trans i18nKey="footer.links">LINKS</Trans>
              </h6>
              <ul className="text-md">
                <li className="mb-2">
                  <HashLink
                    to="/#about"
                    className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    <Trans i18nKey="navlink.about">About</Trans>
                  </HashLink>
                </li>
                <li className="mb-2">
                  <HashLink
                    to="/#services"
                    className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    <Trans i18nKey="navlink.services">Services</Trans>
                  </HashLink>
                </li>
                <li className="mb-2">
                  <HashLink
                    to="/contact#contact"
                    className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    <Trans i18nKey="navlink.contact">Contact</Trans>
                  </HashLink>
                </li>
              </ul>
            </div>

            {/* 3rd block */}
            <div className="col-span-6 md:col-span-6 lg:col-span-2 mx-auto">
              <h6 className="text-[#013289] text-xl font-bold mb-4">
                <Trans i18nKey="footer.services">SERVICES</Trans>
              </h6>
              <ul className="text-md">
                <li className="mb-2">
                  <HashLink
                    to="/#services"
                    className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    <Trans i18nKey="services.service-1.title">
                      Full Design
                    </Trans>
                  </HashLink>
                </li>
                <li className="mb-2">
                  <HashLink
                    to="#"
                    className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    <Trans i18nKey="services.service-2.title">
                      Customization
                    </Trans>
                  </HashLink>
                </li>
                <li className="mb-2">
                  <HashLink
                    to="#"
                    className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    <Trans i18nKey="services.service-3.title">
                      Algorithm & SW Customization
                    </Trans>
                  </HashLink>
                </li>
                <li className="mb-2">
                  <HashLink
                    to="/#services"
                    className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    <Trans i18nKey="services.service-4.title">
                      General AI Consultation
                    </Trans>
                  </HashLink>
                </li>
              </ul>
            </div>

            {/* 4th block */}
            <div className="col-span-12 text-center mx-auto lg:col-span-4 font-bold uppercase text-blue-900">
              <div className="text-xl mb-6">
                <Trans i18nKey="footer.social-media.title">
                  SOCIAL MEDIA LINKS
                </Trans>
              </div>

              <div className="text-md font-medium mb-6">
                <Trans i18nKey="footer.social-media.desc">
                  FOLLOW US ON SOCIAL MEDIA
                </Trans>
              </div>
              <div className="mx-auto text-center mt-2">
                <ul className="flex justify-center mb-4 md:mb-0">
                  <li>
                    <Link
                      to="#"
                      className="flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                      aria-label="Twitter"
                    >
                      <svg
                        className="w-8 h-8 fill-current mx-auto"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {i18n.language === "cn" ? (
                          <path
                            d="M16.6,9.8c0.5,0.5,0.8,1.2,0.9,2c1.7-0.5,3-0.4,3.9,0.5c0.8,0.8,0.9,2,0.6,3c1.4,0.7,2.5,1.8,2.5,3.4
                          c0,1.9-1.3,3.5-3,4.6c-1.7,1.1-4,1.7-6.5,1.7s-4.8-0.6-6.5-1.7c-1.7-1.1-3-2.7-3-4.6c0-1.8,0.8-3.6,2-5.2c1.2-1.6,2.9-3,4.7-4
                          C13.9,8.8,15.6,8.8,16.6,9.8z M15.2,11.2c-0.2-0.2-0.8-0.5-2,0.1c-1.6,0.8-3,2-4.1,3.4c-1.1,1.4-1.6,2.8-1.6,3.9c0,1,0.6,2,2,2.9
                          c1.4,0.8,3.3,1.4,5.5,1.4c2.2,0,4.1-0.6,5.5-1.4c1.4-0.9,2-1.9,2-2.9c0-0.7-0.6-1.4-2.2-2c-0.3-0.1-0.5-0.3-0.6-0.7
                          c-0.1-0.3,0-0.6,0.2-0.9c0.5-0.7,0.4-1.2,0.2-1.4l0,0l0,0l-0.1,0c-0.3-0.2-1.3-0.4-3.3,0.7c-0.4,0.2-0.8,0.1-1.1-0.2
                          c-0.3-0.3-0.4-0.8-0.2-1.1C15.7,12.1,15.5,11.5,15.2,11.2z M20.5,7c1.6,0,3.1,0.6,4.2,1.8s1.8,2.7,1.8,4.2c0,0.6-0.4,1-1,1
                          s-1-0.4-1-1c0-1.1-0.4-2.1-1.2-2.8C22.6,9.4,21.6,9,20.5,9c-0.6,0-1-0.4-1-1C19.5,7.4,19.9,7,20.5,7z"
                          />
                        ) : (
                          <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                        )}
                      </svg>
                    </Link>
                  </li>
                  <li className="ml-4">
                    <Link
                      to="#"
                      className="flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                      aria-label="Facebook"
                    >
                      <svg
                        className="w-8 h-8 fill-current"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {i18n.language === "cn" ? (
                          <path
                            class="st0"
                            d="M20,14c3.2,0,6,2.2,6,5.2c0,1.7-0.9,3.2-2.3,4.1c0,0.3,0,0.5,0,0.8c0,0.5-0.4,0.9-0.9,0.9
	c-0.7,0-1.3-0.2-1.8-0.6c-0.3,0-0.7,0.1-1,0.1c-3.2,0-6-2.2-6-5.2S16.8,14,20,14z M13.5,7c3.8,0,7.1,2.5,7.5,6.1
	c-0.3,0-0.6-0.1-1-0.1c-3.5,0-7,2.5-7,6.2c0,0.4,0,0.7,0.1,1c-0.3,0-0.6,0-0.9-0.1c-0.7,0.5-1.4,0.9-2.3,0.9c-0.5,0-0.9-0.4-0.9-1
	l0-0.2l0,0l0-0.4c0-0.2,0-0.4-0.1-0.6C7.2,17.7,6,15.8,6,13.6C6,9.8,9.5,7,13.5,7z M18,17c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1
	c0.6,0,1-0.4,1-1C19,17.4,18.6,17,18,17z M22,17c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1s1-0.4,1-1C23,17.4,22.6,17,22,17z M11,10
	c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1c0.6,0,1-0.4,1-1C12,10.4,11.6,10,11,10z M16,10c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1
	c0.6,0,1-0.4,1-1C17,10.4,16.6,10,16,10z"
                          />
                        ) : (
                          <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                        )}
                      </svg>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center md:justify-between justify-center mx-auto px-4">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center py-2">
              <div className="text-sm text-gray-200 font-semibold py-1">
                Copyright &copy; {new Date().getFullYear()}
                {"  "}
                <HashLink to="#" className=" hover:text-gray-900">
                  Ceres AI
                </HashLink>
                . <Trans i18nKey="footer.copyright">All rights reserved.</Trans>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
