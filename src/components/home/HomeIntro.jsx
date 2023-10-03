import section1_768x1024 from '../../assets/imgs/section1-768x1024.jpg'
import section2_768x1024 from '../../assets/imgs/section2-768x1024.jpg'
import { Reveal } from '../Reveal';


function HomeIntro(){
    return(
        <>
            <div className="container max-w-[99%] font-oak-sans mx-auto p-[3rem]">
            <Reveal animate_position="vertical">
            <div className="row">
                <div className="flex-auto w-[10%] max-w-[500px] self-center align-middle">
                    <p className="min-[600px]:text-sm font-medium text-gray-400 max-[600px]:text-xs">Villa & Resto Munduk Kupang</p>
                    <h1 className="font-domine text-[36px] font-bold leading-9 whitespace-pre-line text-dark-moss-green-3">Welcome to the Hidden 
                        Paradise in Bali
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Officiis, eos aliquam aliquid tenetur, enim consequatur 
                    praesentium magnam rem autem ex placeat minima veritatis vel! Veniam.
                    </p>
                </div>
                <div className="flex-auto w-[16%]">
                    <div className="flex gap-4 max-[700px]:flex-col min-[702px]:flex-row justify-evenly static">
                        <img src={section1_768x1024} alt="" className="max-[600px]:w-48 min-[601px]:w-40 min-[999px]:w-[240px] min-[984px]:w-[250px] my-2 rounded-[30px] transition-colors duration-150"/>
                        <img src={section2_768x1024} alt="" className="max-[600px]:w-48 min-[601px]:w-40 min-[984px]:w-[222.6px] min-[999px]:w-[240px] my-5 rounded-[30px] transition-colors duration-150"/>
                    </div>
                </div>
            </div>
            </Reveal>
            </div>
        </>
    )
}
export default HomeIntro;
