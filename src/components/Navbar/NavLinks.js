import React from "react";
import { HashLink } from "react-router-hash-link";
import { useTranslation, Trans } from "react-i18next";

const langs = {
  en: { displayName: "EN" },
  cn: { displayName: "中" },
};

const NavLinks = () => {
  const { i18n } = useTranslation();

  return (
    <>
      <HashLink
        className="px-4 font-extrabold text-gray-500 hover:text-blue-900"
        smooth
        to="/#about"
      >
        <Trans i18nKey="navlink.about">About</Trans>
      </HashLink>
      <HashLink
        className="px-4 font-extrabold text-gray-500 hover:text-blue-900"
        smooth
        to="/#services"
      >
        <Trans i18nKey="navlink.services">Services</Trans>
      </HashLink>
      <HashLink
        className="px-4 font-extrabold text-gray-500 hover:text-blue-900"
        to="/#portfolio"
      >
        <Trans i18nKey="navlink.products">Products</Trans>
      </HashLink>
      <HashLink
        className="px-4 font-extrabold text-gray-500 hover:text-blue-900"
        to="/contact#contact"
      >
        <Trans i18nKey="navlink.contact">Contact</Trans>
      </HashLink>
      <div className="inline px-2">
        {Object.keys(langs).map((key, index) => (
          <React.Fragment key={key}>
            <button
              className={`px-2 font-extrabold text-gray-500 hover:text-blue-900`}
              onClick={() => i18n.changeLanguage(key)}
            >
              {langs[key].displayName}
            </button>
            {index !== Object.keys(langs).length - 1 && "/"}
          </React.Fragment>
        ))}
      </div>
      <HashLink
        className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl"
        smooth
        to="/get-demo#demo"
      >
        <Trans i18nKey="navlink.demo-btn">Demo our products</Trans>
      </HashLink>
    </>
  );
};

export default NavLinks;
