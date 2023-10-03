import { Reveal } from "../Reveal";

export default function RestoMenu() {
  return (
    <>
      <div
        className="mx-auto max-w-full bg-cover bg-fixed"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url('/src/assets/imgs/resto-carousel-3.jpg')`,
        }}
      >
        <div className="container mx-auto">
          <h1 className="text-center font-domine py-2 text-slate-50">The Menu</h1>
          <Reveal>
            <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 grid-flow-col gap-3 p-3">
              <div className="bg-slate-50 rounded-lg p-2">
                <h2 className="text-center font-domine">Foods</h2>
                {/** MENU LIST */}
                <div className="flex flex-row items-center justify-between p-2">
                  <p className="text-sm">Egg Bennedict</p>
                  <div className="w-[50%] h-[1px] bg-slate-200 mx-3"></div>
                  <p className="text-sm">Rp. 35,000</p>
                </div>
                <div className="flex flex-row items-center justify-between p-2">
                  <p className="text-sm">Fried Rice</p>
                  <div className="w-[50%] h-[1px] bg-slate-200 mx-3"></div>
                  <p className="text-sm">Rp. 40,000</p>
                </div>
                <div className="flex flex-row items-center justify-between p-2">
                  <p className="text-sm">Lawar</p>
                  <div className="w-[50%] h-[1px] bg-slate-200 mx-3"></div>
                  <p className="text-sm">Rp. 40,000</p>
                </div>
              </div>

              <div className="bg-slate-50 rounded-lg p-2">
                <h2 className="text-center font-domine">Beverages</h2>
                {/** MENU LIST */}
                <div className="flex flex-row items-center justify-between p-2">
                  <p className="text-sm">Signature Coffee</p>
                  <div className="w-[50%] h-[1px] bg-slate-200 mx-3"></div>
                  <p className="text-sm">Rp. 35,000</p>
                </div>
                <div className="flex flex-row items-center justify-between p-2">
                  <p className="text-sm">Iced Tea</p>
                  <div className="w-[50%] h-[1px] bg-slate-200 mx-3"></div>
                  <p className="text-sm">Rp. 25,000</p>
                </div>
                <div className="flex flex-row items-center justify-between p-2">
                  <p className="text-sm">Sparkling Water</p>
                  <div className="w-[50%] h-[1px] bg-slate-200 mx-3"></div>
                  <p className="text-sm">Rp. 25,000</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </>
  );
}
