import React from "react";
import { Reveal } from "./Reveal";

import { useLocation } from "react-router-dom";
function Foot() {
  return (
    <>
      <div className="mx-auto max-w-full bg-avocado-1 text-slate-200">
        <div className="flex flex-col p-5 max-w-[90%] mx-auto">
          <div className="grid max-md:grid-cols-1 grid-cols-3 gap-8 font-oak-sans">
            <div className="p-3">
              <Reveal>
                <h2 className="font-domine">Villa & Resto </h2>
                <h2 className="font-domine">Munduk Kupang</h2>
                <p>Sekumpul, Kec. Sawan, Kabupaten Buleleng, Bali 81171</p>
              </Reveal>
            </div>
            <div className="p-3">
              <Reveal animate_position={"-vertical"}>
                <h2 className="font-domine">Explore</h2>
                <div className="flex flex-col px-1 my-2 text-lg">
                  <a href="/villa" className="hover:text-[19px] transition-all duration-200">
                    Villa
                  </a>
                  <a href="/resto" className="hover:text-[19px] transition-all duration-200">
                    Resto
                  </a>
                  <a href="/experiences" className="hover:text-[19px] transition-all duration-200">
                    Experience
                  </a>
                  <a href="/contact" className="hover:text-[19px] transition-all duration-200">
                    Contact Us
                  </a>
                </div>
              </Reveal>
            </div>
            <div className="p-3">
              <Reveal animate_position={'vertical'}>
                <h2 className="font-domine">Contact</h2>
                <div className="flex flex-col">
                  <a className="text-lg font-bold" href="https://wa.me/6285738888854">
                    <span>
                      <i className="fa-brands fa-whatsapp"></i>
                    </span>
                    <span className="mx-2">+62 857 3888 8854</span>
                  </a>
                  <p>info@villarestomundukkupang.com</p>
                  <div className="my-2"></div>
                  <div className="flex flex-row">
                    <a>
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a className="mx-2">
                      <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a>
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-full bg-dark-moss-green-2 text-slate-200">
        <div className="flex flex-col p-5 max-w-[90%] mx-auto">
          <div className="flex flex-row items-center">
            <p>©{new Date().getFullYear()} Villa & Resto Munduk Kupang</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Foot;
