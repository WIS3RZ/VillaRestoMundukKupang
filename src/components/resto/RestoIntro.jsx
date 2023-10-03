import { Reveal } from "../Reveal";
import RestoCarousel from "./RestoCarousel";

export default function RestoIntro() {
  return (
    <>
      <div className="container max-w-[99%] font-oak-sans mx-auto p-[3rem]">
        <Reveal>
        <div className="row">
          <div className="flex-auto w-[16%]">
            <div className="flex gap-4 max-[700px]:flex-col min-[702px]:flex-row justify-evenly static">
              <RestoCarousel />
            </div>
          </div>
          <div className="flex-auto w-[10%] max-w-[500px] self-center align-middle">
            <Reveal>
              <p className="min-[600px]:text-sm font-medium text-gray-400 max-[600px]:text-xs">
                Villa & Resto Munduk Kupang
              </p>
              <h1 className="font-domine text-[36px] font-bold leading-9 whitespace-pre-line text-dark-moss-green-3">
                Resto
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, eos aliquam aliquid tenetur, enim
                consequatur praesentium magnam rem autem ex placeat minima veritatis vel! Veniam.
              </p>
            </Reveal>
          </div>
        </div>
        </Reveal>
      </div>
    </>
  );
}
