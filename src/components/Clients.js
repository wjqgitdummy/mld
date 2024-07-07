import React from "react";
import samsung from "../images/clients/samsung.png";
import lenovo from "../images/clients/lenovo.png";
import kerry from "../images/clients/kerry.png";
import capitaland from "../images/clients/capitaland.png";
import qualcomm from "../images/clients/qualcomm.png";
import sophgo from "../images/clients/sophgo.svg";
import { useTranslation, Trans } from "react-i18next";

const clientImage = {
  height: "10rem",
  width: "auto",
  mixBlendMode: "colorBurn",
};

const Clients = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="mt-8 bg-gray-100">
      <section data-aos="fade-up">
        <div className="my-4 py-4">
          <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
            <Trans i18nKey="partners.title">OUR PARTNERS</Trans>
          </h2>
          <div className="flex justify-center">
            <div className="w-24 border-b-4 border-blue-900"></div>
          </div>
          <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">
            <Trans i18nKey="partners.desc">
              Some of our partners and clients
            </Trans>
          </h2>
        </div>

        <div className="p-16" data-aos="fade-in" data-aos-delay="600">
          <div className="grid sm:grid-cols-3 lg:grid-cols-3">
            <div
              style={clientImage}
              className="overflow-hidden flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100 w-1/6"
            >
              <img src={samsung} alt="client" />
            </div>

            <div
              style={clientImage}
              className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100"
            >
              <img src={lenovo} alt="client" />
            </div>

            <div
              style={clientImage}
              className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100"
            >
              <img src={kerry} alt="client" />
            </div>

            <div
              style={clientImage}
              className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100"
            >
              <img src={capitaland} alt="client" />
            </div>

            <div
              style={clientImage}
              className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100"
            >
              <img src={qualcomm} alt="client" />
            </div>

            <div
              style={clientImage}
              className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100"
            >
              <img src={sophgo} alt="client" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;
