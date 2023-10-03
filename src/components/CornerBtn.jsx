export default function CornerBtn(){
    return(
        <>
        
        <button type="button" id="back-to-top" className="fixed z-90 bottom-20 right-8  text-avocado-2 w-[3.3rem] h-[3.3rem] rounded-md-kupang-1 drop-shadow-lg flex justify-center items-center text-4xl hover:scale-[1.05] hover:transition-all duration-500 active:scale-[0.99] hover:text-avocado-1 translate-x-[150%]">
            <i className="fa-solid fa-chevron-up"></i>
        </button>

        <button id="wa-btn" type="button" onClick={()=>window.my_modal_5.showModal()} className="fixed z-90 bottom-5 right-8 bg-avocado-2 text-avocado-1 w-[3.3rem] h-[3.3rem] rounded-md-kupang-1 drop-shadow-lg flex justify-center items-center text-4xl hover:scale-[1.05] hover:bg-avocado-1 hover:transition-all duration-150 active:scale-[0.99] hover:text-avocado-3">
            <i className="fa-brands fa-whatsapp"></i>
        </button>

        <dialog id="my_modal_5" className="modal max-[700px]:modal-bottom modal-middle">
        <form method="dialog" className="modal-box">
            <h3 className="font-bold text-lg font-domine">Call or Chat via WhatsApp</h3>
            <p className="py-4">Do you want to contact this number? (You will be redirected to WhatsApp)</p>
            <div className="modal-action">

            <a className="btn" href="https://wa.me/6285738888854">Yes</a>
            <button className="btn">No</button>
            </div>
        </form>
        </dialog>

        
        </>
    )
}