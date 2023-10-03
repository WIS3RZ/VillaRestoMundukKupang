import { Reveal } from "../Reveal";

export default function Amenities() {
  return (
    <>
      <div className="mx-auto max-w-full bg-slate-50">
        <Reveal>
          <div className="flex flex-col p-5 max-w-[90%] mx-auto">
            <h2 className="font-domine">Amenities</h2>
            <div className="my-3"></div>

            <div className="grid grid-rows-2 grid-cols-3 grid-flow-col gap-4 font-domine">
              <div className="border-solid border-dark-moss-green-3 border-[1.2px] rounded-xl">
                <div className="flex flex-col p-3 text-dark-moss-green-2">
                  <i className="fa-solid fa-users text-6xl"></i>
                  <div className="my-2"></div>
                  <h3 className="max-[650px]:text-lg">1 - 2 people</h3>
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
                  <i className="fa-solid fa-wifi text-5xl min-[650px]:text-6xl"></i>
                  <div className="my-2"></div>
                  <h3 className="max-[650px]:text-lg">Free Wi-Fi</h3>
                </div>
              </div>

              <div className="border-solid border-dark-moss-green-3 border-[1.2px] rounded-xl">
                <div className="flex flex-col p-3 text-dark-moss-green-2">
                  <i className="fa-solid fa-toilet-paper text-5xl min-[650px]:text-6xl"></i>
                  <div className="my-2"></div>
                  <h3 className="max-[650px]:text-lg">Towel</h3>
                </div>
              </div>

              <div className="border-solid border-dark-moss-green-3 border-[1.2px] rounded-xl">
                <div className="flex flex-col p-3 text-dark-moss-green-2">
                  <i className="fa-solid fa-expand text-5xl min-[650px]:text-6xl"></i>
                  <div className="my-2"></div>
                  <h3 className="max-[650px]:text-lg">
                    25 m<sup>2</sup>
                  </h3>
                </div>
              </div>

              <div className="border-solid border-dark-moss-green-3 border-[1.2px] rounded-xl">
                <div className="flex flex-col p-3 text-dark-moss-green-2">
                  <i className="fa-solid fa-shower text-5xl min-[650px]:text-6xl"></i>
                  <div className="my-2"></div>
                  <h3 className="max-[650px]:text-lg">Hot & Cold Shower</h3>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </>
  );
}
