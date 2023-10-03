import mkLogo from '../assets/imgs/logo/logo_vrmk.png'
import { NavLink, useLocation } from 'react-router-dom';

function Navs(){

    let location = useLocation(); 

    return(
        <>

        {/** FOR MOBILE */}
        <div id="mNav" className="fixed bg-dark-moss-green-2 text-avocado-3 w-full h-[90%] -translate-y-[100%] transition-all duration-300 font-domine z-[100]">
            <div className="flex flex-row-reverse p-3">
                <button id="mNav_close"><i className="fa-solid fa-close text-2xl"></i></button>
            </div>
            <div className="flex items-center flex-col text-xl font-bold">
                <a href="/villa" className={`py-3 ${location.pathname === '/villa' ? "pointer-events-none" : ""}`}>Villa</a>
                <a href="/resto" className={`py-3 ${location.pathname === '/resto' ? "pointer-events-none" : ""}`}>Resto</a>
                <a href="/experiences" className={`py-3 ${location.pathname === '/experiences' ? "pointer-events-none" : ""}`}>Experiences</a>
                <a href="/contact" className={`py-3 my-2 ${location.pathname === '/contact' ? "pointer-events-none" : ""}`}>Contact Us</a>
                <span className="h-[1px] w-[20px] bg-avocado-3"></span>
                <h3 className="font-bold text-2xl p-2">Reservations</h3>
                <a href="#" className="p-3 rounded-lg border border-avocado-3 text-sm">Direct to <span><i className="fa-brands fa-whatsapp"></i></span></a>
                <div className="m-[5px]"></div>
                <a href="#" className="p-3 rounded-lg border border-avocado-3 text-sm">Booking.com</a>
            </div>
        </div>
    
    
      <div id="navigations" className="flex justify-between p-3 no-underline bg-avocado-3/70 text-dark-moss-green-1 font-domine font-bold fixed top-0 left-0 w-full transition-all duration-200">
          <div id="navigation-left" className="flex items-center">
              <a href="/" className={`hover:scale-[1.1] active:scale-[1.05] transition-all duration-200 ${location.pathname === '/' ? "pointer-events-none" : ""}`}><img src={mkLogo} className="w-20"/></a>
              <div id="nav-lists" className="px-2 max-[605px]:hidden text-shadow-sm">
                  <a href="/villa" className={`px-2 transition-all ease-in-out delay-50 duration-300 drop-shadow-sm hover:text-avocado-2 hover:text-[16.5px] active:text-[15.8px] ${location.pathname === '/villa' ? "pointer-events-none" : ""}`}>Villa</a>
                  <a href="/resto" className={`px-2 transition-all ease-in-out delay-50 duration-300 drop-shadow-sm hover:text-avocado-2 hover:text-[16.5px] active:text-[15.8px] ${location.pathname === '/resto' ? "pointer-events-none" : ""}`}>Resto</a>
                  <a href="/experiences" className={`px-2 transition-all ease-in-out delay-50 duration-300 drop-shadow-sm hover:text-avocado-2 hover:text-[16.5px] active:text-[15.8px] ${location.pathname === '/experiences' ? "pointer-events-none" : ""}`}>Experiences</a>
                  <a href="/contact" className={`px-2 transition-all ease-in-out delay-50 duration-300 drop-shadow-sm hover:text-avocado-2 hover:text-[16.5px] active:text-[15.8px] ${location.pathname === '/contact' ? "pointer-events-none" : ""}`}>Contact Us</a>
              </div>
          </div>
          <div id="navigation-right" className="flex items-center">
              <div id="r-nav-lists" className="px-2">
                  <button type='button' id='toggleMnav' className="px-2 transition-all ease-in-out delay-50 duration-300 hover:text-avocado-2 hover:text-[16.5px] active:text-[15.5px] min-[605px]:hidden"><i className="fa-solid fa-ellipsis"></i></button>
              </div>
          </div>
      </div>
        </>
    )
}
export default Navs;