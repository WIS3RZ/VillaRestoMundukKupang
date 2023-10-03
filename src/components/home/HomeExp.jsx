import { Reveal } from "../Reveal";

export default function HomeExp() {
  return (
    <>
      <div className="mx-auto max-w-full bg-slate-50">
        <div className="flex flex-col p-5 max-w-[90%] mx-auto">
          
            <div className="flex-auto w-[40%]">
              <small className="font-medium text-gray-400">Villa dan Resto Munduk Kupang</small>
              <h3 className="font-domine font-bold text-3xl text-avocado-1">Living the Experience</h3>
            </div>
            <Reveal animate_position="vertical">
            <div className="grid max-sm:grid-cols-1 max-sm:grid-rows-3 grid-rows-2 grid-flow-col gap-3">
              <div className="col-span-2 rounded-lg bg-md-kupang-hero-1 h-[50vh] hover:bg-[40%_40%] bg-cover bg-center transition-all duration-300"></div>
              <div className="bg-img-exp-1 row-span-1 bg-cover bg-center rounded-lg hover:bg-[40%_40%] transition-all duration-300"></div>
              <div className="bg-img-exp-2 row-span-1 rounded-lg bg-center bg-cover hover:bg-[40%_40%] transition-all duration-300"></div>
            </div>
          </Reveal>
        </div>
      </div>
    </>
  );
}
