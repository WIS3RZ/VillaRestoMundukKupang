import ReactRotatingText from 'react-rotating-text';
import { Reveal } from '../Reveal';
export default function ExpTheBest() {
  return (
    <>
      <div className="mx-auto max-w-full bg-slate-50">
        <Reveal animate_position="vertical">
        <div className="flex flex-row p-5 max-w-[90%] mx-auto flex-1">
          <div className="flex flex-col w-[50%]">
            <div className="my-[20%] text-center">
              <h1 className="font-domine">
                Experience the best <span className='text-avocado-1'><ReactRotatingText items={['relaxation', 'healing', 'honeymoon', 'holiday']}/></span>
              </h1>
              <p className="font-kaushan-script text-2xl text-yellow-600">Let's go around</p>
            </div>

          </div>
        </div>
        </Reveal>
      </div>
    </>
  );
}
