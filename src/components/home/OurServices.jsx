import React from "react";
import { Reveal } from "../Reveal";

function OurServices() {
  return (
    <>
      <div className="mx-auto max-w-full bg-slate-50">
        <div className="flex flex-col p-5 max-w-[90%] mx-auto">
          <h2 className="font-domine">Our Services</h2>
          <div className="my-3"></div>

          <Reveal animate_position="vertical">
            <div className="grid grid-rows-3 grid-cols-3 grid-flow-col gap-4 font-domine">
              <div className="border-solid border-dark-moss-green-3 border-[1.2px] rounded-xl">
                <div className="flex flex-col p-3 text-dark-moss-green-2">
                  <i className="fa-solid fa-utensils text-6xl"></i>
                  <div className="my-2"></div>
                  <h3 className="max-[650px]:text-lg">Restaurant</h3>
                </div>
              </div>

              <div className="border-solid border-dark-moss-green-3 border-[1.2px] rounded-xl">
                <div className="flex flex-col p-3 text-dark-moss-green-2">
                  <i className="fa-solid fa-wifi text-5xl min-[650px]:text-6xl"></i>
                  <div className="my-2"></div>
                  <h3 className="max-[650px]:text-lg">Free Wi-Fi</h3>
                </div>
              </div>

              <div className="border-solid border-dark-moss-green-3 border-[1.2px] rounded-xl">
                <div className="flex flex-col p-3 text-dark-moss-green-2">
                  <i className="fa-solid fa-water-ladder text-5xl min-[650px]:text-6xl"></i>
                  <div className="my-2"></div>
                  <h3 className="max-[650px]:text-[16px]">Swimming Pool</h3>
                </div>
              </div>

              <div className="border-solid border-dark-moss-green-3 border-[1.2px] rounded-xl">
                <div className="flex flex-col p-3 text-dark-moss-green-2">
                  <i className="fa-solid fa-square-parking text-5xl min-[650px]:text-6xl"></i>
                  <div className="my-2"></div>
                  <h3 className="max-[650px]:text-lg">Free Parking</h3>
                </div>
              </div>

              <div className="border-solid border-dark-moss-green-3 border-[1.2px] rounded-xl">
                <div className="flex flex-col p-3 text-dark-moss-green-2">
                  <i className="fa-solid fa-bacon text-5xl min-[650px]:text-6xl"></i>
                  <div className="my-2"></div>
                  <h3 className="max-[650px]:text-lg">Barbeque</h3>
                </div>
              </div>

              <div className="border-solid border-dark-moss-green-3 border-[1.2px] rounded-xl">
                <div className="flex flex-col p-3 text-dark-moss-green-2">
                  <i className="fa-solid fa-bed text-5xl min-[650px]:text-6xl"></i>
                  <div className="my-2"></div>
                  <h3 className="max-[650px]:text-lg">Room Service</h3>
                </div>
              </div>

              <div className="border-solid border-dark-moss-green-3 border-[1.2px] rounded-xl">
                <div className="flex flex-col p-3 text-dark-moss-green-2">
                  <i className="fa-solid fa-mountain text-5xl min-[650px]:text-6xl"></i>
                  <div className="my-2"></div>
                  <h3 className="max-[650px]:text-lg">Hill View</h3>
                </div>
              </div>

              <div className="border-solid border-dark-moss-green-3 border-[1.2px] rounded-xl">
                <div className="flex flex-col p-3 text-dark-moss-green-2">
                  <div className="flex flex-row items-center">
                    <i className="fa-solid fa-bread-slice text-5xl min-[650px]:text-6xl"></i>
                    <i className="fa-solid fa-mug-hot text-5xl min-[650px]:text-6xl"></i>
                  </div>
                  <div className="my-2"></div>
                  <h3 className="max-[650px]:text-lg">Breakfast</h3>
                </div>
              </div>

              <div className="border-solid border-dark-moss-green-3 border-[1.2px] rounded-xl">
                <div className="flex flex-col p-3 text-dark-moss-green-2">
                  <i className="fa-solid fa-car-side text-6xl"></i>
                  <div className="my-2"></div>
                  <h3 className="max-[650px]:text-lg">Pick Up & Drop</h3>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </>
  );
}
export default OurServices;
