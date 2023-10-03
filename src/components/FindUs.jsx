import { Reveal } from "./Reveal";
import VillaLocation from "./VillaLocation";
export default function FindUs() {
  return (
    <>
      <div className="mx-auto max-w-full bg-green-200">
        <Reveal>
          <div className="grid md:grid-rows-1 grid-rows-2 grid-cols-1 md:grid-cols-2 grid-flow-col md:grid-flow-row md:max-h-[300px] md:order-first">
            <div className="w-full md:max-w-[500px] px-3 mx-auto md:order-first order-last">
              <VillaLocation />
            </div>
            <div className="p-5">
              <div className="p-3 md:text-justify text-center">
                <p className="font-semibold text-slate-400">Villa & Resto Munduk Kupang</p>
                <h1 className="font-domine text-dark-moss-green-2">Find Us</h1>
                <p className="text-sm md:max-w-[60%]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, reprehenderit nobis! Sint ipsa
                  hic ipsum. Obcaecati, totam tempore ab odio dignissimos repellendus delectus error iure laudantium
                  quia nihil ipsum! Nesciunt!
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </>
  );
}
