import aleksandra_dementeva_0 from "@/assets/hero/aleksandra-dementeva-O_B1LTxHb98-unsplash-1536x1024.jpg";
import { Reveal } from "@/components/Reveal";
export default function ExpIntro() {
  return (
    <>
      <div className="container w-[90%] mx-auto">
        <Reveal>
          <div className="flex flex-col flex-auto my-[50px]">
            <div className="grid grid-flow-row grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2">
              <div className="mx-10 my-auto ">
                <h2 className="font-domine">This is text</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur saepe eos tenetur in incidunt sunt?
                </p>
              </div>
              <div>
                <img src={aleksandra_dementeva_0} className="w-[80%] rounded-2xl mx-auto" />
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="flex flex-col flex-auto">
            <div className="grid grid-flow-row grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 my-5">
              <div className="order-last md:order-first">
                <img src={aleksandra_dementeva_0} className="w-[80%] rounded-2xl mx-auto" />
              </div>
              <div className="my-auto mx-10 md:text-left max-w-[80%]">
                <h2 className="font-domine">This is text</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur saepe eos tenetur in incidunt sunt?
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </>
  );
}
